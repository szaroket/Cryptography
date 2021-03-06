var textBefore = "",
    textAfter = "",
    capslock = false,
    shift = false,
    letter = "",
    i = 0,
    count = 0,
    cipher = '';

function clearTextarea() {
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
}

function writeSymbol(keyId) {
  //write letter from clicked button
  textBefore = document.getElementById("text1").value;
  letter = document.getElementById(keyId).textContent;
  if(capslock === true || shift === true) {
    textAfter = textBefore + letter.toUpperCase();
  } else {
    textAfter = textBefore + letter;
  }

  if(shift === true) {
    turnOffShift();
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

function turnOnShift() {
  shift = (shift === true) ? false : true;
  if (shift == true) {
      for (i = 1; i < 27; i++) {
        document.getElementById("letter" + i).style.textTransform = "uppercase";
      }
      changeValue();
  } else if (shift == false) {
      for (i = 1; i < 27; i++) {
        document.getElementById("letter" + i).style.textTransform = "lowercase";
      }
      changeValue();
  }
  return false;
}

//after write one uppercase letter
//write small letters
function turnOffShift() {
  for (i = 1; i < 27; i++) {
    document.getElementById("letter" + i).style.textTransform = "lowercase";
  }
  changeValue();
  shift = false;
}

function checkCipher() {
  cipher = document.querySelector('input[name="cipher"]:checked').value;
  if (cipher === "caeser") {
    caesarCipher();
    return false;
  } else if (cipher === "solitaire") {
    solitaireCipher();
    return false;
  } else if (cipher === "bacon") {
    baconCipher();
    return false;
  }
}
