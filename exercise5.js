const text = document.querySelector("#text");
const box = document.querySelector("#box");
const applyColor = (input) => box.style.backgroundColor = input;
text.addEventListener("input", ()=>applyColor(text.value));