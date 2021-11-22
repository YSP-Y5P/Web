var SlideIndex = 0;
PerlihatkanSlide();

function PerlihatkanSlide(){
    var i;
    var SlideCLass = document.getElementsByClassName("BackgroundSlide");

    for(i=0;i < SlideCLass.length;i++){
        SlideCLass[i].style.display = "none";
    }

    SlideIndex++;
    if(SlideIndex > SlideCLass.length){
        SlideIndex = 1;
    }
    SlideCLass[SlideIndex - 1].style.display = "block";
    setTimeout(PerlihatkanSlide,3000);
}