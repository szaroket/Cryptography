//Caesar Cipher
function caesarCipher() {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z', 'a', 'b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z', '0','1','2','3','4','5','6','7','8','9'];
    var marks = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', "'", '"', '\\', '|','<','>','?',',','.','/'];
    var shift = parseInt(prompt('Enter the value of shift'));
    var str = document.getElementById("text1").value;
    var newStr = null;
    var k;
    var output = '';
    var sign;

    for (k = 0; k < (str.length); k++) {
        var c = str[k];

        if (shift < 62) {
            if (alphabet.indexOf(c) != -1) {
                var sign = parseInt(alphabet.indexOf(c));
                var z = sign + shift;
                newStr = alphabet[z];
            } else {
                newStr = c;
            }
            
        }

        output += newStr;
    }

    document.getElementById("text2").innerHTML = output; 
}