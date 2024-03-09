const userName = "sayloryna";
const password = "18Pamplinas";
const repeatPassword = "18Pamplinas";
const userAge = 18;

const isLargerThanFive = userName.length >= 5;
const isLargerThanEight = password.length >= 8;
const hasNumber = password.match(/[0-9]/) !== null;
const hasUpperLetter = password.match(/[A-Z]/) !== null;
const passwordIsValid = isLargerThanEight && hasNumber && hasUpperLetter;
const isIdem = password === repeatPassword;
const isAdult = userAge >= 18;

console.log(`El nombre de usuario es válido: ${isLargerThanFive}`);
console.log(`La contraseña es válida: ${passwordIsValid}`);
console.log(`La repetición de la contraseña es válida: ${isIdem}`);
console.log(`Es mayor de edad: ${isAdult}`);
