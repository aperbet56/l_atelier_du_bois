// Récupération des éléments HTML 5
const yearActivity = document.querySelector(".year");
const yearCopyright = document.querySelector(".footer__year");

// Récupération de la date actuelle stockée dans la constante date
const date = new Date();
//console.log(date);

// Récupération de l'année stockée dans la constante year
const year = date.getFullYear();
//console.log(year);

// Affichage dynamique de l'année en cours
yearCopyright.textContent = `${year}`;
yearActivity.textContent = `${year}`;
