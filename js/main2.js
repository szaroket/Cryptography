function chooseCode(){
  var textBefore = document.getElementById("text1").value,
      capslock = false,
      shift = false,
      i = 0;


}

function keyAction(keyId){
  var textBefore = document.getElementById("text1").value,
      capslock = false,
      shift = false,
      i = 0,
      d = "",
      letter = "",
      count = 0,
      textAfter = "";

  if(keyId === "return"){
    letter = '\n';
  } else if (keyId === "tab") {
    letter = '\t';
  } else if (keyId === "delete") {
    //delete last sigh from text
    count = textBefore.length;
    textAfter = textBefore.substr(0, count - 1);
    document.getElementById("text1").value = textAfter;
    return false;
  } else if (keyId === "shiftL" || keyId === "shiftR") {
    //change size one letter after clicked shift
    //and special sighs turn on
    shift = (shift === true) ? false : true;
    if (shift === true) {
      for (i = 1; i < 27; i++) {
        document.getElementById("letter" + i).setAttribute("id", "uppercase");
      }
      changeValue();
    } else if (shift === false) {
      for (i = 1; i < 27; i++) {
        document.getElementById("uppercase").setAttribute("id", "letter" + i);
      }
      changeValue();
    }
    return false;
  } else if (shift === true) {
    //after write one uppercase letter
    //write small letters
    if (keyId === "uppercase") {
      //change letter to uppercase letters
      letter = letter.toUpperCase();
    }
    for (i = 1; i < 27; i++) {
      document.getElementById("uppercase").setAttribute("id", "letter" + i);
    }
    changeValue();
    shift = false;
  } else if (keyId === "caps") {
    capslock = (capslock === true) ? false : true;
    if (capslock == true) {
        for (i = 1; i < 27; i++) {
          document.getElementById("letter" + i).setAttribute("id", "uppercase");
        }
    } else if (capslock == false) {
        for (i = 1; i < 27; i++) {
          document.getElementById("uppercase").setAttribute("id", "letter" + i);
        }
    }
    return false;
  } else {
    letter = document.getElementById(keyId).textContent;
    if (keyId === "uppercase") {
      letter = letter.toUpperCase();
    }
  }

  //write letter from clicked button
  textAfter = textBefore + letter;

  document.getElementById("text1").value = textAfter;
}

function eraseText(){
  document.getElementById("text1").value = "";
}
