const inputBox = document.querySelector("#text");
document.querySelector("#btn1").addEventListener("click", ()=>inputBox.value=parseInt(inputBox.value)-1)
document.querySelector("#btn2").addEventListener("click", ()=>inputBox.value=parseInt(inputBox.value)+1)