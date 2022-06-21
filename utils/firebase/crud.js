// imports
import { addDoc, collection } from "firebase/firestore";

// file imports
import { db } from "./firebaseInit";

// adding data
async function addData(collName, data) {
  try {
    const ref = await addDoc(collection(db, collName), data);
    return ref;
  } catch (e) {
    return { error: e };
  }
  // const ref = await addDoc(collection(db, collName), data);
  // return ref;
}

// exports
export { addData };
