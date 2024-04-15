const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const links = document.querySelector(".links");

container.addEventListener("contextmenu", handleClick);
btn.addEventListener("click", handleClick);

links.forEach((e)  => {
 e.addEventListener("click", handleClick);   
});

function handleClick(e) {
    const menu = document.getElementById("menu");
}