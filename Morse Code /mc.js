
function translate2() {
    var theletter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,?:-!";


    var morseObj = [".-","-...","-.-.","-..",".","..-.",
        "--.","....","..",".---","-.-",".-..",
        "--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-",
        "-.--","--..",".-","-...","-.-.","-..",
        ".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.",
        "--.-",".-.","...","-","..-","...-",
        ".--","-..-","-.--","--.."," ",".-.-.-",
        "--..--","..--..","---...","-....-","!"];

    var theSent = document.getElementById("Sentence").value;


    var userInput = theSent;
    var output = "";
    for (var count = 0; count < userInput.length; count++) {
        var theChar = userInput.charAt(count);
        for (var i = 0; i < theletter.length; i++) {
            if (theChar == theletter.charAt(i)) {
                output += morseObj[i] ;
                break;
            }
        }

    }

    document.getElementById("output").innerHTML = output + " " + theSent ;


}