import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnANuItxSo1FO2MhTQA-T9S-f2zQb3fJ4",
  authDomain: "doctors-portal-a3701.firebaseapp.com",
  projectId: "doctors-portal-a3701",
  storageBucket: "doctors-portal-a3701.appspot.com",
  messagingSenderId: "246067021687",
  appId: "1:246067021687:web:2f0ab6df8473fd4fef0372",
};

// Initialize Firebase
const initAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export default initAuthentication;
