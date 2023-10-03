const howDidWeDo = document.getElementById("how-did-we-do");
const thankYou = document.getElementById("thank-you");
const submitButtons = document.querySelectorAll("input[type=submit]");
const ratingButtons = document.querySelectorAll("button");
const rating = document.getElementById("rating");
let isSelected = false;
let selectedRating;

(function selectRating() {
  ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener("click", (event) => {
      ratingButtons.forEach((btn) => {
        btn.classList.remove("selected");
      });
      ratingButton.classList.add("selected");
      isSelected = true;
      selectedRating = ratingButton.textContent;
      rating.textContent = selectedRating;
    });
  });
})();

(function submitForm() {
  submitButtons.forEach((submitButton) => {
    submitButton.addEventListener("click", (event) => {
      if (!isSelected) {
        alert("Please select a rating");
      } else {
        howDidWeDo.classList.add("hidden");
        thankYou.classList.remove("hidden");
      }
    });
  });
})();

console.log(rating);
