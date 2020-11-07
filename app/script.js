document.addEventListener("DOMContentLoaded", (event) => {
  let cvLink = document.getElementById("navCV");
  let gitLink = document.getElementById("navGIT");
  let nackaLink = document.getElementById("navNACKA");
  let someLink = document.getElementById("navSOME");
  let navDivs = document.getElementsByClassName("navDiv");

  hideAllDivs(navDivs[0]);

  function hideAllDivs(activeDiv) {
    for (let i = 0; i < navDivs.length; i++) {
      navDivs[i].classList.add("hide");
      activeDiv.classList.remove("hide");
    }
  }

  //let carro = document.getElementById("carro");

  cvLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[1]);
  });

  gitLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[2]);
  });

  nackaLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[3]);
  });

  someLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[4]);
  });
});
