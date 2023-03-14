import React, { useEffect } from "react";
import "./App.css";
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import { Component } from "react";
import L, { LatLngExpression } from "leaflet";
import GenericMarker from "./components/GenericMarker";
import databaseService from "./components/DatabaseService";
import Button from "react-bootstrap/Button";
import Story from "./components/Story";
import GenericMarkers from "./components/GenericMarkers";
import { Spinner } from "react-bootstrap";
const sarajevo: LatLngExpression = [43.85643, 18.413029];
const ulicaJezero: LatLngExpression = [43.86006275854989, 18.412784126061856];
const skenderijaMost: LatLngExpression = [43.85592739279412, 18.4132047800942];
const marijinDvor: LatLngExpression = [43.85585448122983, 18.40711979077634];
const kosevskoBrdo: LatLngExpression = [43.87000840087395, 18.405366333666393];
const katedrala: LatLngExpression = [43.859416563235264, 18.425419091662633];
const vilsonovoSetaliste: LatLngExpression = [
  43.85303379999868, 18.39292119999612,
];

const getQuotesByLocation = async (locationId: string): Promise<any[]> => {
  return await databaseService.getQuotesByLocation(locationId);
};

const getAllLocations = async (): Promise<any[]> => {
  return await databaseService.getAllLocations();
};

const getStoryById = async (storyId: string): Promise<any> => {
  return await databaseService.getStoryById(storyId);
};

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [locations, setLocations] = React.useState<any[]>([] as any[]);
  const [story, setStory] = React.useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getAllLocations();
        setLocations(locations);
      } catch (error) {
        console.error(error);
        setLocations([]);
      }
    };

    fetchData();
  }, []);

  const showStoryModal = (show: boolean) => {
    setModalShow(show);
  };

  const getStory = async (storyId: string) => {
    try {
      const story = await getStoryById(storyId);
      console.log("story");
      console.log(story);
      setStory(story);
      showStoryModal(true);
    } catch (error) {
      console.error(error);
      setStory("");
    }
  };

  return locations.length !== 0 ? (
    <div className="wrapper home-body">
      <MapContainer
        center={sarajevo}
        zoom={13}
        scrollWheelZoom={false}
        style={{ border: "5px solid	#87CEEB" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GenericMarkers
          locations={locations}
          getQuotesByLocation={getQuotesByLocation}
          getStory={getStory}
        ></GenericMarkers>
      </MapContainer>
      <Story
        show={modalShow}
        onHide={() => showStoryModal(false)}
        story={story}
      />
    </div>
  ) : (
    <div className="wrapper">
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
};

export default HomePage;
