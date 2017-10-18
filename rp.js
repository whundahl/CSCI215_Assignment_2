
var pictures = [];
pictures[0]='<img src="images\1.jpg" width=250>';
pictures[1]='<img src="images\2.jpg" width=250>';
pictures[2]='<img src="images\3.jpg" width=250>';
pictures[3]='<img src="images\4.jpg" width=250>';
pictures[4]='<img src="images\5.jpg" width=250>';
document.write("<p>" +pictures[0] + "</p>");
var i=0;

var random;
var spacing="<br>";

while (i<pictures.length){

    random=Math.floor(Math.random()*pictures.length);
    document.write("<p>"+pictures[random]+spacing+"</p>")
    i++
}