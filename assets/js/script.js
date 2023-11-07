'use strict';

/**
 * Navbar toggle
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * Toggle navbar & overlay when clicking any navbar-link
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    const sectionId = this.getAttribute('href').substring(1); // Extract section ID
    scrollToSection(sectionId);
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * Header & go-top-btn active when window scrolls down to 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});





















































// Determine the user's language preference using browser settings.
var userLanguage = navigator.language || navigator.userLanguage;



// Check the user's language preference and update the content.
if (userLanguage.startsWith("fr")) {
    updateContent("fr");
} else {
    updateContent("en");
}


// Define your content in both English and French.
var content = {
    en: {

    },
    fr: {
        home: "Accueil",
        services: "Services",
      about: "A propos",
      case: "Etude de cas",
      bookacall: " Réserver un appel",
      herotitle: "MediaTAG est une agence de copywriting.",
      ourmission: "Notre mission est de vous faire gagner plus d'argent grâce à des textes professionnels.",
      herotext: "Arretez de perdre du temps et de l'argent avec un marketing inefficace.",
      herotext2: "Il est temps de faire fructifier votre budget publicitaire, de développer votre activité et d'augmenter vos ventes.",
      speakbutton:  "Planifiez votre appel GRATUIT dès maintenant ! ",
      ourservice: "Notre service:",
      about1: " Le copywriting est l'acte de rédiger un texte dans le but d'inciter le lecteur à agir. Nous rédigerons donc littéralement tout ce dont votre entreprise a besoin pour que plus de gens achètent chez vous : ",
      emailmarketing: "✅​Email et sms marketing",
      salesfunnels: "✅ Tunnels de vente",
      adcopy: "✅ Texte publicitaire",
      salespages: "✅ Pages de vente",
      website: "✅ Contenu de site internet",
      more: "✅ Et plus encore...",
      about2: "Si vous n'êtes toujours pas convaincu, consultez notre <strong style='color : orange ; text-decoration:underline ;'>étude de cas GRATUITE</strong> sur la façon dont nous avons fait gagner à nos clients entre 10 000 et 200 000 dollars de façon constante, grâce à un bon copywriting.",
      why: "Pourquoi Notre Agence ?",
      about3: "Nous ne faisons qu'une chose - nous le faisons avec une concentration parfaite et mieux que quiconque. Si vous voulez une agence qui offre une solution complète de tout ce qui ne fera pas avancer l'aiguille, nous ne sommes pas pour vous. ",
      next: "Alors, quelle est la prochaine étape ?",
      about4: "Si vous voulez une agence où, en deux clics, vous pouvez obtenir un retour claire de vos dépenses, de vos bénéfices et de votre profit net, nous sommes faits pour vous.",
     satclients: "Clients Satisfaits.",
      ofdollars: "De dollars dépensés dans du marketing efficace",
       serviceoffer: "Service Offert",
        ourcasestudy: "Regarder Notre Etude De Cas Gratuite:",
        howwework: "Comment mon agence aide les entreprises de ecommerce, de formations et les agences de marketing digital à se développer de manière agressive",
       results: "Comment on génère systématiquement des retours sur investissement incroyables pour nos clients",
        omnipresence: "Comment atteindre l'omniprésence et dominer la concurrence ?",
        watchthecasestudy: "Regarder L'Etude De Cas GRATUITE !",
        hope: "Nous espérons que ce site web a répondu a toutes vos questions, et nous vous attendons avec impatience parmi nos clients.",
    }
};

// Function to update the content based on the user's language.
function updateContent(language) {
  document.getElementById("home").textContent = content[language].home;
  document.getElementById("services").textContent = content[language].services;
    document.getElementById("about").textContent = content[language].about;
    document.getElementById("bookacall").textContent = content[language].bookacall;
  document.getElementById("herotitle").textContent = content[language].herotitle;
  document.getElementById("herotext").textContent = content[language].herotext;
  document.getElementById("ourmission").textContent = content[language].ourmission
  document.getElementById("herotext2").textContent = content[language].herotext2;
  document.getElementById("speakbutton").textContent = content[language].speakbutton;
  document.getElementById("ourservice").textContent = content[language].ourservice;
  document.getElementById("about1").textContent = content[language].about1;
  document.getElementById("emailmarketing").textContent = content[language].emailmarketing;
  document.getElementById("salesfunnels").textContent = content[language].salesfunnels;
  document.getElementById("adcopy").textContent = content[language].adcopy;
  document.getElementById("salespages").textContent = content[language].salespages;
  document.getElementById("website").textContent = content[language].website;
  document.getElementById("more").textContent = content[language].more;
  document.getElementById("about2 ").textContent = content[language].about2;
  document.getElementById("why").textContent = content[language].why;
  document.getElementById("about3").textContent = content[language].about3;
  document.getElementById("about4").textContent = content[language].about4;
  document.getElementById("satclients").textContent = content[language].satclients;
  document.getElementById("ofdollars").textContent = content[language].ofdollars;
  document.getElementById("serviceoffer").textContent = content[language].serviceoffer;
  document.getElementById("ourcasestudy").textContent = content[language].ourcasestudy;
    document.getElementById("howwework").textContent = content[language].howwework;
    document.getElementById("results").textContent = content[language].results;
    document.getElementById("omnipresence").textContent = content[language].omnipresence;
    document.getElementById("watchthecasestudy").textContent = content[language].watchthecasestudy;
    document.getElementById("hope").textContent = content[language].hope;
  
}


