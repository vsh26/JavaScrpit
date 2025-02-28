/*

    Promise:

     - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

     - A Promise is a proxy for a value not necessarily known when the promise is created.

*/

// fetch() - provided by browser

// const data = fetch('https://api.freeapi.app/api/v1/public/randomproducts')
// fetch() returns a promise

// data.then((res) => console.log('Promise fulfilled. Data fetched', data));

const items = document.getElementById("items");

fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then((response) => {
    response
      .json() // converts JSON result into object and returns a promise
      .then((obj) => {
        const products = obj.data.data;
        console.log(products);
        products.forEach((product) => {
          const li = document.createElement("li");
          li.innerText = product.title;
          items.appendChild(li);
        });
      })
      .catch((err) => {
        console.log("Error converting JSON");
      });
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
  .finally(() => {
    console.log("Finally executed");
  });
