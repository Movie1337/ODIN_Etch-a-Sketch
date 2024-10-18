const container = document.querySelector("#container");
const button = document.querySelector("#generate-container");

function generateContainer(size) {
  container.innerHTML = "";

  const totalSquares = size * size;
  const squareSize = 500 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  let inputSize = prompt("Введите размер сетки(макс: 100):");

  const size = Math.min(Math.max(parseInt(inputSize), 1), 100);
  generateContainer(size);
});

generateContainer(16);
