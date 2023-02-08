const inputNumber = document.querySelector("#num");
const btnSend = document.querySelector("#send");
const result = document.querySelector("#result");

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getWinnerMessage = (playerNumber, machineNumber, playerChoice) => {
  const total = playerNumber + machineNumber;
  if (total % 2 === 0 && playerChoice === "Par") {
    return `
    A máquina escolheu o número: ${machineNumber}
    Você escolheu o número: ${playerNumber}
    Você escolheu: ${playerChoice}
    ---------- Você ganhou! ----------`;
  } else if (total % 2 === 1 && playerChoice === "Ímpar") {
    return `
    A máquina escolheu o número: ${machineNumber}
    Você escolheu o número: ${playerNumber}
    Você escolheu: ${playerChoice}
    ---------- Você ganhou! ----------`;
  } else {
    return `
    A máquina escolheu o número: ${machineNumber}
    Você escolheu o número: ${playerNumber}
    Você escolheu: ${playerChoice}
    ---------- Você perdeu! ----------`;
  }
};

const send = function (e) {
  e.preventDefault();
  const btnRadioImpar = document.querySelector("#impar");
  const btnRadioPar = document.querySelector("#par");
  const min = 1;
  const max = 10;
  const playerNumber = Number(inputNumber.value);
  if (playerNumber <= 10) {
    const machineNumber = getRandomNumber(min, max);
    if (btnRadioImpar.checked || btnRadioPar.checked) {
      const playerChoice = btnRadioImpar.checked ? "Ímpar" : "Par";
      result.innerText = getWinnerMessage(playerNumber, machineNumber, playerChoice);
    } else {
      result.innerText = "Escolha Ímpar ou Par";
    }
  } else {
    result.innerText = "Digite um valor entre 1 e 10";
  }
};

btnSend.addEventListener("click", send);
