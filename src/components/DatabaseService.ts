import {
  getDocs,
  collection,
  CollectionReference,
  DocumentData,
  QuerySnapshot,
  where,
  query,
  Query,
  DocumentReference,
  doc,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import Location, { ILocation } from "../models/Location";
import Quote, { IQuote } from "../models/Quote";
import Story from "../models/Story";
import db from "./Firebase";

const quotes_collection = "quotes";
const locations_collection = "locations";
const stories_collection = "stories";

export class DatabaseService {
  getAllLocations = async (): Promise<Location[]> => {
    const locationsReference: CollectionReference = collection(
      db,
      locations_collection
    );

    const locationsQuery: Query<DocumentData> = query(locationsReference);

    const locationsSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      locationsQuery
    );

    const locations: ILocation[] = locationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      name: doc.data().name,
      type: doc.data().type,
    }));

    const mappedLocations = locations.map(
      (locationData: ILocation) => new Location(locationData)
    );

    return mappedLocations;
  };
  getQuotesByLocation = async (locationId: string): Promise<Quote[]> => {
    const collectionReference: CollectionReference = collection(
      db,
      quotes_collection
    );
    const quotesQuery: Query<DocumentData> = query(
      collectionReference,
      where(`locations.${locationId}`, "==", true)
    );

    const quotesSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      quotesQuery
    );
    const quotes: IQuote[] = quotesSnapshot.docs.map((doc) => ({
      id: doc.id,
      content: doc.data().content,
      storyId: doc.data().storyId,
      locations: doc.data().locations,
    }));

    const mappedQuotes = quotes.map(
      (quoteData: IQuote) => new Quote(quoteData)
    );

    return mappedQuotes;
  };
  getStoryById = async (storyId: string): Promise<Story> => {
    const storyRef: DocumentReference = doc(db, stories_collection, storyId);
    const storySnapshot: DocumentSnapshot<DocumentData> = await getDoc(
      storyRef
    );

    const story = new Story({
      id: storyId,
      content: storySnapshot.data()?.content,
      name: storySnapshot.data()?.name,
    });

    return story;
  };
}

export default new DatabaseService();
