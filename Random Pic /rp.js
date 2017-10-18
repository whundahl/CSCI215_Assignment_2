






var ImageGall =["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg" ];



function displayImage(){

    var rand = Math.floor(Math.random() * (ImageGall.length));

    document.getElementById("RandomImages").src = ImageGall[rand];

}

window.onload = displayImage;