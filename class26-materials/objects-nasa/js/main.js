//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const apiKey = "u6kWczvgiyX3G4A4CL7rBul3nkTf626xfidaoS7J";
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

document.querySelector("button").addEventListener("click", getDate);

function getDate() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(document.querySelector("input").value);

      data.date = document.querySelector("input").value.toString();

      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
