var pw = [];
var charLen = prompt("How many characters would you like for your password?");
charLen = parseInt(charLen, 10);
if (charLen === NaN) {
  charLen = 8;
}
if (charLen > 128 || charLen < 8) {
  charLen = prompt(
    "Please enter a number of characters of between 8 and 128 characters"
  );
}
var charSpec = ["#", "?", "!", "@", "$", "%", "&"];
var charNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
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
// confirm the characters
var isCharNum = confirm("Would you like to include Numbers?");
var isCharSpec = confirm("Would you like to include Special Characters?");
var isCharUpp = confirm("Would you like to include Uppercase Characters?");
var isCharLow = confirm("Would you like to include Lowercase Characters?");

if (
  isCharNum === false ||
  isCharSpec === false ||
  isCharUpp === false ||
  isCharLow === false
) {
  var isCharNum = confirm("Would you like to include Numbers?");
  var isCharSpec = confirm("Would you like to include Special Characters?");
  var isCharUpp = confirm("Would you like to include Uppercase Characters?");
  var isCharLow = confirm("Would you like to include Lowercase Characters?");
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

    // And swap it with p.the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* defined function */
function createPassword() {
  // confirm that characters were included
  if (
    isCharNum === true &&
    isCharSpec === true &&
    isCharUpp === true &&
    isCharLow === true
  ) {
    for (i = 0; i < charLen; i++) {
      /* inject a special symbol in the string */
      if (isCharSpec === true && i === 0) {
        var randomSymNo = Math.floor(Math.random() * charSpec.length);
        pw.push(charSpec[randomSymNo]);
        /* inject an uppercase letter in the string */
      } else if (isCharUpp === true && i === 1) {
        var randomUppNo = Math.floor(Math.random() * charUpp.length);
        pw.push(charUpp[randomUppNo]);
        /* inject a number in the string */
      } else if (isCharNum === true && i === 2) {
        var randomNumNo = Math.floor(Math.random() * charNum.length);
        pw.push(charNum[randomNumNo]);
        /* inject a lowercase letter into the string */
      } else if (isCharLow === true) {
        var randomLowNo = Math.floor(Math.random() * charLow.length);
        pw.push(charLow[randomLowNo]);
      }
    }

    /* randomize array & convert into a string */
    pwShuffle = shuffle(pw);
    var newPass = "";
    for (i = 0; i < pwShuffle.length; i++) {
      newPass = newPass + pwShuffle[i];
    }
    pwBox.innerHTML = newPass;
    // reject the password
  } else {
    alert(
      "Unable to generate password. Password must contain 1 or more of the following: Uppercase Letter, Lowercase Letter, Number, and Special Character"
    );
  }
}

// change this pw into dynamic random pw
// document.write(pw);

// console log
console.log(charLen);
console.log(typeof charLen);
console.log(charSpec);
console.log(charNum);
console.log(charLow);
console.log(charUpp);
console.log(pw);
