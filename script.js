let slideIndex =1;

function openLightbox() {
    document.getElementById("lightbox").style.display="block";
    showSlide(slideIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display="none";
}

function changeSlide(n) {
    showSlide(slideIndex +=n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slides");

if(n>slides.length) {
    slideIndex=1
} 
if(n<1){
    slideIndex=slides.length
}

for(let i=0;i<slides.length;i++)
{
    slides[i].style.display="none";
}

slides[slideIndex-1].style.display="block";
}

//BONUS: FILTER FUNCTION

function filterImages(category){
    const images=document.getElementsByClassName("image");
    for(let i=0;i<images.length;i++)
    {
        if(category==='all' || images[i].classList.contains(category))
        {
            images[i].style.display="block";
        }
        else{
            images[i].style.display="none";
        }
    }
}