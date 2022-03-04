//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function grabsSnack() {
  const numOfSnacks = Number(document.querySelector("input").value);
  document.querySelector("#stops").innerText = "";
  for (let i = 0; i < numOfSnacks; i++) {
    document.querySelector("#stops").innerText += "  stop";
  }
}

document.querySelector("#help").addEventListener("click", grabsSnack);
