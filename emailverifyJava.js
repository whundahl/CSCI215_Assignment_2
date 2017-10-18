function checkEmail() {

    var email = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var message = "(:";
    var message2 = ":(";

    if (filter.test(email.value)) {

        return document.getElementById("output").innerHTML=message;
    }else
    {
        return document.getElementById("output").innerHTML=message2;
    }

}
