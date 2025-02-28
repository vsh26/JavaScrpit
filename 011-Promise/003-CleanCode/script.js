// More cleaner way to write code

function renderToScreen(obj){
    const products = obj.data.data;
      console.log(products);
      products.forEach((product) => {
        const li = document.createElement("li");
        li.innerText = product.title;
        items.appendChild(li);
      });
  }
  
  const items = document.getElementById("items");
  
  fetch("https://api.freeapi.app/api/v1/public/randomproducts")
    .then((response) => response.json())
    .then(renderToScreen)               // Callback function  is called along with the result
    .catch((err) => {
      console.log("Error: ", err);
    })
    .finally(() => {
      console.log("Finally executed");
    });
  