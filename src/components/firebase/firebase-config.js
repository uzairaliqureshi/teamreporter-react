import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDL5wtP_V7zb3KxEvyfnvCnmJZtOezMAdk",
    authDomain: "fir-1a137.firebaseapp.com",
    databaseURL: "https://fir-1a137-default-rtdb.firebaseio.com",
    projectId: "fir-1a137",
    storageBucket: "fir-1a137.appspot.com",
    messagingSenderId: "1035942376060",
    appId: "1:1035942376060:web:ab17ceb0edeb619f058ff9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);