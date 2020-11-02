// Change background image randomly when loading page
function bgImageRandom() {
    var randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            document.getElementById("bodyHome").style.backgroundColor = "teal";
            break;
        case 1:
            document.getElementById("bodyHome").style.backgroundColor = "black";
            break;
        case 2:
            document.getElementById("bodyHome").style.backgroundColor = "blue";
            break;
        default:
            document.getElementById("bodyHome").style.backgroundColor = "black";
    }
}

// When hovering on navigation dots bottom left, the name of the section is displayed next to button div.
function showSectionName(id) {
    if(id == "btnProject"){
        document.getElementById("textBtn").innerHTML = "projets";
    }else if(id == "btnAbout"){
        document.getElementById("textBtn").innerHTML = "à propos";
    }else{
        document.getElementById("textBtn").innerHTML = "contact";
    }
    document.getElementById("textBtn").style.opacity = "0.8";  
}

// When removing cursor from navigation dots bottom left, the name of the section disappears.
function removeSectionName() {
    document.getElementById("textBtn").style.opacity = "0";
}

// Navigation to section
function pushSection(id) {
    document.getElementById("title").style.gridRow = "1";
    document.getElementById("title").style.marginLeft = "0vw";
}

// When clicking on the language icon bottom left, it toggle french or english for the whole website.
// The icon display the language it is on at the moment (fr or en).
function changeLang() {
    alert("toggle lang");
}