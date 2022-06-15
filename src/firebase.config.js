// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnSuEG8URGExV0O6c6-fCndMIAIOiHFFs',
  authDomain: 'house-marketplace-app-c8856.firebaseapp.com',
  projectId: 'house-marketplace-app-c8856',
  storageBucket: 'house-marketplace-app-c8856.appspot.com',
  messagingSenderId: '378353226999',
  appId: '1:378353226999:web:c56aac8f47f0733d0aaff2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
