function createDivs() {
  container = document.querySelector("#container");
  sketchContainer = document.createElement("div");
  sketchContainer.classList.add("sketchContainer");
  let div16;
  for (i = 0; i < 16*16; i++) {
    div16 = document.createElement("div");
    div16.classList.add("div16");
    sketchContainer.appendChild(div16);
  }
  container.appendChild(sketchContainer);
  return div16;
}

function createEvents() {
  createDivs();

  document.querySelectorAll(".div16").forEach(div16 => {
    div16.addEventListener("mouseenter", () => {
      div16.style.backgroundColor = "red";
    });
  });
}
createEvents();



/* function appendContainer() {
  container = document.querySelector("#container");

  let div16 = 
} */