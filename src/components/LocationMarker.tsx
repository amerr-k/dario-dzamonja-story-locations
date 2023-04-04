import React, { useState } from "react";
import { LatLngExpression } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import L from "leaflet";
import { getIconUrl } from "../utils/MarkerUtils";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const pointerIcon = new L.Icon({
    iconUrl: getIconUrl(location),
    iconSize: [26, 35],
    iconAnchor: [13, 35],
  });

  const qetQuotes = async (locationId: string) => {
    setQuotesSpinner(true);
    setQuotes(await getQuotesByLocation(locationId));
    setQuotesSpinner(false);
    setOpenLocationId(locationId);
  };

  return (
    <Marker
      icon={pointerIcon}
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
                    {t("story.read_whole_story")}
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
