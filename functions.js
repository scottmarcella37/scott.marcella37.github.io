// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61aQDfNOAi7qeZ4754JvCLC49kEbMiTA",
  authDomain: "contact-info-94710.firebaseapp.com",
  databaseURL: "https://contact-info-94710-default-rtdb.firebaseio.com",
  projectId: "contact-info-94710",
  storageBucket: "contact-info-94710.firebasestorage.app",
  messagingSenderId: "1067065273351",
  appId: "1:1067065273351:web:1da842d299df289a61cea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle input form
const form = document.getElementById('dataForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // You must define userId here
  const userId = 123'; // Replace 'someUserId' with your logic to get the user ID

  // Save data to Firebase
  set(ref(database, `users/${userId}/profile`), {
    name: name,
    email: email,
  })
    .then(() => {
      alert('Data saved successfully!');
      form.reset();
    })
    .catch((error) => {
      alert('Error saving data: ' + error);
    });
});
