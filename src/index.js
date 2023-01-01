// open modals
const overlay = document.getElementById("overlay");
const closeSignUpModal = document.getElementById("closeSignUpModal");
const signUp = document.getElementById("signUpModal");
const signUpBtn = document.getElementById("signUpModalBtn");

closeSignUpModal.addEventListener("click", () => {
  console.log(`clicked`);
  signUp.classList.add("hidden");
  overlay.style.backgroundColor = "transparent";
});

signUpBtn.addEventListener("click", () => {
  console.log("clicked");
  signUp.classList.remove("hidden");
  overlay.style.backgroundColor = "#232323B3";
});
