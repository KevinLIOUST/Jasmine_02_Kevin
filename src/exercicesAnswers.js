
//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let newSentence = sentence.replace("e", " ");
  return newSentence;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let threeSentence = firstSentence.concat(secondSentence);
  return threeSentence;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let character = sentence.charAt(4);
  return character;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let newChaine = "";
  for (let i = 0; i < 9; i++) {
    newChaine += sentence.charAt(i);
  }
  return newChaine;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  return sentence.toUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  return sentence.toLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  return sentence.trim(" ");
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  return typeof sentence === "string";
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  return fileName.split(".").pop();
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  let nbSpaces = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) == " ") {
      nbSpaces++;
    }
  }
  return nbSpaces;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  return sentence.split('').reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "Afpa".
let searchInSentence = function (sentence) {
  return sentence.includes("Afpa");
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  let tabAbsoluteNumbers = [];
  for (let i = 0; i < numbersArray.length; i++) {
    tabAbsoluteNumbers[i] = Math.abs(numbersArray[i]);
  }
  return tabAbsoluteNumbers;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arrondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round(Math.PI * Math.pow(radius, 2).toFixed(2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return Math.floor(Math.hypot(a, b));
}
