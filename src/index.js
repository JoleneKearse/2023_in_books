import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// modal references
const overlay = document.getElementById("overlay");
const signUpModal = document.getElementById("signUpModal");
const logInModal = document.getElementById("logInModal");
const logOutModal = document.getElementById("logOutModal");
const firebaseConfig = {
  apiKey: "AIzaSyB5OK46l_t2MIoXvh4n6jXnqAXNF0FxA2I",
  authDomain: "book-tracker-a8777.firebaseapp.com",
  projectId: "book-tracker-a8777",
  storageBucket: "book-tracker-a8777.appspot.com",
  messagingSenderId: "54050475125",
  appId: "1:54050475125:web:ad511e971d50fd845d3c3c",
};

// initialize app
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// sign up modal controls
document.getElementById("signUpModalBtn").addEventListener("click", () => {
  signUpModal.classList.remove("hidden");
  overlay.style.backgroundColor = "#232323B3";
});
document.getElementById("closeSignUpModal").addEventListener("click", () => {
  signUpModal.classList.add("hidden");
  overlay.style.backgroundColor = "transparent";
});
// log in modal controls
document.getElementById("logInModalBtn").addEventListener("click", () => {
  logInModal.classList.remove("hidden");
  overlay.style.backgroundColor = "#232323B3";
});
document.getElementById("closeLogInModalBtn").addEventListener("click", () => {
  logInModal.classList.add("hidden");
  overlay.style.backgroundColor = "transparent";
});
// log out modal controls
document.getElementById("logOutModalBtn").addEventListener("click", () => {
  logOutModal.classList.remove("hidden");
  overlay.style.backgroundColor = "#232323B3";
});
document.getElementById("closeLogOutModalBtn").addEventListener("click", () => {
  logOutModal.classList.add("hidden");
  overlay.style.backgroundColor = "transparent";
});

// sign up
const signUpForm = document.querySelector("signUp");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // handle sign up with email and password
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(`user created: ${cred.user}`);
      signUpForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
