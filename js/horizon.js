var titles = document.querySelectorAll(".section__title");
TweenLite.defaultEase = Linear.easeNone;
$(function () { 
  
  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-25%"}, "label1")
  .to("#watch", 1,   {color: "#073977",backgroundColor:"#fefefe"}, "label1")
  .to("#goggles", 1,   {color: "#fefefe",backgroundColor:"transparent"}, "label1")
  .from(titles[1], 0.5, {opacity:0}, "label1+=0.5")
  .to("#js-slideContainer", 1,   {x: "-50%"}, "label2")
  .to("#glove", 1,   {color: "#073977",backgroundColor:"#fefefe"}, "label2")
  .to("#watch", 1,   {color: "#fefefe",backgroundColor:"transparent"}, "label2")
  .from(titles[2], 0.5, {opacity:0}, "label2+=0.5")
  .to("#js-slideContainer", 1,   {x: "-75%"}, "label3")
  .to("#fins", 1,   {color: "#073977",backgroundColor:"#fefefe"}, "label3")
  .to("#glove", 1,   {color: "#fefefe",backgroundColor:"transparent"}, "label3")
  .from(titles[3], 0.5, {opacity:0}, "label3+=0.5")
 


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
  
});