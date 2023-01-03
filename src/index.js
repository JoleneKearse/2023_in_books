import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

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
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

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
const signUpForm = document.querySelector(".signup");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // handle sign up with email and password
  const email = signUpForm.email.value;
  const password = signUpForm.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created: ", cred.user);
      signUpForm.reset();
      signUpModal.classList.add("hidden");
      overlay.style.backgroundColor = "transparent";
    })
    .catch((err) => {
      if (err.message.includes("email-already-in-use")) {
        alert(
          "You've already signed up with this email. Please go to login. If you feel this is an error or need to reset your password, please email the app administrator at pharaohnutz@gmail.com"
        );
        signUpForm.reset();
        signUpModal.classList.add("hidden");
        overlay.style.backgroundColor = "transparent";
      }
      console.log(err.message);
    });
});

// log in
const loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      loginForm.reset();
      logInModal.classList.add("hidden");
      overlay.style.backgroundColor = "transparent";
    })
    .catch((err) => {
      console.log(err.message);
      if (err.message.includes("user-not-found")) {
        alert(
          "Uh oh, we either don't have you signed up or could you have possibly mistyped your email?"
        );
        loginForm.email.value = "";
      } else if (err.message.includes("wrong-password")) {
        alert("Uh oh, it seems your password is wrong");
        loginForm.password.value = "";
      } else {
        alert(
          "Uh oh, something went wrong. But don't worry send an email to the app administrator at pharaohnutz@gmail.com"
        );
        loginForm.reset();
        logOutModal.classList.add("hidden");
        overlay.style.backgroundColor = "transparent";
      }
    });
});

// log out
document
  .getElementById("executeLogOutModalBtn")
  .addEventListener("click", () => {
    signOut(auth);
    setTimeout(() => {
      logOutModal.classList.add("hidden");
      overlay.style.backgroundColor = "transparent";
    }, 500);
  });

// SET UP DATABASE
// collection ref
const colRef = collection(db, "books");
