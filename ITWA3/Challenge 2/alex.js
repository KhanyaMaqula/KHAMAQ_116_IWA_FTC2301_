const firstname = "Alex";
const surname = "Naidoo";
const role = "Head of Marketing";

const display = firstname + " " + surname + " (" + role + ")";
function displayAlex() {
  document.querySelector("#alex").innerText = display;
}
displayAlex();
