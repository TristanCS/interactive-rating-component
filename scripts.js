const howDidWeDo = document.getElementById("how-did-we-do");
const thankYou = document.getElementById("thank-you");
const submitButtons = document.querySelectorAll("input[type=submit]");
const ratingButtons = document.querySelectorAll("button");

selectRating();
submitForm();

function selectRating() {
  ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener("click", (event) => {
      ratingButtons.forEach((btn) => {
        btn.classList.remove("selected");
      });
      ratingButton.classList.add("selected");
    });
  });
}

function submitForm() {
  submitButtons.forEach((submitButton) => {
    submitButton.addEventListener("click", (event) => {
      howDidWeDo.classList.add("hidden");
      thankYou.classList.remove("hidden");
    });
  });
}
