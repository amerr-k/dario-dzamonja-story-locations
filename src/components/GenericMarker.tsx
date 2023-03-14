import React, { useState } from "react";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import Button from "react-bootstrap/Button";

interface IProps {
  location: any;
  getQuotesByLocation(locationId: string): Promise<any[]>;
  getStory(stringId: string): void;
}

function GenericMarker(props: IProps) {
  const { getQuotesByLocation, getStory, location } = props;
  const [quotes, setQuotes] = useState<any[]>([]);
  return (
    <Marker
      position={[location.latitude, location.longitude] as LatLngExpression}
      eventHandlers={{
        click: async (e: LeafletMouseEvent) => {
          setQuotes(await getQuotesByLocation(location.id));
        },
      }}
    >
      <Popup>
        <React.Fragment>
          <ul className="list-group">
            {quotes.map((quote) => (
              <li key={quote.id}>
                <div>{quote.content}</div>
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => getStory(quote.storyId)}
                >
                  Pročitajte cijelu priču...
                </Button>
              </li>
            ))}
          </ul>
        </React.Fragment>
      </Popup>
    </Marker>
  );
}

export default GenericMarker;
