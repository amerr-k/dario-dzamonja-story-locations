import React, { useEffect } from "react";
import "../App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import databaseService from "../components/DatabaseService";
import Story from "../components/Story";
import GenericMarkers from "../components/LocationMarkers";
import { Spinner } from "react-bootstrap";

const locLatitude = 43.85643;
const locLongitude = 18.413029;

const sarajevoLocation: LatLngExpression = [locLatitude, locLongitude];

const getQuotesByLocation = async (locationId: string): Promise<any[]> => {
  return await databaseService.getQuotesByLocation(locationId);
};

const getAllLocations = async (): Promise<any[]> => {
  return await databaseService.getAllLocations();
};

const getStoryById = async (storyId: string): Promise<any> => {
  return await databaseService.getStoryById(storyId);
};

const createQuote = async (): Promise<any> => {
  return await databaseService.createQuote();
};
const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [locations, setLocations] = React.useState<any[]>([] as any[]);
  const [story, setStory] = React.useState<string>("");
  const [locationSpinner, setLocationSpinner] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getAllLocations();
        setLocations(locations);
        setLocationSpinner(false);
      } catch (error: any) {
        console.error(error);
        setLocations([]);
        setLocationSpinner(false);
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
      setStory(story);
      showStoryModal(true);
    } catch (error) {
      console.error(error);
      setStory("");
    }
  };

  return !locationSpinner ? (
    <div className="wrapper home-body">
      <button onClick={() => createQuote()}>klikni me</button>
      <MapContainer
        center={sarajevoLocation}
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
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
};

export default HomePage;
