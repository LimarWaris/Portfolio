// Title disparition

const title = document.querySelector('.title');


window.addEventListener('scroll', () => {
    
    if (window.scrollY > 120) {
        title.classList.add('hide'); 
    } else {
        title.classList.remove('hide');
    }
});



/* Contact Formulaire */

const formulaire = document.getElementById("formulaireDeContact");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputNom = formulaire.elements['nom'];
    const valeurNom = inputNom.value;

    const inputEmail = formulaire.elements['email'];
    const valeurEmail = inputEmail.value;

    const inputMessage = formulaire.elements['message'];
    const valeurMessage = inputMessage.value;

    const messageErrorMessageEnvoyer = document.getElementById('messageError');
    let erreur = false;

    
    if (!valeurNom) {
        messageErrorMessageEnvoyer.style.color = 'red';
        messageErrorMessageEnvoyer.style.fontSize = '18px';
        messageErrorMessageEnvoyer.textContent = "Le champ 'Nom' est requis.";
        erreur = true;
    } else if (!valeurEmail) {
        messageErrorMessageEnvoyer.style.color = 'red';
        messageErrorMessageEnvoyer.style.fontSize = '18px';
        messageErrorMessageEnvoyer.textContent = "Le champ 'Email' est requis.";
        erreur = true;
    } else if (!valeurMessage) {
        messageErrorMessageEnvoyer.style.color = 'red';
        messageErrorMessageEnvoyer.style.fontSize = '18px';
        messageErrorMessageEnvoyer.textContent = "Le champ 'Message' est requis.";
        erreur = true;
    } else {
        //Envoie Via EmailJS ne marche pas encore
        emailjs.init("6t5MMNTLoKwZlygiX");
        emailjs.send("service_tnykwks", "service_tnykwks", {
            nom: valeurNom,
            email: valeurEmail,
            message: valeurMessage
        }).then(
            function () {
                
                messageErrorMessageEnvoyer.style.color = 'green';
                messageErrorMessageEnvoyer.style.fontSize = '18px';
                messageErrorMessageEnvoyer.textContent = "Votre message a été envoyé avec succès !";
                
                formulaire.reset();
            },
            function (error) {
                
                messageErrorMessageEnvoyer.style.color = 'red';
                messageErrorMessageEnvoyer.style.fontSize = '18px';
                messageErrorMessageEnvoyer.textContent = "Une erreur s'est produite. Veuillez réessayer.";
                console.error("Erreur EmailJS :", error);
            }
        );
    }
});




//Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carrousel = document.querySelector('.carrousel-inner');
    const slides = document.querySelectorAll('.slideShow');
    const boutonGauche = document.querySelector('.arriere');
    const boutonDroit = document.querySelector('.avant');
    let index = 0;
    let intervalle;

    const changerSlide = () => {
        carrousel.style.transform = `translateX(-${index * 100}%)`;
    };

    const suivant = () => {
        index = (index + 1) % slides.length;
        changerSlide();
    };

    const precedent = () => {
        index = (index - 1 + slides.length) % slides.length;
        changerSlide();
    };

    const demarrerDefilement = () => {
        intervalle = setInterval(suivant, 3000);
    };

    const arreterDefilement = () => {
        clearInterval(intervalle);
    };

    boutonDroit.addEventListener('click', () => {
        arreterDefilement();
        suivant();
        demarrerDefilement();
    });

    boutonGauche.addEventListener('click', () => {
        arreterDefilement();
        precedent();
        demarrerDefilement();
    });

    demarrerDefilement();
});




// Fonction de défilement fluide pour le boutton a propos de moi
document.querySelector('.boutonDefilement').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});




// Bouton des competences

document.getElementById('htmlBtn').addEventListener('click', function() {
    let htmlDetail = document.getElementById('htmlDetail');
    htmlDetail.style.display = 'block';
    htmlDetail.classList.add('fadeIn');
});

document.getElementById('cssBtn').addEventListener('click', function() {
    let cssDetail = document.getElementById('cssDetail');
    cssDetail.style.display = 'block';
    cssDetail.classList.add('fadeIn');
});

document.getElementById('jsBtn').addEventListener('click', function() {
    let jsDetail = document.getElementById('jsDetail');
    jsDetail.style.display = 'block';
    jsDetail.classList.add('fadeIn');
});

document.getElementById('phpBtn').addEventListener('click', function() {
    let phpDetail = document.getElementById('phpDetail');
    phpDetail.style.display = 'block';
    phpDetail.classList.add('fadeIn');
});

document.getElementById('mysqlBtn').addEventListener('click', function() {
    let mysqlDetail = document.getElementById('mysqlDetail');
    mysqlDetail.style.display = 'block';
    mysqlDetail.classList.add('fadeIn');
});

document.getElementById('gitBtn').addEventListener('click', function() {
    let gitDetail = document.getElementById('gitDetail');
    gitDetail.style.display = 'block';
    gitDetail.classList.add('fadeIn');
});

document.getElementById('linuxBtn').addEventListener('click', function() {
    let linuxDetail = document.getElementById('linuxDetail');
    linuxDetail.style.display = 'block';
    linuxDetail.classList.add('fadeIn');
});

document.getElementById('illustratorBtn').addEventListener('click', function() {
    let illustratorDetail = document.getElementById('illustratorDetail');
    illustratorDetail.style.display = 'block';
    illustratorDetail.classList.add('fadeIn');
});

document.getElementById('photoshopBtn').addEventListener('click', function() {
    let photoshopDetail = document.getElementById('photoshopDetail');
    photoshopDetail.style.display = 'block';
    photoshopDetail.classList.add('fadeIn');
});

document.getElementById('indesignBtn').addEventListener('click', function() {
    let indesignDetail = document.getElementById('indesignDetail');
    indesignDetail.style.display = 'block';
    indesignDetail.classList.add('fadeIn');
});

document.getElementById('figmaBtn').addEventListener('click', function() {
    let figmaDetail = document.getElementById('figmaDetail');
    figmaDetail.style.display = 'block';
    figmaDetail.classList.add('fadeIn');
});

// Fonction pour masquer toutes les compétences
function hideAllDetails() {
    let allDetails = document.querySelectorAll('.detail');
    allDetails.forEach(function(detail) {
        detail.style.display = 'none';
        detail.classList.remove('fadeIn');
    });
}










// Defilement Bar Nav Competences

document.querySelectorAll('.menu-item-has-children > a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let subMenu = this.nextElementSibling;
        subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
    });
});