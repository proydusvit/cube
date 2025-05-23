  let selectedColor = "red";

    // Обираємо колір кнопкою
    document.querySelectorAll(".color-btn").forEach(button => {
      button.addEventListener("click", () => {
        selectedColor = button.dataset.color;
        // Підсвічуємо активну кнопку
        document.querySelectorAll(".color-btn").forEach(btn => btn.style.outline = "");
        button.style.outline = "3px solid black";
      });
    });

    // За замовчуванням підсвічуємо червоний колір
    document.querySelector(".color-btn[data-color='red']").style.outline = "3px solid black";

    // Клацання по частинах будинку
    document.querySelectorAll("#house .part").forEach(part => {
      part.addEventListener("click", () => {
        part.setAttribute("fill", selectedColor);
      });
    });
