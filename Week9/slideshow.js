window.onload = function () {
    document.querySelector('h1').innerHTML = "Page loaded!";
    var image = 0;
    var images = [
        "TonySoprano.jpg",
        "Chris.jpg",
        "PaulieWalnuts.jpg",
        "Silvio.jpg",
    ];
    var btn = document.querySelector('#slideshow-button');

    function changeImage(){
        btn.removeEventListener('click', changeImage);
        image++;
        document.querySelector('#site-image').src = `images/${images[image]}`;

        if (image >= images.length){
            image = 0;
            document.querySelector('#site-image').src = `images/${images[image]}`;
        }
        setTimeout(changeImage, 2000);
    }

    btn.addEventListener('click', 
        changeImage
    );
}
