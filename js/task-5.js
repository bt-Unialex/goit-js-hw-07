function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
