document.addEventListener("DOMContentLoaded", (event) => {
  let headLink = document.getElementById("headLine");
  let cvLink = document.getElementById("navCV");
  let gitLink = document.getElementById("navGIT");
  let nackaLink = document.getElementById("navNACKA");
  let someLink = document.getElementById("navSOME");
  let navDivs = document.getElementsByClassName("navDiv");
  let navBar = document.getElementById("navBar");
  let menuBtn = document.getElementById("menuBtn");

  hideAllDivs(navDivs[0]);

  function hideAllDivs(activeDiv) {
    for (let i = 0; i < navDivs.length; i++) {
      navDivs[i].classList.add("hide");
      activeDiv.classList.remove("hide");
    }
  }

  headLink.addEventListener("click", (e) => {
    hideAllDivs(navDivs[0]);
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

  menuBtn.addEventListener("click", (e) => {
    navBar.classList.toggle("hide");
  });

  window.addEventListener("resize", (e) => {
    let screenW = window.innerWidth;
    if (screenW <= 480) {
      navBar.classList.add("hide");
    } else {
      navBar.classList.remove("hide");
    }
  });
});
