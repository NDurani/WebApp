const weatherform = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apiKey = "08b5effc2d4b073b2964aa7268cce9e9";

weatherform.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
  } else {
    displayError("Please Enter a City");
  }
});
async function getWeatherData(city) {}
function displayWeatherInfo() {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  console.log("sdfsdf", errorDisplay);
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
