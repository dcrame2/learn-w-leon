//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

const placeToSee = document.getElementById("placeToSee");
document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    placeToSee.innerText = "YOU HAVE CLASS";
  } else if (day === "saturday" || day === "sunday") {
    placeToSee.innerText = "Its The Weekend";
  } else {
    placeToSee.innerText = "BORING";
  }
}
