var pw = [];
var charLen = prompt("How many characters would you like for your password?");
charLen = parseInt(charLen, 10);
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
var charLet = [
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
  "Z",
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
var isCharSpec = true;
var isCharNum = true;

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
    if (isCharSpec === true && i === 0) {
      var randomSymNo = Math.floor(Math.random() * charSpec.length);
      /* inject a symbol in the string */
      pw.push(charSpec[randomSymNo]);
    } else {
      /* inject a uppercase letter into the string */
      var randomNo = Math.floor(Math.random() * charLet.length);
      pw.push(charLet[randomNo]);
    }
  }
  /* randomize array & convert into a string */
  pwShuffle = shuffle(pw);
  var newPass = "";
  for (i = 0; i < pwShuffle.length; i++) {
    newPass = newPass + pwShuffle[i];
  }
  pwBox.innerHTML = newPass;
}

/* first event */
// change this pw into a dynamic random pw
//document.write(pw);
// defined function
// function showPrompt() {
// for (i = 0; i < charLength; i++) {
// var randomNum;
// }
// charSpec = confirm("Would you like to use special characters?");
// charNum = confirm("Would you like to use any numeric characters?");
// charLow = confirm("Would you like to use lowercase characters?");
// charUpp = confirm("Would you like to use uppercase characters?");
// pwBox.innerHTML = pw;
// }

// genBtn.addEventListener("click", showAlert);

// number of characters for the password (between 8 and 128)
// if (charLength < 8) {
//   alert("password must be longer");
// }
// special characters
// numeric characters
// lowercase characters
// uppercase characters

// change this pw into dynamic random pw
// document.write(pw);

// console log
console.log(charLen);
console.log(typeof charLen);
console.log(charSpec);
console.log(charNum);
console.log(charLet);
console.log(pw);
