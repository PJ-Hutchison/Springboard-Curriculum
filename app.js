document.getElementById("container");

document.querySelector("container");

document.getElementsByClassName("second");

document.querySelector("ol.third");

const hello = document.querySelector("container");
hello.innerText = "Hello";

footer.className += "main";

const footer = document.querySelector(".footer");
footer.classList.remove("main");

const newLi = document.createElement("li");

newLi.innerText = "four";

const list = document.querySelector("ul");
list.append(newLi);

const liInOl = document.querySelectorAll("ol li");
for (let i = 0; i < liInOl.length; i++){
    liInOl[i].style.backgroundColor = "green";
}

const footer = document.querySelector(".footer");
footer.remove();