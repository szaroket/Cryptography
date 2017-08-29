function solitaireCipher() {
    var alphabetUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var str = document.getElementById("text1").value;
    var newStr = null;
    var k;
    var output = '';
    var z = 0;

    for (k = 0; k < (str.length); k++) {
        var c = str[k];
        

        if (alphabetUppercase.indexOf(c) != -1) {
            var key = (parseInt(alphabetUppercase.indexOf(c)) + z + 1) % 26;
            newStr = alphabetUppercase[key];
        } else if (alphabetLowercase.indexOf(c) != -1) {
            var key = (parseInt(alphabetLowercase.indexOf(c)) + z + 1) % 26;
            newStr = alphabetLowercase[key];
        } else {
            newStr = c;
            z -= 1;
        }    
        
        output += newStr;
        z++;
    }

    document.getElementById("text2").innerHTML = output; 
}