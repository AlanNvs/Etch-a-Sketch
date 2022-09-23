"use strict"
const container = document.querySelector("#container");
function createDivs(number = 16) {
  const sketchContainer = document.createElement("div");
  sketchContainer.classList.add("sketch-container");
  sketchContainer.style.setProperty("--num-rows-col", number);

  let div16;

  for (let i = 0; i < number*number; i++) {
    div16 = document.createElement("div");
    div16.classList.add("div16");
    sketchContainer.appendChild(div16);
  }
  container.appendChild(sketchContainer);
  createEvents();
}

function createEvents() {
  document.querySelectorAll(".div16").forEach(div16 => {
    div16.addEventListener("mouseenter", () => {
      div16.style.backgroundColor = "red";
    });
  });
}


function createButtons() {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "New grid";
  container.appendChild(btn);

  createDivs();

  let number = 16;
  btn.addEventListener("click", () => {    
    number = parseInt(prompt("Put a number until 100."));

    deleteDivs();
    createDivs(number);
  });
}
createButtons();

function deleteDivs() {
  const sketchContainer = document.querySelector(".sketch-container");

  container.removeChild(sketchContainer);
}
