// JavaScript source code
$(document).ready(function () {
    var textBefore = $('#text1');
    var capslock = false;
    var shift = false;
    var i;

    //after page refresh - textarea is empty
    $('#text1, input[type=text]').val('')
    
    $('button').on('click', function () {

        var letter = $(this).text();
        
        if (this.id == "return") {
            letter = '\n';
        }
        if (this.id == "tab") {
            letter = '\t';
        }

        //delete last sigh from text
        if (this.id == 'delete') {
            var count = $('#text1').val().length;

            textBefore.val($('#text1').val().substr(0, count - 1));
            return false;
        }

        //change size one letter after clicked shift
        //and special sighs turn on
        if (this.id == 'shiftL' || this.id == 'shiftR') {
            shift = (shift === true) ? false : true;
            if (shift == true) {
                for (i = 1; i < 27; i++) {
                    $("#letter" + i).attr("id", "uppercase");
                }
                changeValue();
            } else if (shift == false) {
                for (i = 1; i < 27; i++) {
                    $("#uppercase").attr("id", "letter" + i);
                }
                changeValue();
            }
            return false;
        }

        //after write one uppercase letter
        //write small letters
        if (shift == true) {
            //change letter to uppercase letters
            if (this.id == "uppercase") {
                letter = letter.toUpperCase();
            }
            for (i = 1; i < 27; i++) {
                $("#uppercase").attr("id", "letter" + i);
            }
            changeValue();
            shift = false;
        }

        //change size of letters after clicked capslock
        if (this.id == 'caps') {
            capslock = (capslock === true) ? false : true;
            if (capslock == true) {
                for (i = 1; i < 27; i++) {
                    $("#letter" + i).attr("id", "uppercase");
                }
            } else if (capslock == false) {
                for (i = 1; i < 27; i++) {
                    $("#uppercase").attr("id", "letter" + i);
                }
            }
            return false;
        }

        if (this.id == "encoding") {
            return false;
        }

        //change letter to uppercase letters
        if (this.id == "uppercase") {
            letter = letter.toUpperCase();
        }

        //clear the textarea
        if (this.id == "clear") {
            $('#text1, input[type=text]').val('')
            return false;
        }

        //write letter from clicked button
        textBefore.val(textBefore.val() + letter);   
    });

    $('#caeser').click(function () {
        $('button').on('click', function () {
            if (this.id == "encoding") {
                caesarCipher();
                return false;
            }
        });
    });

    $('#bacon').click(function () {
        $('button').on('click', function () {
            if (this.id == "encoding") {
                baconCipher();
                return false;
            }
        });
    });

    $('#solitaire').click(function () {
        $('button').on('click', function () {
            if (this.id == "encoding") {
                solitaireCipher();
                return false;
            }
        });
    });
});