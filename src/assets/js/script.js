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
    document.getElementById("title").style.marginTop = "-50vmin";
    document.getElementById("title").style.marginLeft = "-15vmin";
    document.getElementById("titleJob").style.marginBottom = "3.5vmin";
    document.getElementById("titleLeftColumn").style.marginTop = "0vmin";
    document.getElementById("titleLastName").style.fontSize = "7vmin";
    document.getElementById("titleLastName").style.paddingBottom = "0";
    document.getElementById("titleFirstName").style.fontSize = "5vmin";
    document.getElementById("titleJob").style.fontSize = "2vmin";
    document.getElementById("sectionDiv").style.opacity = "1";
}

// When clicking on the language icon bottom left, it toggle french or english for the whole website.
// The icon display the language it is on at the moment (fr or en).
function changeLang() {
    alert("toggle lang");
}