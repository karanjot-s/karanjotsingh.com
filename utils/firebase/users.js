// imports
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

// file imports
import { initFirebase } from "./firebaseInit";

initFirebase();

const useUser = () => {
  const [user, setUser] = useState();
  const auth = getAuth();
};
