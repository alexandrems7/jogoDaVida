"use strict";

let h = 7;
let m = 30;

let relogio = function (minutos) {
  let periodo = "AM";
  let time = m + Number(minutos);
  let horas = time > 60 ? time - 60 : h + 0;
  if (time < 60) {
    m = time;
  }
  if (time > 59) {
    m = horas;
    h = h + 1;
  }
  document.querySelector(".horas").textContent = `${periodo} ${h}:${m}`;
};

document.querySelector("#acao1").addEventListener("click", function () {
  document.querySelector(".avisos1").textContent = "Bom dia!";
  document.querySelector(".avisos2").textContent =
    "Hoje temos muito a fazer. Por isso, tome um café, escove os dentes e bora trabalhar. 😀";
  document.querySelector("#acao1").textContent = "Tomar café";
  document.querySelector("#acao2").textContent = "Tomar banho";
  document.querySelector("#acao3").textContent = "Ir trabalhar";
  document.querySelector("#acao4").textContent = "Voltar pra cama";

  document.querySelector("#acao1").addEventListener("click", function () {
    document.querySelector(".avisos1").textContent = "☕ Que café delicioso!";
    document.querySelector(".avisos2").textContent =
      "Não se esqueça de escovar os dentes.";

    document.querySelector("#acao1").addEventListener("click", function () {
      document.querySelector(
        ".avisos2"
      ).textContent = `Você já tomou seu café. Escolha outra ação.`;
    });
  });

  document.querySelector("#acao2").addEventListener("click", function () {
    document.querySelector(".avisos1").textContent = "🛀🏾 Banho quentinho...";
    document.querySelector(".avisos2").textContent =
      "Você acaba de tomar o seu banho. BORA TRABALHAR?";

    document.querySelector("#acao2").addEventListener("click", function () {
      document.querySelector(".avisos1").textContent =
        "🚿Você já tomou seu banho";
      document.querySelector(".avisos2").textContent = "Que tal ir trabalhar?";
    });
  });
});
