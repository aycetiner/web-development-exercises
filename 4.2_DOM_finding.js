const containerSection = document.getElementById("container");

const containerSectionTwo = document.querySelector("#container");

const secondLi = document.querySelectorAll("li.second");

const thirdOlLi = document.querySelector("ol>li.third");

// containerSection.textContent = "Hello!";

const footerDiv = document.querySelector("div.footer");

footerDiv.classList.add("main");

footerDiv.classList.remove("main");

const newLi = document.createElement("li");

newLi.innerText = "four";

const ul = document.querySelector("ul");
ul.append(newLi);

const ol = document.querySelector("ol");
for (let listItem of ol.children) {
  listItem.style.backgroundColor = "green";
}

let footer = document.querySelector(".footer");
footer.remove();
