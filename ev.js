
function checkEmail() {

    var email = document.getElementById("email");

        var good = "(:";

        var notgood = ":(";


    //Regular expression to sort good emails from bad
    var option = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (option.test(email.value)) {

        return document.getElementById("output").innerHTML=good;

    }

    else {
        return document.getElementById("output").innerHTML=notgood;
    }

}


