// JavaScript source code
$(document).ready(function () {
    //after page refresh - textarea is empty
    $('#text1, input[type=text]').val('')
    var textBefore = $('#text1');
    var capslock = false;
    var shift = false;
    var i;

    $('button').click(function () {
        var letter = $(this).text();
        
        if (this.id == "return") {
            letter = '\n';
        }
        if (this.id == "tab") {
            letter = '\t';
        }
        if (this.id == 'shiftL' || this.id == 'shiftR') {
            for (i = 1; i < 26; i++) {
                $("#letter" + i).attr("id", "uppercase");
            }
            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }
        if (this.id == 'caps') {
            for (i = 1; i < 26; i++) {
                $("#letter" + i).attr("id", "uppercase");
            }
            capslock = true;
            return false;
        }
        if (this.id == "uppercase") {
            letter = letter.toUpperCase();
        }

        //write letter from clicked button
        textBefore[0].value += letter;
        
        //clear the textarea
        if (this.id == "clear") {
            $('textarea, input[type=text]').val('')
        }
    });
});