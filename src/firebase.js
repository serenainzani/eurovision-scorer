import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaMNdhE6aiFh36H-HoonoTt55MyUsFSFc",
    authDomain: "eurovision-422911.firebaseapp.com",
    projectId: "eurovision-422911",
    storageBucket: "eurovision-422911.appspot.com",
    messagingSenderId: "262393389991",
    appId: "1:262393389991:web:7dabe7d9b1a73c2982cc82",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
