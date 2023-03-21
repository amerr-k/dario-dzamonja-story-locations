import React, { useState } from "react";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

interface IProps {
  location: any;
  getQuotesByLocation(locationId: string): Promise<any[]>;
  getStory(stringId: string): void;
}

function LocationMarker(props: IProps) {
  const { getQuotesByLocation, getStory, location } = props;
  const [quotes, setQuotes] = useState<any[]>([]);
  const [quotesSpinner, setQuotesSpinner] = useState<boolean>(false);
  const [openLocationId, setOpenLocationId] = useState<String | undefined>(
    undefined
  );

  const qetQuotes = async (locationId: string) => {
    setQuotesSpinner(true);
    setQuotes(await getQuotesByLocation(locationId));
    setQuotesSpinner(false);
    setOpenLocationId(locationId);
  };

  return (
    <Marker
      position={[location.latitude, location.longitude] as LatLngExpression}
      eventHandlers={{
        popupopen: async (e: any) => {
          if (openLocationId !== location.id) {
            qetQuotes(location.id);
          }
        },
      }}
    >
      <Popup>
        {!quotesSpinner ? (
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
        ) : (
          <div className="wrapper">
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        )}
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
