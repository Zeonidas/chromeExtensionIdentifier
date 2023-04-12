const BASE_URL = "https://chrome.google.com/webstore/detail";
const btn = document.querySelector("#extBtn");
const input = document.querySelector("#extInput");

const letters = /^[A-Za-z]+$/;

function extensionLookup() {
  if (input === null || !input.value.match(letters)) {
    alert("You must enter a valid ID");
  } else {
    window.open(`${BASE_URL}/${input.value.match(letters)}`, "_blank");
  }
}
