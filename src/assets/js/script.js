var isEnglish = false;

function profileCursorSkew(){
    var e = window.event;
    var picture = document.getElementById("profilePicture");
    var pictureSize = picture.height;
    var posXClient = e.clientX;
    var posYClient = e.clientY;
    var posXPicture = (picture.offsetLeft - picture.scrollLeft + picture.clientLeft) + 1/2 * pictureSize;
    var posYPicture = (picture.offsetTop - picture.scrollTop + picture.clientTop) + 1/2 * pictureSize;

    if(posXClient < posXPicture && posYClient < posYPicture) {
        document.getElementById("profilePicture").style.borderRadius = "0";
    }else if(posXClient > posXPicture && posYClient < posYPicture) {
        document.getElementById("profilePicture").style.borderRadius = "15vh";
        ocument.getElementById("profilePicture").style.transform = "scale(1.5)";
    }else if(posXClient < posXPicture && posYClient > posYPicture) {
        document.getElementById("profilePicture").style.borderRadius = "15vh";
    }else if(posXClient > posXPicture && posYClient > posYPicture){
        document.getElementById("profilePicture").style.transform = "scale(1.2)";
        document.getElementById("profilePicture").style.borderRadius = "0";
    }else{
    }
}

// When hovering on navigation dots bottom left, the name of the section is displayed next to button div.
function showSectionName(id) {
    if(id == "btnProject"){
        document.getElementById("textBtn").innerHTML = "projets";
    }else if(id == "btnAbout"){
        document.getElementById("textBtn").innerHTML = "à propos";
    }else if(id == "btnContact"){
        document.getElementById("textBtn").innerHTML = "contact";
    }else{
        document.getElementById("textBtn").innerHTML = "acceuil";
    }
    document.getElementById("textBtn").style.opacity = "0.8";  
}

// When removing cursor from navigation dots bottom left, the name of the section disappears.
function removeSectionName() {
    document.getElementById("textBtn").style.opacity = "0";
}

// Navigation to section
function pushSection(id) {
    const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')

    if(mediaQuery.matches){

        var boutonsNav = document.getElementsByClassName('btnNavPage');
        var len =  boutonsNav.length;

        for(var i=0 ; i<len; i++){
        boutonsNav[i].style.backgroundColor="black";

        }
    }
        
    document.body.style.backgroundPositionY = "-200vh"

    document.getElementById("btnHome").style.display = "block"

    document.getElementById("title").style.top = "0";
    document.getElementById("title").style.width = "40vmin";
    document.getElementById("title").style.height = "15vmin";

    document.getElementById("titleLeftColumn").style.marginTop = "0vmin";

    document.getElementById("titleFirstName").style.fontSize = "5vmin";

    document.getElementById("titleJob").style.width = "25vmin";
    document.getElementById("titleJob").style.marginBottom = "3.5vmin";
    document.getElementById("titleJob").style.fontSize = "2vmin";

    document.getElementById("titleLastName").style.fontSize = "7vmin";

    document.getElementById("colorLastName").style.color = "rgba(0, 0, 0, 0.75)";
    
    document.getElementById("sectionDiv").style.transitionDelay = "150ms";
    document.getElementById("sectionDiv").style.opacity = "1";

    document.getElementById("textBtn").style.color = "black";

// When clicking on a navigation button, the div "sectionDiv" is updated with the corresponding informations
    if(id == "btnAbout"){
        document.getElementById("sectionDiv").innerHTML = "<img id=\"profilePicture\" src=\"assets/images/photoProfil.jpg\"><h1 id=\"textAbout\">De nature <span>autodidacte</span> et <span>curieux</span> et depuis toujours <span>passionné</span> par tout ce qui touche la <span>technologie</span>. Le milieu du développement me permet de mettre à profit mon <span>soucis du détail</span> tout en laissant s'exprimer mon côté <span>créatif</span>.<br><br>Travaillant autrefois en <span>audiovisuel</span>, les <span>technologies</span> ont toujours fait partie de mon quotidien et sont pour moi comme une seconde nature.</h1>"
    }else if(id == "btnProject"){
        document.getElementById("sectionDiv").innerHTML = "<img class=\"projectPicture\" src=\"assets/images/project1Picture.png\"><h1>De nature autodidacte et curieux et depuis toujours passionné par tout ce qui touche la technologie. Le milieu du développement me permet de mettre à profit mon soucis du détail tout en laissant s'exprimer mon côté créatif.<br><br>Travaillant autrefois en audiovisuel, les technologies ont toujours fait partie de mon quotidien et sont pour moi comme une seconde nature.</h1>";
    }else{
        document.getElementById("sectionDiv").innerHTML = "<div id=\"contact\"><a href=\"https://www.linkedin.com/in/gabriel-larue-34709b164/\"><i class=\"fab fa-linkedin\"></i></a><a href=\"https://www.github.com/GabrielLarue\"><i class=\"fab fa-github\"></i></a><a href=\"mailto:gabriellarue.dev@gmail.com\"><i class=\"fas fa-envelope\"></i></a></div>"
    }
}

//Return homepage button
function home() {
    const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')

    document.body.style.backgroundPositionY = "0vh"

    document.getElementById("btnHome").style.display = "none";

    document.getElementById("title").style.width = "80vmin";
    document.getElementById("title").style.height = "30vmin";
    document.getElementById("title").style.top = "40vmin";
    document.getElementById("title").style.left = "0";


    document.getElementById("titleLeftColumn").style.marginTop = "3.5vmin";

    document.getElementById("titleFirstName").style.fontSize = "7vmin";

    document.getElementById("titleJob").style.width = "45vmin";
    document.getElementById("titleJob").style.marginBottom = "0";
    document.getElementById("titleJob").style.fontSize = "4vmin";

    document.getElementById("titleLastName").style.fontSize = "10vmin";
    
    
    document.getElementById("sectionDiv").style.transitionDelay = "0ms";
    document.getElementById("sectionDiv").style.opacity = "0";

    document.getElementById("sectionDiv").innerHTML = ""; 
    
    document.getElementById("textBtn").style.color = "white";

    if(mediaQuery.matches){
        document.getElementById("title").style.top = "20vmin";
        document.getElementById("colorLastName").style.color = "rgba(0, 0, 0, 0.75)";

        var boutonsNav = document.getElementsByClassName('btnNavPage');
        var len =  boutonsNav.length;

        for(var i=0 ; i<len; i++){
        boutonsNav[i].style.backgroundColor="rgba(255, 255, 255, 0.8)";

        }
    }else{
        document.getElementById("colorLastName").style.color = "rgba(255, 255, 255, 0.75)";
        document.getElementById("title").style.left = "10vmin";
        document.getElementById("title").style.top = "40vmin";
    }  
}

// When clicking on the language icon bottom left, it toggle french or english for the whole website.
// The icon display the language it is on at the moment (fr or en).
function changeLang() {
    if(isEnglish){
        document.getElementById("titleJob").innerHTML = "développeur front-end"
        isEnglish = false;
    }else{
        document.getElementById("titleJob").innerHTML = "front-end developer"
        isEnglish = true;
    }    
}

function modalContact() {
    document.getElementById("pageBody").style.opacity = "0.25"

    document.getElementById("modalContact").style.display = "flex";
}