//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getDate);

function getDate() {
  let newDate = document.querySelector("input").value.toString();
  const apiKey = "u6kWczvgiyX3G4A4CL7rBul3nkTf626xfidaoS7J";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${newDate}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(document.querySelector("input").value.toString());
      console.log(url);

      //   data.date = newDate;

      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
