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
        calculation = new Function('return ' + calculation)();
        if (!isFinite(calculation)) {
          alert("Conta Inválida");
          return;
        }
        
        this.display.value = String(calculation); 
      } catch (e) {
        alert("Conta Inválida");
        return;
      }
    }, 

    clickBtn() {
      
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          

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
           
            this.displayResult();
          }

          this.display.focus();

        }.bind(this)
      ); 
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
