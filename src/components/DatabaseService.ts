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
import db from "./Firebase";

const quotes_collection = "quotes";
const locations_collection = "locations";
const stories_collection = "stories";

export class DatabaseService {
  getAllLocations = async (): Promise<Array<Record<string, any>>> => {
    console.log("1");
    const locationsReference: CollectionReference = collection(
      db,
      locations_collection
    );
    console.log("2");

    const locationsQuery: Query<DocumentData> = query(locationsReference);
    console.log("3");

    const locationsSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      locationsQuery
    );
    console.log("4");

    const locations: Array<Record<string, any>> = locationsSnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
    console.log("5");

    return locations;
  };
  getQuotesByLocation = async (
    locationId: string
  ): Promise<Array<Record<string, any>>> => {
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
    const quotes: Array<Record<string, any>> = quotesSnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
    return quotes;
  };
  getStoryById = async (storyId: string): Promise<Record<string, any>> => {
    const storyRef: DocumentReference = doc(db, stories_collection, storyId);
    const storySnapshot: DocumentSnapshot<DocumentData> = await getDoc(
      storyRef
    );
    return storySnapshot.data() as Record<string, any>;
  };
}

export default new DatabaseService();
