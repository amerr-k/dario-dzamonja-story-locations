import React from "react";
import { FeatureGroup, LayersControl } from "react-leaflet";
import Location from "../models/Location";
import LocationMarker from "./LocationMarker";
import { useTranslation } from "react-i18next";

interface IProps {
  locations: Location[];
  getQuotesByLocation(locationId: string): Promise<any[]>;
  getStory(storyId: string): void;
}

function LocationMarkers(props: IProps) {
  const { getQuotesByLocation, getStory, locations } = props;
  const { t } = useTranslation();

  const streetLocations = locations.filter(
    (location) => location.type === "street"
  );
  const cityPartLocations = locations.filter(
    (location) => location.type === "city_parts"
  );
  const cinemaLocations = locations.filter(
    (location) => location.type === "cinema"
  );
  const coffeeLocations = locations.filter(
    (location) => location.type === "coffee_and_other"
  );
  const otherLocations = locations.filter(
    (location) => location.type === "other"
  );
  return (
    <React.Fragment>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name={t("legend.streets")}>
          <FeatureGroup>
            {streetLocations.map((location) => (
              <LocationMarker
                key={location.id}
                location={location}
                getQuotesByLocation={getQuotesByLocation}
                getStory={getStory}
              ></LocationMarker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name={t("legend.city_parts")}>
          <FeatureGroup pathOptions={{ fillColor: "black" }}>
            {cityPartLocations.map((location) => (
              <LocationMarker
                key={location.id}
                location={location}
                getQuotesByLocation={getQuotesByLocation}
                getStory={getStory}
              ></LocationMarker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name={t("legend.cinemas")}>
          <FeatureGroup>
            {cinemaLocations.map((location) => (
              <LocationMarker
                key={location.id}
                location={location}
                getQuotesByLocation={getQuotesByLocation}
                getStory={getStory}
              ></LocationMarker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name={t("legend.coffee_and_other")}>
          <FeatureGroup>
            {coffeeLocations.map((location) => (
              <LocationMarker
                key={location.id}
                location={location}
                getQuotesByLocation={getQuotesByLocation}
                getStory={getStory}
              ></LocationMarker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name={t("legend.other")}>
          <FeatureGroup>
            {otherLocations.map((location) => (
              <LocationMarker
                key={location.id}
                location={location}
                getQuotesByLocation={getQuotesByLocation}
                getStory={getStory}
              ></LocationMarker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </React.Fragment>
  );
}

export default LocationMarkers;
