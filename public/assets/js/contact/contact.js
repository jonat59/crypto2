const form = document.querySelector('#form-contact');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');
// toutes les div erreurs
const errorName = document.querySelector('#error-name');
const errorEmail = document.querySelector('#error-email');
const errorSubject = document.querySelector('#error-subject');
const errorMessage = document.querySelector('#error-message');
const responseMessage = document.querySelector('#response-message');

// validation données
const nameRegex = new RegExp('^[A-Za-zÀ-ÿ-]+(?: [A-Za-zÀ-ÿ-]+)*$');
const emailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

console.log(emailRegex);

// validation via regex
function validateField(input, regex, errorEl, errorMsg) {
  const value = input.value.trim();
  if (!regex.test(value)) {
    errorEl.textContent = errorMsg;
    input.classList.remove('valid');
    input.classList.add('invalid');
    setValidationIcon(input, false);
    return false;
  } else {
    errorEl.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
    setValidationIcon(input, true);
    return true;
  }
}

// Affiche ou cache l'icône de validation dans le wrapper de l'input
function setValidationIcon(input, isValid) {
  const wrapper = input.parentElement;
  const icon = wrapper.querySelector('.validation-icon');
  if (isValid) {
    icon.className = 'validation-icon fas fa-check valid-icon'; // Icône check verte
  } else {
    icon.className = 'validation-icon'; // Réinitialisation (aucune icône)
  }
}

// Fonction de validation par longueur minimale pour les champs sujet et message
function validateLength(input, minLength, errorEl, errorMsg) {
  const value = input.value.trim();
  if (value.length < minLength) {
    errorEl.textContent = errorMsg;
    input.classList.remove('valid');
    input.classList.add('invalid');
    setValidationIcon(input, false);
    return false;
  } else {
    errorEl.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
    setValidationIcon(input, true);
    return true;
  }
}

// Ajout d'événements 'blur' pour la validation de chaque champ
nameInput.addEventListener('blur', () => {
  validateField(nameInput, nameRegex, errorName, 'Veuillez entrer un nom valide (minimum 2 caractères, lettres et espaces uniquement).');
});
emailInput.addEventListener('blur', () => {
  validateField(emailInput, emailRegex, errorEmail, 'Veuillez entrer une adresse email valide.');
});
subjectInput.addEventListener('blur', () => {
  validateLength(subjectInput, 3, errorSubject, 'Le sujet doit comporter au moins 3 caractères.');
});
messageInput.addEventListener('blur', () => {
  validateLength(messageInput, 10, errorMessage, 'Le message doit comporter au moins 10 caractères.');
});