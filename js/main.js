document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("alternarTema");

  botao.addEventListener("click", () => {
    document.body.classList.toggle("claro");  
});
});

/*botão acessibilidade*/ 

let fonteAumentada = false;

document.getElementById("botao-acessibilidade").addEventListener("click", function () {
  if (!fonteAumentada) {
    document.body.style.fontSize = "25px"; // aumenta a fonte
    fonteAumentada = true;
  } else {
    document.body.style.fontSize = "16px"; // volta ao normal
    fonteAumentada = false;
  }
});
