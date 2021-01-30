const input = document.querySelector("#input");
const result = document.querySelector("#result");

const encodeURI = (input) => result.value=encodeURIComponent(input);
const decodeURI = (input) => result.value=decodeURIComponent(input);

document.querySelector("#encode").addEventListener("click",()=>encodeURI(input.value));
document.querySelector("#decode").addEventListener("click",()=>decodeURI(input.value));
