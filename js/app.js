// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
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
const auth = getAuth();
const db = getFirestore();

// ------------------------
// Registration
// ------------------------
export async function registerUser(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Save extra info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            signupDate: new Date()
        });
        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
}

// ------------------------
// Login
// ------------------------
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "index.html";
    } catch (error) {
        alert(error.message);
    }
}
