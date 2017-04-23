function pageScroll() {
    window.scrollTo(0,1500);
    //setTimeout(pageScroll,1);
}


////////////////////////////
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

/////////////////////////////

var slideIndex2 = 1;

showDivs2(slideIndex2);

function plusDivs2(n) {
	showDivs2(slideIndex2 += n);
}

function currentDiv2(n) {
	showDivs2(slideIndex2 = n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex2-1].style.display = "block"; 
}
