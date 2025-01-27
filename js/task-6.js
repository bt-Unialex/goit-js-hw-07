function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxWrapper = document.getElementById("boxes");
// const userInput = document.querySelector("#controls input");
// const buttonCreate = document.querySelector("button[data-create");
// const buttonDestroy = document.querySelector("button[data-destroy");
const boxControls = document.getElementById("controls");
let userInput, buttonCreate, buttonDestroy;
for (const element of boxControls.children) {
  if (element.tagName === "INPUT") {
    userInput = element;
  } else {
    if (element.hasAttribute("data-create")) {
      buttonCreate = element;
    }
    if (element.hasAttribute("data-destroy")) {
      buttonDestroy = element;
    }
  }
}

buttonCreate.addEventListener("click", () => {
  createBoxes(userInput.value);
  userInput.value = "";
});
function createBoxes(boxCount) {
  if (boxCount > 0 && boxCount <= 100) {
    let boxesMarkup = "";
    for (let i = 0; i < boxCount; i++) {
      boxesMarkup += `<div style="width:${30 + 10 * i}px; height:${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()}"></div>`;
    }
    boxWrapper.innerHTML = boxesMarkup;
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxWrapper.innerHTML = "";
}
