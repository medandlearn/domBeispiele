// DOM-Elemente auslesen
const button = document.getElementById('button');

// Eventlistener
button.addEventListener("click", buildMessage);

// eventhandler
function buildMessage() {
const vorname = document.getElementById('name').value;
const tierwahl = document.getElementById('tier');
let selectedTier = tierwahl.options[tierwahl.selectedIndex].text;
const message = document.getElementById('message');
message.textContent += `Hi ${vorname}, dein Lieblingstier ist ${selectedTier}.`
}