import otherMarker from "../../src/data/otherMarker.png";
import cinemaMarker from "../../src/data/cinemaMarker.png";
import cityPartMarker from "../../src/data/cityPartMarker.png";
import streetMarker from "../../src/data/streetMarker.png";
import coffeeAndOtherMarker from "../../src/data/coffeeAndOtherMarker.png";
import Location from "../models/Location";

export const getIconUrl = (location: Location): any => {
  return location.type === "other"
    ? otherMarker
    : location.type === "street"
    ? streetMarker
    : location.type === "cinema"
    ? cinemaMarker
    : location.type === "coffee_and_other"
    ? coffeeAndOtherMarker
    : cityPartMarker;
};
