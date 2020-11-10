// ************************************
// COMMENT // SOON TO BE CHANGED
// ************************************
// ====================================
// FUNCTION DESCRIPTION
// ====================================

// ---------------------------------------------------------------------------------------------------------------

// ====================================
// When in the "About" section the 
// profile picture rotate according to 
// the user cursor position on the screen
// ====================================
function cursorFollow(){

    if(document.getElementById("profilePicture")){
        var e = window.event;
        
        var picture = document.getElementById("profilePicture");

        var posXClient = e.clientX;
        var posYClient = e.clientY;
        var posXPicture = picture.offsetLeft + picture.width * 0.5;
        var posYPicture = picture.offsetTop + picture.height * 0.5;

        var rotationX = Math.round((posXPicture - posXClient) / 20);
            if(rotationX < -20){
                document.getElementById("profilePicture").style.transform = "rotateY(-21deg)";
            }else if(rotationX > 20){
                document.getElementById("profilePicture").style.transform = "rotateY(21deg)";
            }else{
                document.getElementById("profilePicture").style.transform = "rotateY(" + rotationX + "deg)";
            }

        var rotationY = Math.round((posYPicture - posYClient) / 15);
            if(rotationY > 20){
                document.getElementById("profilePicture").style.transform += "rotateX(-21deg)"; 
            }else if(rotationY < -20){
                document.getElementById("profilePicture").style.transform += "rotateX(21deg)";
            }else{
                document.getElementById("profilePicture").style.transform += "rotateX(" + -rotationY + "deg)"; 
            }  
    }

}

// ====================================
// When hovering on navigation button, 
// the name of the section is displayed 
// at the bottom of the page
// ====================================
function showSectionName(id) {

    switch(id){
        case "btnProject" :
            document.getElementById("textBtn").innerHTML = "projets";
            document.getElementById("textBtn").style.opacity = "0.8"; 
        break;
        case "btnAbout" :
            document.getElementById("textBtn").innerHTML = "à propos";
            document.getElementById("textBtn").style.opacity = "0.8";
        break;
        case "btnContact" :
            document.getElementById("textBtn").innerHTML = "contact";
            document.getElementById("textBtn").style.opacity = "0.8";
        break;
        default :
            document.getElementById("textBtn").innerHTML = "acceuil";
            document.getElementById("textBtn").style.opacity = "0.8";
        break;   
    }

}

// ====================================
// When removing cursor from navigation 
// button, the name of the section 
// disappears.
// ====================================
function removeSectionName() {

    document.getElementById("textBtn").style.opacity = "0";

}

// ====================================
// When clicking on navigation button,
// the title is moved to top left and
// HTML content is injected inside the
// div named SectionDiv.
// ====================================
function pushSection(id) {

// ************************************
// Since the background changes for 
// mobiles devices, the navigation buttons
// need to change color when going
// in an out of sections.
// ************************************
    const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')

    if(mediaQuery.matches){
        var boutonsNav = document.getElementsByClassName('btnNavPage');
        var len =  boutonsNav.length;

        for(var i=0 ; i<len; i++){
        boutonsNav[i].style.backgroundColor="black";
        }
    }

// ************************************
// Move the title from middle"ish" to
// top left corner.
// ************************************
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

// ************************************
// For now the HTML is written directly
// in the script, but it is going to be
// moved to a local file.
// ************************************
    if(id == "btnAbout"){
        document.getElementById("sectionDiv").innerHTML = "<img id=\"profilePicture\" src=\"assets/images/photoProfil.jpg\"><h1 id=\"textAbout\">De nature <span>autodidacte</span> et <span>curieux</span>, je suis depuis toujours <span>passionné</span> par tout ce qui touche la <span>technologie</span>. Le milieu du développement me permet de mettre à profit mon <span>soucis du détail</span> tout en laissant s'exprimer mon côté <span>créatif</span>.<br><br>Travaillant autrefois en <span>audiovisuel</span>, les <span>technologies</span> ont toujours fait partie de mon quotidien et sont pour moi comme une seconde nature.</h1>"
    }else if(id == "btnProject"){
        document.getElementById("sectionDiv").innerHTML = "<div class=\"cardProject\"><img class=\"projectPicture\" src=\"assets/images/project1Picture.png\"><div><h2 class=\"titleProject\">Gym & Cook <span>(projet en cours)<span></h2><h2 class=\"subtitleProject\">Projet d’équipe intégrateur fin AEC</h2><h3 class=\"texteProjet\">Application de type «PWA» proposant une plateforme pour permettre à des professionnels (entraîneurs personnels et nutritionnistes) de créer des plans de remise en forme en fonction des besoins des utilisateurs. <br><br>En charge du design et de la programmation côté client de la section recettes et alimentation.</div></div>";
    }else{
        document.getElementById("sectionDiv").innerHTML = "<div id=\"contact\"><a href=\"https://www.linkedin.com/in/gabriel-larue-34709b164/\"><i class=\"fab fa-linkedin\"></i></a><a href=\"https://www.github.com/GabrielLarue\"><i class=\"fab fa-github\"></i></a><a href=\"mailto:gabriellarue.dev@gmail.com\"><i class=\"fas fa-envelope\"></i></a></div>"
    }

}

// ====================================
// When clicking on home button,
// the title is moved back to the middle
// and the div sectionDiv is cleared.
// ====================================
function home() {

// ************************************
// Since the background change for 
// mobile device, the navigation buttons
// need to change color when going
// in an out of sections. For the same
// reason, just the desktop version 
// need the title to go back to white.
// ************************************
    const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')

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

}
