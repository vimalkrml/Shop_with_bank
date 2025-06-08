// src/index.js
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const heading = document.getElementById("animated-heading");
const texts = [
  "Shop Now. Pay Later with Confidence",
  "Flexible EMI Options Tailored For You",
  "Powered by DBS for Trust and Convenience",
  "Your Purchase, Our Commitment",
  "Simple, Transparent, and Secure Payments"
];
const highlightClass = "text-highlight fw-bold";
let index = 0;

function setHeadingText(text) {
  const words = text.trim().split(" ");
  const lastWord = words.pop();
  const mainText = words.join(" ");
  heading.innerHTML = `${mainText} <span class="${highlightClass}">${lastWord}</span>`;
}

function fadeOutInText() {
  heading.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % texts.length;
    setHeadingText(texts[index]);
    heading.style.opacity = 1;
  }, 500);
}

setHeadingText(texts[0]);
setInterval(fadeOutInText, 3000);