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
  addDoc,
} from "firebase/firestore";
import database from "./Firebase";
import db from "./Firebase";

const quotes_collection = "quotes";
const locations_collection = "locations";
const stories_collection = "stories";
const quote = {
  content:
    "Više puta je mijenjala ime. Ja pamtim samo dva. Jezero i sadašnje - Kate Govorušić.",
};
export class DatabaseService {
  createQuote = async (): Promise<void> => {
    console.log(database);

    console.log("asdasd");
    const quotesCollection = collection(db, "quotes");
    const docRef = await addDoc(quotesCollection, quote);
    console.log(`Quote written with ID: ${docRef.id}`);
  };

  getAllLocations = async (): Promise<Array<Record<string, any>>> => {
    const locationsReference: CollectionReference = collection(
      db,
      locations_collection
    );

    const locationsQuery: Query<DocumentData> = query(locationsReference);

    const locationsSnapshot: QuerySnapshot<DocumentData> = await getDocs(
      locationsQuery
    );

    const locations: Array<Record<string, any>> = locationsSnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );

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
