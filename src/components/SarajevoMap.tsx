import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Story from "./Story";
import LocationMarkers from "./LocationMarkers";
import { LatLngExpression } from "leaflet";

const locLatitude = 43.860999;
const locLongitude = 18.413029;
const sarajevoZoom = 14;
const sarajevoLocation: LatLngExpression = [locLatitude, locLongitude];

interface IProps {
  locations: any[];
  story: any;
  getStory: (storyId: string) => any;
  getQuotesByLocation: (locationId: string) => Promise<any[]>;
  storyModalShow: boolean;
  showStoryModal: (show: boolean) => void;
}

const SarajevoMap = (props: IProps) => {
  const {
    locations,
    getStory,
    getQuotesByLocation,
    story,
    showStoryModal,
    storyModalShow,
  } = props;

  return (
    <div className="map-wrapper">
      <MapContainer
        center={sarajevoLocation}
        zoom={sarajevoZoom}
        scrollWheelZoom={false}
        style={{ border: "5px solid	#87CEEB" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarkers
          locations={locations}
          getQuotesByLocation={getQuotesByLocation}
          getStory={getStory}
        ></LocationMarkers>
      </MapContainer>
      <Story
        show={storyModalShow}
        onHide={() => showStoryModal(false)}
        story={story}
      />
    </div>
  );
};

export default SarajevoMap;
