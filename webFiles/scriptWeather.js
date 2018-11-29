
 // JavaScript to interpolate random images into a page.
var ic = 3; // Number of alternative images
var imgArr = new Array(ic); // Array to hold filenames
imgArr[0] = "img1.jpg";
imgArr[1] = "img2.jpg";
imgArr[2] = "img4.jpg";

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
