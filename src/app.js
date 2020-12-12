// import the car functions from car.js
import { fetchCars, addCar } from "./car";

const myBadAssGarage = "wairudo-supiido";
// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////

// define the url to fetch
const baseUrl = "https://wagon-garage-api.herokuapp.com/";
const url = `h${baseUrl}/${myBadAssGarage}/cars`;

// select the 4 form inputs and the button
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const plate = document.querySelector("#plate");
const owner = document.querySelector("#owner");
const button = document.querySelector("#submit-btn");

// get the car list when page loaded
fetchCars(url);

// listen to a click on the "Add car" form button
button.addEventListener("click", (event) => {
  event.preventDefault();

  const newCar = {
    brand: brand.value,
    model: model.value,
    plate: plate.value,
    owner: owner.value
  };
  // add a car to the Garage API
  addCar(url, newCar);
});
