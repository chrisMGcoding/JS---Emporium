// mise en place du mode nuit ---------------------------------

let myBody = document.querySelector("body");

let myHeader = document.querySelector("header");

let section2 = document.querySelectorAll("section")[1];
let section3 = document.querySelectorAll("section")[2];
let section4 = document.querySelectorAll("section")[3];
let section5 = document.querySelectorAll("section")[4];
let section6 = document.querySelectorAll("section")[5];
let section7 = document.querySelectorAll("section")[6];

let boutonBlanc = document.getElementsByTagName("div")[0];
let boutonNoir = document.getElementsByTagName("div")[1];

let navBar = Array.from(myHeader.querySelectorAll("a"));

let tabSection = [myBody, myHeader, section2, section3, section4, section5, section6, section7];

boutonBlanc.addEventListener("click", () => {
    tabSection.forEach(element => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    });
    navBar.forEach(element => {
        element.style.color = "black";
    })
});

boutonNoir.addEventListener("click", () => {
    tabSection.forEach(element => {
        element.style.backgroundColor = "black";
        element.style.color = "white";
    });
    navBar.forEach(element => {
        element.style.color = "white";
    });
    boutonBlanc.style.backgroundColor = "white";
});

// mise en place du formulaire de connexion ---------------------

let bouton = document.querySelector("button");

let formulaire = Array.from(document.getElementsByClassName("formulaire"))[0];

let formulaire1 = Array.from(document.getElementsByClassName("formulaire1"))[0];

let formulaire2 = Array.from(document.getElementsByClassName("formulaire2"))[0];

let inscription = Array.from(document.getElementsByClassName("inscription"))[0];

let connexion = Array.from(document.getElementsByClassName("connexion"));

let tabSectionFlou = [myHeader, section2, section3, section4, section5, section6, section7];

let closeBouton = document.getElementsByClassName("close")[0];

let bouton_connexion = Array.from(document.getElementsByClassName("connexionBouton"))[0];

let bouton_inscription = Array.from(document.getElementsByClassName("inscriptionBouton"))[0];

bouton.addEventListener("click", () => {
    formulaire.style.display = "flex";
    inscription.classList.add("visible");
    formulaire1.style.display = "flex";
    tabSectionFlou.forEach(element => {
        element.classList.add("flou");
    });
});

closeBouton.addEventListener("click", () => {
    inscription.classList.remove("visible");
    formulaire.style.display = "none";
    tabSectionFlou.forEach(element => {
        element.classList.remove("flou");
    })
    formulaire1.style.display = "none";
    formulaire2.style.display = "none";
})

// window.addEventListener("click", () => {
//     if (inscription.classList.contains("visible")) {
//         inscription.classList.remove("visible");
//         inscription.style.display = "none";
//         tabSectionFlou.forEach(element => {
//             element.classList.remove("flou");
//         })
//     } else {
//         console.log("nope")
//     }
// })

// if (inscription.classList.contains("visible")) {
//     window.addEventListener("click", (e) => {
//         inscription.classList.remove("visible");
//         inscription.style.display = "none";
//         tabSectionFlou.forEach(element => {
//             element.classList.remove("flou");
//         })
//     })
// }
// else {
//     console.log("nope")
// }

bouton_connexion.addEventListener("click", () => {
    formulaire1.style.display = "none";
    formulaire2.style.display = "flex";
})

bouton_inscription.addEventListener("click", () => {
    formulaire1.style.display = "flex";
    formulaire2.style.display = "none";
})

// mise en place du zoom photo et du hover -----------------------

let photoDiv1 = document.getElementById("testing1");
let photoDiv2 = document.getElementById("testing2");
let photoDiv3 = document.getElementById("testing3");
let photoDiv4 = document.getElementById("testing4");
let photoDiv5 = document.getElementById("testing5");
let photoDiv6 = document.getElementById("testing6");
let photoDiv7 = document.getElementById("testing7");
let photoDiv8 = document.getElementById("testing8");
let photoDiv9 = document.getElementById("testing9");

photoDiv1.addEventListener("mouseover", () => {
    photoDiv1.classList.add("zoom");
})
photoDiv1.addEventListener("mouseout", () => {
    photoDiv1.classList.remove("zoom");
})

photoDiv2.addEventListener("mouseover", () => {
    photoDiv2.classList.add("zoom");
})

photoDiv2.addEventListener("mouseout", () => {
    photoDiv2.classList.remove("zoom");
})

photoDiv3.addEventListener("mouseover", () => {
    photoDiv3.classList.add("zoom");
})

photoDiv3.addEventListener("mouseout", () => {
    photoDiv3.classList.remove("zoom");
})

photoDiv4.addEventListener("mouseover", () => {
    photoDiv4.classList.add("zoom");
})

photoDiv4.addEventListener("mouseout", () => {
    photoDiv4.classList.remove("zoom");
})

photoDiv5.addEventListener("mouseover", () => {
    photoDiv5.classList.add("zoom");
})

photoDiv5.addEventListener("mouseout", () => {
    photoDiv5.classList.remove("zoom");
})

photoDiv6.addEventListener("mouseover", () => {
    photoDiv6.classList.add("zoom");
})

photoDiv6.addEventListener("mouseout", () => {
    photoDiv6.classList.remove("zoom");
})

photoDiv7.addEventListener("mouseover", () => {
    photoDiv7.classList.add("zoom");
})

photoDiv7.addEventListener("mouseout", () => {
    photoDiv7.classList.remove("zoom");
})

photoDiv8.addEventListener("mouseover", () => {
    photoDiv8.classList.add("zoom");
})

photoDiv8.addEventListener("mouseout", () => {
    photoDiv8.classList.remove("zoom");
})

photoDiv9.addEventListener("mouseover", () => {
    photoDiv9.classList.add("zoom");
})

photoDiv9.addEventListener("mouseout", () => {
    photoDiv9.classList.remove("zoom");
})

// mise en place du changement d'agencement du titre -----------------------

let emporium = document.querySelector("h1");
let header = document.getElementById("header");

window.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
        header.classList.remove("scroll");
    } else {
        header.classList.add("scroll");
    }
})

// mise en place carroussel


  

// let slidePosition = 0;
// let slides = document.getElementsByClassName("carroussel_items");
// let totalSlides = slides.length;

// document
//     .getElementById("next")
//     .addEventListener("click", function() {
//         moveToNextSlide();
//     })

// document
//     .getElementById("previous")
//     .addEventListener("click", function() {
//         moveToPreviousSlide();
//     })

// function updateSlidePosition() {
//     for (let slide of slides) {
//         slide.classList.remove("carroussel_items--visible");
//         slide.classList.remove("carroussel_items--hidden");
//     }

//     slides[slidePosition].classList.add("carroussel_items--visible");
//     console.log(slides[slidePosition])
// }

// function moveToPreviousSlide() {
//     if (slidePosition == 0) {
//         slidePosition = 0;
//     } else {
//         slidePosition--;
//     }

//     updateSlidePosition();
// }

// function moveToNextSlide() {
//     if (slidePosition == totalSlides -1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//     }

//     updateSlidePosition();
// }