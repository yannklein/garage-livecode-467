// select the car list
const carsList = document.querySelector(".cars-list");

// display a car in the car list
const displayCar = (car) => {
  const item = `
  <div class="car">
    <div class="car-image">
      <img src="https://loremflickr.com/280/280/${car.brand} ${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong>${car.owner}</p>
      <p><strong>Plate:</strong>${car.plate}</p>
    </div>
  </div>`;
  carsList.insertAdjacentHTML("beforeend", item);
};

// fetch all the cars from the API
const fetchCars = (url) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // clean the car list before adding the new one
      carsList.innerHTML = "";
      data.forEach((car) => {
        // add each car found in tthe garage API to the car list
        displayCar(car);
      });
    });
};

// add a new car to the garage API
const addCar = (url, newCar) => {
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // refresh the car list: fetch again all the cars from the API
      fetchCars(url);
    });
};


export { fetchCars, addCar };
