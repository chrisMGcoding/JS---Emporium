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

let inscription = document.querySelectorAll("section")[7];
let connexion = document.querySelectorAll("section")[8];
 
let span = document.getElementsByClassName("close")[0];

bouton_co.addEventListener("click", () => {
    inscription.classList.toggle("hidden");
    inscription.classList.toggle("absolute");
    myBody.classList.toggle("relative");
})


// mise en place du zoom photo et du hover

let photoAll = Array.from(section3.querySelectorAll("img"));

// photo.forEach(element => {
//     element.addEventListener("mouseover", () => {
//         let div = document.createElement("div");
//         div.classList.add("overlay");
//         div.textContent = "View Details";
//     })
// })

let zoom = (element) => {
    let widthPic = (element.target.width*1.5).toString() + "px";
    // element.style.width = widthPic
    console.log(widthPic);
    console.log(element.style.width);
}

photoAll.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.target.width);
        let temp = e.currentTarget.offsetWidth;
        console.log(temp);
    })
})

let zoomin = () => {
    let photo = document.getElementById("test10");
    console.log(photo);
    let width = photo.clientWidth;
    console.log(photo.style.width);
    photo.style.width = (width + 100) + "px";
    console.log(photo.style.width);
}




