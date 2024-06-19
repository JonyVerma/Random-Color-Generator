const getColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const color = "#" + randomColor;
  document.getElementById("color-code").innerText = color;
  document.body.style.backgroundColor = color;
};

document.getElementById("btn").addEventListener("click", () => {
    getColor();
});

getColor();