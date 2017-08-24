// JavaScript source code
$(document).ready(function () {
    $('button').on('click',function () {
        var letter = $(this).text();
        var capslock = false;

        if (capslock = false) {
            //write small letter from clicked button
            $('textarea')[0].value += letter;
        } else {
            //write big letter from clicked button
            $('textarea')[0].value += letter.toUpperCase();
        }
        
        //clear the textarea
        if (this.id == "clear") {
            $('textarea')[0].value = null;
        }
        if (this.id == "caps") {
            capslock = true;
            $('textarea')[0].value = 0;
            return false;
        }
    });

    //after page refresh - textarea is empty
    $('textarea, input[type=text]').val('')
});