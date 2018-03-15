var textBefore = "",
    textAfter = "",
    capslock = false,
    shift = false,
    letter = "",
    i = 0,
    count = 0;

function clearTextarea() {
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
}

function writeSymbol(keyId) {

  //write letter from clicked button
  textBefore = document.getElementById("text1").value;
  letter = document.getElementById(keyId).textContent;
  if(capslock === true) {
    textAfter = textBefore + letter.toUpperCase();
  } else {
    textAfter = textBefore + letter;
  }
  document.getElementById("text1").value = textAfter;
}

function writeSpace() {
  //write space
  textBefore = document.getElementById("text1").value;
  letter = " ";
  textAfter = textBefore + letter;
  document.getElementById("text1").value = textAfter;
}

function writeEnter() {
  //write space
  textBefore = document.getElementById("text1").value;
  letter = "\n";
  textAfter = textBefore + letter;
  document.getElementById("text1").value = textAfter;
}

function writeTab() {
  //write space
  textBefore = document.getElementById("text1").value;
  letter = "\t";
  textAfter = textBefore + letter;
  document.getElementById("text1").value = textAfter;
}

function deleteSymbol() {
  //delete last sigh from text
  textBefore = document.getElementById("text1").value;
  count = textBefore.length;
  textAfter = textBefore.substr(0, count - 1);
  document.getElementById("text1").value = textAfter;
}

function turnOnCapsLock() {
  capslock = (capslock === true) ? false : true;
    if (capslock == true) {
        for (i = 1; i < 27; i++) {
          document.getElementById("letter" + i).style.textTransform = "uppercase";
        }
    } else if (capslock == false) {
        for (i = 1; i < 27; i++) {
          document.getElementById("letter" + i).style.textTransform = "lowercase";
        }
    }
    return false;
}
