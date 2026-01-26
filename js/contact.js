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

/**
 * Déclaration de la fonction textareaValidation pour la validation de la textarea
 *  @param {String} textarea
 */
const textareaValidation = (textarea) => {
  // Ecoute de l'événement "input" sur la textarea
  textarea.addEventListener("input", (e) => {
    e.preventDefault();
    if (textarea.value.length < 50) {
      document.querySelector(".textarea__error__message").textContent =
        "Le message doit contenir au moins 50 caractères";
      return false;
    } else {
      document.querySelector(".textarea__error__message").textContent = " ";
      return true;
    }
  });
};
// Appel de la fonction textareaValidation
textareaValidation(textarea);

// Déclaration de la fonction submitForm qui va permettre l'envoi des données du formulaire
const submitForm = () => {
  // Ecoute de l'événement "click" sur le bouton "Envoyer"
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      regexName.test(lastName.value) === false ||
      regexEmail.test(email.value) === false ||
      textarea.value.length < 50
    ) {
      alert(
        "Veuillez remplir correctement les différents champs di formulaire !"
      );
    } else {
      const contact = {
        lastName: lastName.value,
        email: email.value,
        textarea: textarea.value,
      };
      console.log(contact);

      setTimeout(() => {
        alert(
          "Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais ! "
        );
        window.location.href = "index.html";
      }, 500);
    }
  });
};
// Appel de la fonction submitForm()
submitForm();
