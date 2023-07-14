import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyDC9E066UPO4GmzPltIAlVe6iBDfEfsii4",
    authDomain: "fir-chat-app-2928c.firebaseapp.com",
    projectId: "fir-chat-app-2928c",
    storageBucket: "fir-chat-app-2928c.appspot.com",
    messagingSenderId: "985499851561",
    appId: "1:985499851561:web:2d61c101a21fd5dbcab538"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


