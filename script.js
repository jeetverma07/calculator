const input = document.querySelector(".input");

const clear = function () {
  input.value = "";
};

function addValue(value) {
  input.value += value;
}
const removeLastElement = function () {
  input.value = input.value.slice(0, -1);
};

function calculateResult() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Not valid";
  }
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    const buttonValue = button.textContent;
    if (buttonValue === "AC") {
      clear();
    } else if (buttonValue === "←") {
      removeLastElement();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      addValue(buttonValue);
    }
  });
});
