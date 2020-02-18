var i = 0;
var images = [];
var time = 8000;

images[0] = '../img/resized_istock.png';
images[1] = '../img/resized_istock_2.png';

function slideImage(){
    document.slider.src = images[i];
    if ( i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("slideImage()", time);
}

window.onload = slideImage;