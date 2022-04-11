const url = "https://fakestoreapi.com/products";

const products = document.querySelector(".products-overview");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.map(function (element, i) {
      console.log(data);

      products.insertAdjacentHTML(
        "beforeend",
        `<div class='products-container'><div class='products'><h2>${data[i].title}</h2><img src="${data[i].image}" alt="" /><h3>${data[i].price}</h3></div></div>`
      );

      // (document.querySelector("h2").innerText = data[i].title),
      //   (document.querySelector("img").src = data[i].image),
      //   (document.querySelector("h3").innerText = data[i].price)

      // console.log(data[29].title);
    });
    // console.log(data);
  });
