document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("alternarTema");

  botao.addEventListener("click", () => {
    document.body.classList.toggle("claro");  
});
});
