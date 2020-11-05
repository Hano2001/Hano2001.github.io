document.addEventListener("DOMContentLoaded", (event) => {
  let cvLink = document.getElementById("navCV");
  let gitLink = document.getElementById("navGIT");
  let nackaLink = document.getElementById("navNACKA");
  let someLink = document.getElementById("navSOME");
  let navDivs = document.getElementsByClassName("navDiv");
  console.log(typeof navDivs);
  hideAllDivs(navDivs[0]);

  function hideAllDivs(x) {
    for (let i = 0; i < navDivs.length; i++) {
      navDivs[i].classList.add("hide");
      x.classList.remove("hide");
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
