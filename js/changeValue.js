function changeValue() {
    var j;

    for (j = 1; j < 22; j++) {

        var change = document.getElementById("special" + j);

        if (change.innerHTML == "`") {
            change.innerHTML = "~";
        } else if (change.innerHTML == "~") {
            change.innerHTML = "`";
        } else if (change.innerHTML == "1") {
            change.innerHTML = "!";
        } else if (change.innerHTML == "!") {
            change.innerHTML = "1";
        } else if (change.innerHTML == "2") {
            change.innerHTML = "@";
        } else if (change.innerHTML == "@") {
            change.innerHTML = "2";
        } else if (change.innerHTML == "3") {
            change.innerHTML = "#";
        } else if (change.innerHTML == "#") {
            change.innerHTML = "3";
        } else if (change.innerHTML == "4") {
            change.innerHTML = "$";
        } else if (change.innerHTML == "$") {
            change.innerHTML = "4";
        } else if (change.innerHTML == "5") {
            change.innerHTML = "%";
        } else if (change.innerHTML == "%") {
            change.innerHTML = "5";
        } else if (change.innerHTML == "6") {
            change.innerHTML = "^";
        } else if (change.innerHTML == "^") {
            change.innerHTML = "6";
        } else if (change.innerHTML == "7") {
            change.innerHTML = "&";
        } else if (change.innerHTML == "&amp;") {
            change.innerHTML = "7";
        } else if (change.innerHTML == "8") {
            change.innerHTML = "*";
        } else if (change.innerHTML == "*") {
            change.innerHTML = "8";
        } else if (change.innerHTML == "9") {
            change.innerHTML = "(";
        } else if (change.innerHTML == "(") {
            change.innerHTML = "9";
        } else if (change.innerHTML == "0") {
            change.innerHTML = ")";
        } else if (change.innerHTML == ")") {
            change.innerHTML = "0";
        } else if (change.innerHTML == "-") {
            change.innerHTML = "_";
        } else if (change.innerHTML == "_") {
            change.innerHTML = "-";
        } else if (change.innerHTML == "=") {
            change.innerHTML = "+";
        } else if (change.innerHTML == "+") {
            change.innerHTML = "=";
        } else if (change.innerHTML == "[") {
            change.innerHTML = "{";
        } else if (change.innerHTML == "{") {
            change.innerHTML = "[";
        } else if (change.innerHTML == "]") {
            change.innerHTML = "}";
        } else if (change.innerHTML == "}") {
            change.innerHTML = "]";
        } else if (change.innerHTML == "\\") {
            change.innerHTML = "|";
        } else if (change.innerHTML == "|") {
            change.innerHTML = "\\";
        } else if (change.innerHTML == ";") {
            change.innerHTML = ":";
        } else if (change.innerHTML == ":") {
            change.innerHTML = ";";
        } else if (change.innerHTML == "'") {
            change.innerHTML = '"';
        } else if (change.innerHTML == '"') {
            change.innerHTML = "'";
        } else if (change.innerHTML == ",") {
            change.innerHTML = "<";
        } else if (change.innerHTML == "&lt;") {
            change.innerHTML = ",";
        } else if (change.innerHTML == ".") {
            change.innerHTML = ">";
        } else if (change.innerHTML == "&gt;") {
            change.innerHTML = ".";
        } else if (change.innerHTML == "/") {
            change.innerHTML = "?";
        } else if (change.innerHTML == "?") {
            change.innerHTML = "/";
        } 
    }
}