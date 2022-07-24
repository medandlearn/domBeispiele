// DOM-Elemente auslesen
let myForm = document.forms[0];
const button = document.getElementById('button');

// Eventlistener
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    buildMessage();
});

// Methoden
function buildMessage() {
const vorname = document.getElementById('name').value;
const tierwahl = document.getElementById('tier');
let selectedTier = tierwahl.options[tierwahl.selectedIndex].text;
const message = document.getElementById('message');
message.textContent = `Hi ${vorname}, dein Lieblingstier ist ${selectedTier}.`
}