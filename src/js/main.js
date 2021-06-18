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

let bouton_co = document.querySelector("button");
let bouton_connexion = document.querySelectorAll("button")[16];
let bouton_inscription = document.querySelectorAll("button")[17];
console.log(bouton_inscription)

let inscription = document.querySelectorAll("section")[7];
let connexion = document.querySelectorAll("section")[8];
 
let span = document.getElementsByClassName("close")[0];

let tabSectionFlou = [myHeader, section2, section3, section4, section5, section6, section7];

bouton_co.addEventListener("click", () => {
    inscription.classList.toggle("hidden");
    inscription.classList.toggle("absolute");
    myBody.classList.toggle("relative");
    tabSectionFlou.forEach(element => {
        element.classList.add("flou");
    })
});

bouton_connexion.addEventListener("click", () => {
    connexion.classList.toggle("hidden");
    connexion.classList.toggle("absolute");
    inscription.classList.toggle("hidden");
});

// bouton_inscription.addEventListener("click", () => {
//     inscription.classList.toggle("absolute");
//     connexion.classList.toggle("hidden");
//     console.log("coucou")
// })

let closeBouton = document.querySelectorAll("span")[11];

closeBouton.addEventListener("click", () => {
    tabSectionFlou.forEach(element => {
        element.classList.remove("flou");
    })
    inscription.classList.add("hidden");
    connexion.classList.add("hidden");
})

// mise en place du zoom photo et du hover -----------------------

// let photoAll = Array.from(section3.querySelectorAll("img"));

// photoDiv.forEach(element => {
//     element.addEventListener("click", (e) => {
//        else if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-plates.jpg") {
//             zoomin6()
//         }
//     })
// })

// photoAll.forEach(element => {
//     element.addEventListener("click", (e) => {

//         if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-shoes.jpg") {
//             zoomin9();
//         } 
//         else if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-bed.jpg") {
//             zoomin8()
//         }
//         // else if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-modern-sofa.jpg") {
//         //     zoomin7()
//         // }
//         // else if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-plates.jpg") {
//         //     zoomin6()
//         // }
//         else {
//             console.log(e.target.src)
//         }

//     })
// })



// photoAll.forEach(element => {
//     element.addEventListener("click", (e) => {
//         if (e.target.src == "http://127.0.0.1:5500/public/images/products_mini/product-shoes.jpg") {
//             zoomout9();
//         } 
//     })
// })

// // -------------------------------------

// let zoomin9 = () => {
//     let photo = document.getElementById("test9");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout9 = () => {
//     let photo = document.getElementById("test9");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin8 = () => {
//     let photo = document.getElementById("test8");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout8 = () => {
//     let photo = document.getElementById("test8");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin7 = () => {
//     let photo = document.getElementById("test7");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout7 = () => {
//     let photo = document.getElementById("test7");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin6 = () => {
//     let photo = document.getElementById("test6");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout6 = () => {
//     let photo = document.getElementById("test6");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin5 = () => {
//     let photo = document.getElementById("test5");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout5 = () => {
//     let photo = document.getElementById("test5");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin4 = () => {
//     let photo = document.getElementById("test4");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout4 = () => {
//     let photo = document.getElementById("test4");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin3 = () => {
//     let photo = document.getElementById("test3");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout3 = () => {
//     let photo = document.getElementById("test3");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin2 = () => {
//     let photo = document.getElementById("test2");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout2 = () => {
//     let photo = document.getElementById("test2");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }

// // -------------------------------------

// let zoomin1 = () => {
//     let photo = document.getElementById("test1");
//     let width = photo.clientWidth;
//     photo.style.width = (width + 100) + "px";
// }


// let zoomout1 = () => {
//     let photo = document.getElementById("test1");
//     let width = photo.clientWidth;
//     photo.style.width = (width - 100) + "px";
// }



let photoDiv1 = document.getElementById("testing1");
let photoDiv2 = document.getElementById("testing2");
let photoDiv3 = document.getElementById("testing3");
let photoDiv4 = document.getElementById("testing4");
let photoDiv5 = document.getElementById("testing5");
let photoDiv6 = document.getElementById("testing6");
let photoDiv7 = document.getElementById("testing7");
let photoDiv8 = document.getElementById("testing8");
let photoDiv9 = document.getElementById("testing9");

photoDiv1.addEventListener("click", () => {
    photoDiv1.classList.toggle("zoom");
    console.log("ok")
})

photoDiv2.addEventListener("click", () => {
    photoDiv2.classList.toggle("zoom");
    console.log("ok")
})

photoDiv3.addEventListener("click", () => {
    photoDiv3.classList.toggle("zoom");
    console.log("ok")
})

photoDiv4.addEventListener("click", () => {
    photoDiv4.classList.toggle("zoom");
    console.log("ok")
})

photoDiv5.addEventListener("click", () => {
    photoDiv5.classList.toggle("zoom");
    console.log("ok")
})

photoDiv6.addEventListener("click", () => {
    photoDiv6.classList.toggle("zoom");
    console.log("ok")
})

photoDiv7.addEventListener("click", () => {
    photoDiv7.classList.toggle("zoom");
    console.log("ok")
})

photoDiv8.addEventListener("click", () => {
    photoDiv8.classList.toggle("zoom");
    console.log("ok")
})

photoDiv9.addEventListener("click", () => {
    photoDiv9.classList.toggle("zoom");
    console.log("ok")
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