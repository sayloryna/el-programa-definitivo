const username = "sayloryna";
const password = "18pamplÍnas";
const repeatPassword = "18pamplÍnas";
const userAge = "18";

const isValidLengthUsername = username.length >= 5;
const isValidLengthPassword = password.length >= 8;
const hasNumberInPassword = /[0-9]/.test(password);
const hasUpperLetterInPassword = /([A-Z]|[À-Ü])/.test(password);
const isValidPassword =
  isValidLengthPassword && hasNumberInPassword && hasUpperLetterInPassword;
const isSamePassword = password === repeatPassword;
const isAdult = userAge >= 18;

console.log(`El nombre de usuario es válido: ${isValidLengthUsername}`);
console.log(`La contraseña es válida: ${isValidPassword}`);
console.log(`La repetición de la contraseña es válida: ${isSamePassword}`);
console.log(`Es mayor de edad: ${isAdult}`);
