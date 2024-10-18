// Treinando Factory Functions

function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickBtn();
      this.pressKeys();
      this.display.focus()
    },

    displayResult() {
      let calculation = this.display.value;
      try {
        calculation = eval(calculation);

        if (!calculation) {
          // Corrigido de 'conta' para 'calculation'
          alert("Conta Inválida");
          return;
        }

        this.display.value = String(calculation); // Corrigido de 'conta' para 'calculation'
      } catch (e) {
        alert("Conta Inválida");
      }
    }, // Corrigido de ',' para '}' para fechar a função

    clickBtn() {
      // this -> calculadora
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          // this -> document

          if (el.classList.contains("btn-num")) {
            this.btnForDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (el.classList.contains("btn-dell")) {
            this.dellOneDisplay();
          }

          if (el.classList.contains("btn-equal")) {
            // Corrigido de 'classListcontains' para 'classList.contains'
            this.displayResult();
          }

          this.display.focus();

        }.bind(this)
      ); // Fazendo o js usar o 'this' da calculadora
    },

    btnForDisplay(value) {
      this.display.value += value;
      this.display.focus();
    },

    clearDisplay() {
      this.display.value = "";
      this.display.focus();
    },

    dellOneDisplay() {
      this.display.value = this.display.value.slice(0, -1);
      this.display.focus();
    },

    pressKeys() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.displayResult();
        }

        if (e.keyCode === 8) {
          this.dellOneDisplay();
        }

        this.display.focus();

      });

    },
  };
}

const calculator = createCalculator();
calculator.start();
