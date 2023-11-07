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





























// Detect the user's browser language
const userLanguage = navigator.language || navigator.userLanguage;

// Check if the user's language is French ('fr')
if (userLanguage.startsWith('fr')) {
    // French language - Change content to French

    // Change text content or attributes of specific elements to French
    // For example:
    document.title = 'MediaTAG: agence de copywriting'; // Change the title of the document
    // Change text on various elements to French throughout the page
    // Example: 



  
    document.getElementById('home').textContent = 'Accueil';
  document.getElementById('services').textContent = 'Services';
  document.getElementById('about').textContent = 'A propos';
  document.getElementById('case').textContent = 'Etude de cas';
  document.getElementById('bookacall').textContent = 'Réserver un appel.';
  document.getElementById('herotitle').textContent = 'MediaTAG est une agence de copywriting.';
  document.getElementById('ourmission').textContent = "Notre mission est de vous faire gagner plus d'argent grâce à des textes professionnels. ";
  document.getElementById('herotext').textContent = "Arretez de perdre du temps et de l'argent avec un marketing inefficace.";
  document.getElementById('herotext2').textContent = "Il est temps de faire fructifier votre budget publicitaire, de développer votre activité et d'augmenter vos ventes.";
  document.getElementById('speakbutton').textContent = "Planifiez votre appel GRATUIT dès maintenant ! ";
  document.getElementById('ourservice').textContent = 'Notre service: ';
  document.getElementById('about1').textContent = " Le copywriting est l'acte de rédiger un texte dans le but d'inciter le lecteur à agir. Nous rédigerons donc littéralement tout ce dont votre entreprise a besoin pour que plus de gens achètent chez vous : ";
  document.getElementById('emailmarketing').textContent = '✅​Email et sms marketing';
  document.getElementById('salesfunnels').textContent = '✅ Funnels de vente';
  document.getElementById('adcopy').textContent = '✅ Texte publicitaire';
  document.getElementById('salespages').textContent = '✅ Pages de vente';
  document.getElementById('website').textContent = '✅ Contenu de site internet';
  document.getElementById('more').textContent = '✅ Et plus encore...';
  document.getElementById('about2').textContent = "Si vous n'êtes toujours pas convaincu, consultez notre <strong style="color : orange ; text-decoration:underline ;">étude de cas GRATUITE</strong> sur la façon dont nous avons fait gagner à nos clients entre 10 000 et 200 000 dollars de façon constante, grâce à un bon copywriting.";
  document.getElementById('why').textContent = 'Pourquoi Notre Agence ?';
  document.getElementById('about3').textContent = "Nous ne faisons qu'une chose - nous le faisons avec une concentration parfaite et mieux que quiconque. Si vous voulez une agence qui offre une solution complète de tout ce qui ne fera pas avancer l'aiguille, nous ne sommes pas pour vous. ";
  document.getElementById('about4').textContent = 'Si vous voulez une agence où, en deux clics, vous pouvez obtenir un retour claire de vos dépenses, de vos bénéfices et de votre profit net, nous sommes faits pour vous. ';
  document.getElementById('satclients').textContent = 'Clients Satisfaits.';
  document.getElementById('ofdollars').textContent = 'De dollars dépensés dnas un marketing efficace';
  document.getElementById('serviceoffer').textContent = 'Service Offert';
  document.getElementById('ourcasestudy').textContent = 'Regarder Notre Etude De Cas Gratuite:';
  document.getElementById('howwework').textContent = "Comment mon agence aide les entreprises de ecommerce, de formations et les agences de marketing digital à se développer de manière agressive";
  document.getElementById('results').textContent = 'Comment on génère systématiquement des retours sur investissement incroyables pour nos clients';
  document.getElementById('omnipresence').textContent = "Comment atteindre l'omniprésence et dominer la concurrence ?";
  document.getElementById('watchthecasestudy').textContent = "Regarder L'Etude De Cas GRATUITE !";
  document.getElementById('hope').textContent = 'MediaTAG est une agence de rédaction publicitaire.Nous espérons que ce site web a répondu a toutes vos questions, et nous vous attendons avec impatience parmi nos clients.';

  
    // Change href attribute of specific links if needed
    // Example:






  
    document.querySelectorAll('a[href="case.html"]').forEach(link => {
        link.href = 'cas.html'; // Change the link's href to a French version
    });

    // Hide or show elements based on language
    // Example: Hide elements specific to English
    document.getElementById('someElementInEnglish').style.display = 'none';
} else {
    // Default to English - Keep the content in English
}

// You would need to customize this to your specific elements and content that you want to change based on the language.

