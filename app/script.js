document.addEventListener("DOMContentLoaded", (event) => {
  let cvLink = document.getElementById("navCV");
  let gitLink = document.getElementById("navGIT");
  let nackaLink = document.getElementById("navNACKA");
  let someLink = document.getElementById("navSOME");
  let nackaInfo = document.getElementById("nackaInfo");
  nackaInfo.classList.add("hide");

  let carro = document.getElementById("carro");

  cvLink.addEventListener("click", (e) => {
    console.log("TuttiFrutti");

    carro.classList.add("hide");
  });

  gitLink.addEventListener("click", (e) => {
    console.log("TuttiPrutti");

    carro.classList.remove("hide");
  });

  nackaLink.addEventListener("click", (e) => {
    console.log("HEEEEEJ");
    nackaInfo.classList.remove("hide");
    carro.classList.add("hide");
  });

  someLink.addEventListener("click", (e) => {
    console.log("BAGARMOSSENS TOBAK");

    carro.classList.remove("hide");
  });
});
