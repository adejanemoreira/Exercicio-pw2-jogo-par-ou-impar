const inputNumber = document.querySelector("#num");
const btnSend = document.querySelector("#send");
const result = document.querySelector("#result");

const send = function (e) {
  e.preventDefault();

  const btnRadioImpar = document.querySelector("#impar");
  const btnRadioPar = document.querySelector("#par");
  const min = 1;
  const max = 10;
  let num1 = Number(inputNumber.value);
  let num2 = Number(Math.floor(Math.random() * (max - min) + min));
  let soma = num1 + num2;

  if (num1 <= 10) {
    if (btnRadioImpar.checked == true || btnRadioPar.checked == true) {
      if (soma % 2 == 0 && btnRadioPar.checked == true) {
        result.innerText = `
        A máquina escolheu o número: ${num2}
        Você escolheu o número: ${num1}
        Você colorou: ${btnRadioPar.value}
        ---------- Você ganhou! ----------`;
      } else if (soma % 2 == 1 && btnRadioImpar.checked == true) {
        result.innerText = `
        A máquina escolheu o número: ${num2}
        Você escolheu o número: ${num1}
        Você colorou: ${btnRadioImpar.value}
        ---------- Você ganhou! ----------`;
      } else if (soma % 2 == 0 && btnRadioPar.checked == false) {
        result.innerText = `
        A máquina escolheu o número: ${num2}
        Você escolheu o número: ${num1}
        Você colorou: ${btnRadioImpar.value}
        ---------- Você perdeu! ----------`;
      } else if (soma % 2 == 1 && btnRadioImpar.checked == false) {
        result.innerText = `
        A máquina escolheu o número: ${num2}
        Você escolheu o número: ${num1}
        Você colorou: ${btnRadioPar.value}
        ---------- Você perdeu! ----------`;
      }
    } else {
      result.innerText = "Escolha Ímpar ou Par";
    }
  } else {
    result.innerText = "Digite um valor entre 1 e 10";
  }
};

btnSend.addEventListener("click", send);
