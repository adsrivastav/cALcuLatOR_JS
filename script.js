document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonText = event.target.innerText;

      if (buttonText === "=") {
        // Perform calculation
        calculate();
      } else if (buttonText === "C") {
        // Clear the display
        clearDisplay();
      } else {
        // Append the clicked digit/operator to the display
        display.value += buttonText;
      }
    });
  });

  function calculate() {
    try {
      // Perform the calculation logic here
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      // Handle any errors that may occur during calculation
      display.value = "Error";
    }
  }

  function clearDisplay() {
    // Clear the display
    display.value = "";
  }
});
