//Write your pseduo code first!

// Get value from Input
document.querySelector("#yell").addEventListener("click", run);

function run() {
  let temp = Number(document.querySelector("#temp").value);
  temp = (temp * 9) / 5 + 32;
  document.querySelector("#placeToYell").innerText = temp;
}
