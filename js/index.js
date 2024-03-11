const userName = "sayloryna";
const password = "18Íamplinas";
const repeatPassword = "18amplinas";
const userAge = "18";

const isLargerThanFive = userName.length >= 5;
const isLargerThanEight = password.length >= 8;
const hasNumber = /[0-9]/.test(password);
const hasUpperLetter = /([A-Z]|[À-Ü])/.test(password);
const passwordIsValid = isLargerThanEight && hasNumber && hasUpperLetter;
const isIdem = password === repeatPassword;
const isAdult = userAge >= 18;

console.log(`El nombre de usuario es válido: ${isLargerThanFive}`);
console.log(`La contraseña es válida: ${passwordIsValid}`);
console.log(`La repetición de la contraseña es válida: ${isIdem}`);
console.log(`Es mayor de edad: ${isAdult}`);
