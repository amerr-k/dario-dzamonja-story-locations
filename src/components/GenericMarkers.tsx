import React from "react";
import GenericMarker from "./GenericMarker";

interface IProps {
  locations: any[];
  getQuotesByLocation(locationId: string): Promise<any[]>;
  getStory(storyId: string): void;
}

function GenericMarkers(props: IProps) {
  const { getQuotesByLocation, getStory, locations } = props;

  return (
    <React.Fragment>
      {locations.map((location) => (
        <GenericMarker
          key={location.id}
          location={location}
          getQuotesByLocation={getQuotesByLocation}
          getStory={getStory}
        ></GenericMarker>
      ))}
    </React.Fragment>
  );
}

export default GenericMarkers;
