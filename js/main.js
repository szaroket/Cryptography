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
            for (i = 1; i < 26; i++) {
                $("#letter" + i).attr("id", "uppercase");
            }
            return false;
        }

        //change size of letters after clicked capslock
        if (this.id == 'caps') {
            capslock = (capslock === true) ? false : true;
            if (capslock == true) {
                for (i = 1; i < 26; i++) {
                    $("#letter" + i).attr("id", "uppercase");
                }
            } else if (capslock == false) {
                for (i = 1; i < 26; i++) {
                    $("#uppercase").attr("id", "letter" + i);
                }
            }
            return false;
        }

        //change letter to uppercase letters
        if (this.id == "uppercase") {
            letter = letter.toUpperCase();
        }

        //clear the textarea
        if (this.id == "clear") {
            $('textarea, input[type=text]').val('')
        }

        //write letter from clicked button
        textBefore.val(textBefore.val() + letter);   
    });
});