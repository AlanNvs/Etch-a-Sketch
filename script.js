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
createDivs();
/* function appendContainer() {
  container = document.querySelector("#container");

  let div16 = 
} */