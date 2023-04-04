import React, { useEffect } from "react";
import "../App.css";
import databaseService from "../components/DatabaseService";
import { Alert, Spinner } from "react-bootstrap";
import SarajevoMap from "../components/SarajevoMap";
import Location from "../models/Location";
import Story from "../models/Story";
import Quote from "../models/Quote";
import { useTranslation } from "react-i18next";

const getQuotesByLocation = async (locationId: string): Promise<Quote[]> => {
  return await databaseService.getQuotesByLocation(locationId);
};

const HomePage = () => {
  const [storyModalShow, setStoryModalShow] = React.useState(false);
  const [locations, setLocations] = React.useState<Location[]>(
    [] as Location[]
  );
  const [locationSpinner, setLocationSpinner] = React.useState<boolean>(true);
  const [story, setStory] = React.useState<Story>({} as Story);
  const [alert, setAlert] = React.useState<string | undefined>(undefined);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await databaseService.getAllLocations();
        setLocations(locations);
        setLocationSpinner(false);
      } catch (error: any) {
        console.error(error);
        setLocations([]);
        setLocationSpinner(false);
        setAlertMessage(t("error.location_err_msg"));
      }
    };

    fetchData();
  }, []);

  const getStory = async (storyId: string) => {
    try {
      const story = await databaseService.getStoryById(storyId);
      setStory(story);
      showStoryModal(true);
    } catch (error) {
      console.error(error);
      setStory({} as Story);
      setAlertMessage(t("error.story_err_msg"));
    }
  };

  const showStoryModal = (show: boolean) => {
    setStoryModalShow(show);
  };

  const setAlertMessage = (message: string): void => {
    setAlert(message);
    setTimeout(() => {
      const fadeOutEl = document.querySelector(".fade-out");
      if (fadeOutEl) {
        fadeOutEl.classList.add("fade-out-done");
        setTimeout(() => {
          setAlert(undefined);
        }, 1000);
      }
    }, 2000);
  };
  return !locationSpinner ? (
    <div style={{ height: "100%" }}>
      {alert != undefined ? (
        <div className="custom-alert fade-out">
          <Alert
            className="mb-0"
            dismissible={true}
            variant={"dark"}
            onClose={() => setAlert(undefined)}
          >
            <Alert.Heading>{t("error.err_title")}</Alert.Heading>
            <p className="mb-0">{alert}</p>
          </Alert>
        </div>
      ) : null}
      <SarajevoMap
        locations={locations}
        story={story}
        getStory={getStory}
        getQuotesByLocation={getQuotesByLocation}
        storyModalShow={storyModalShow}
        showStoryModal={showStoryModal}
      />
    </div>
  ) : (
    <div className="map-wrapper">
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
};

export default HomePage;
