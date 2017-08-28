//Caesar Cipher
function caesarCipher() {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];
    var shift = parseInt(prompt('Enter the value of shift'));
    var str = document.getElementById("text1").value;
    var newStr = null;
    var k;
    var output = '';

    for (k = 0; k < (str.length); k++) {
        var c = str[k];

        if (shift < 25) {
            var sign = parseInt(alphabet.indexOf(c));
            var z = sign + shift;
            newStr = alphabet[z];
        }

        output += newStr;
    }

    document.getElementById("text2").innerHTML = output; 
}