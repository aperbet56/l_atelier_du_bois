// Récupération des éléments HTML5
const lastName = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#message");
const submitBtn = document.querySelector(".btn");
const form = document.querySelector(".form");

// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "input" sur l'input lastName
  lastName.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) === false) {
      document.querySelector(".name__error__message").textContent =
        "Veuillez saisir un nom valide, ex : Dupont";
      return false;
    } else {
      document.querySelector(".name__error__message").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 *  @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "input" sur l'input email
  email.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) === false) {
      document.querySelector(".email__error__message").textContent =
        "Veuillez saisir une adresse mail valide, ex : contact@gmail.com";
      return false;
    } else {
      document.querySelector(".email__error__message").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);
