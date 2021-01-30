const label = document.querySelector("#label");
const text = document.querySelector("#text");
text.addEventListener("input", ()=>label.innerHTML=text.value.length);