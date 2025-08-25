const items = document.getElementById("items");

// Promise Chaining

// Improved readbility

fetch("https://api.freeapi.app/api/v1/public/randomproducts")
  .then((response) => response.json())
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
    console.log("Error: ", err);
  })
  .finally(() => {
    console.log("Finally executed");
  });
