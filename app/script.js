document.addEventListener("DOMContentLoaded", (event) => {
  // Här hämtar jag referenser till alla element som är relevanta för att manipulera DOMen
  let headLink = document.getElementById("headLine");
  let cvLink = document.getElementById("navCV");
  let gitLink = document.getElementById("navGIT");
  let nackaLink = document.getElementById("navNACKA");
  let someLink = document.getElementById("navSOME");
  let navBar = document.getElementById("navBar");
  let menuBtn = document.getElementById("menuBtn");
  //Gör en HTML-collection med alla flikar
  let navDivs = document.getElementsByClassName("navDiv");

  //Anropar funktionen med startsidans index när sidan laddas
  hideAllDivs(navDivs[0]);

  //Funktion som lägger till alla förutom den aktiva diven i hjälpklassen "hide" (haraldportfolio.scss rad 226)
  function hideAllDivs(activeDiv) {
    for (let i = 0; i < navDivs.length; i++) {
      navDivs[i].classList.add("hide");
      activeDiv.classList.remove("hide");
    }
  }

  headLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[0]); //anropar funktionen med aktiva DIVens index.
  });

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
  //Lägger till/Tar bort navbaren ur hide-klassen när meny-knappen trycks i
  menuBtn.addEventListener("click", (e) => {
    navBar.classList.toggle("hide");
  });

  //Gömmer navbaren när skärmen blir i mobilmått
  window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 480) {
      navBar.classList.add("hide");
    } else {
      navBar.classList.remove("hide");
    }
  });
});
