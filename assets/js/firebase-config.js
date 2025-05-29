// ЗАМЕНИ значения на свои из консоли Firebase!
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBS-MxYSCoMeKcYrJoTvVlcBd8l08gO_Ms",
  authDomain: "kamolovportfolio.firebaseapp.com",
  projectId: "kamolovportfolio",
  storageBucket: "kamolovportfolio.firebasestorage.app",
  messagingSenderId: "184302069372",
  appId: "1:184302069372:web:84bf8d6257f0af740f0bf9",
  measurementId: "G-YNR1KQJ5C2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push };
