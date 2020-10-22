// parallax fish
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var fish02 = document.getElementsByClassName("fish02")[0];
fish02.style.left = "30px"
fish02.style.top = "130px"
fish02.style.display = "inline-block"

var fish03 = document.getElementsByClassName("fish03")[0];
fish03.style.left = "350px"
fish03.style.top = "100px"

var fish04 = document.getElementsByClassName("fish04")[0];
fish04.style.left = "150px"
fish04.style.top = "190px"

var fishNemo = document.getElementsByClassName("fishNemo")[0];
fishNemo.style.left = "450px"
fishNemo.style.top = "200px"

window.addEventListener('resize', function(){
    var pixel = document.body.clientWidth;
    
    if (pixel < 991) {
        $('.fishNemo').css({
            display: 'none',
        })
    }else{
        $('.fishNemo').css({
            display: 'inline-block',
        })
    }
});
//蝦蝦
var diaryCenters = document.getElementsByClassName("diaryCenter")
for (let i = 0; i < diaryCenters.length; i++){
    diaryCenters[i].addEventListener("mouseenter",function(){
        diaryCenters[i].classList.add("animate__animated","animate__shakeX","animate__slow");
    })
}

