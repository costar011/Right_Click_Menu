const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const links = document.querySelector(".links");

container.addEventListener("contextmenu", handleClick);
btn.addEventListener("click", handleClick);