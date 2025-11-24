// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9X09L-Aaexf5_7ARYunCevhW_x7OHfbM",
  authDomain: "my-website-e26f1.firebaseapp.com",
  projectId: "my-website-e26f1",
  storageBucket: "my-website-e26f1.firebasestorage.app",
  messagingSenderId: "80585282064",
  appId: "1:80585282064:web:5f4a289b10ea2ff75cf095",
  measurementId: "G-MHMKZ6NXMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully!");
