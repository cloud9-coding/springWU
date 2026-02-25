

var text = $("#some-word"),
    // assuming lettering() has already been called on it
    numLetters = text.find("span").length; // how many letters?

function randomBlurize() {

  text
    // pick random letter
    .find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
    .animate({
      'textShadowBlur': Math.floor(Math.random()*25)+4,
      'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'
    });

// Call itself recurssively
setTimeout(randomBlurize, 100);

} // Call once
randomBlurize();



FIXXXXXX