// modal references
const overlay = document.getElementById("overlay");
const signUpModal = document.getElementById("signUpModal");
const logInModal = document.getElementById("logInModal");
const logOutModal = document.getElementById("logOutModal");

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
