var pw = [];
var charLen = prompt("How many characters would you like for your password?");
// charLen = parseInt(charLen, 10);
var charSpec = [
  "(",
  "[",
  "#",
  "?",
  "!",
  "@",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "]",
  ")"
];
var charNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var charUpp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// var isCharSpec = true;
// var isCharNum = true;

var charChoice = [];

var hasCharNum = confirm("Numbers?");
var hasCharSpec = confirm("Special Characters?");
var hasCharUpp = confirm("Uppercase Characters?");
var hasCharLow = confirm("Lowercase Characters?");

if (hasCharSpec) {
  charChoice = charChoice.concat(charSpec);
}
if (hasCharNum) {
  charChoice = charChoice.concat(charNum);
}
if (hasCharUpp) {
  charChoice = charChoice.concat(charUpp);
}
if (hasCharLow) {
  charChoice = charChoice.concat(charLow);
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* defined function */
function createPassword() {
  for (i = 0; i < charLen; i++) {
    var randomSymNo = Math.floor(Math.random() * charChoice.length);

    /* inject a symbol in the string */
    pw.push(charChoice[randomSymNo]);
    console.log(pw);
  }
}
/* randomize array & convert into a string */
pwShuffle = shuffle(pw);
document.getElementById("pwBox").innerHTML = pw;
var newPass = "";
for (i = 0; i < pwShuffle.length; i++) {
  newPass = newPass + pwShuffle[i];
}
pwBox.innerHTML = newPass;

/* first event */
// change this pw into a dynamic random pw
document.write(pw);

// console log
console.log(charLen);
console.log(typeof charLen);
console.log(charSpec);
console.log(charNum);
console.log(charLow);
console.log(charUpp);

// /* inject a uppercase letter into the string */
// var randomNo = Math.floor(Math.random() * charChoice.length);
// pw.push(charUpp[randomCharUpp]);
