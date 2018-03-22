'use strict';

var timer;
var timeRemaining = 60 * 1000;
var score = 0;
var playButton = document.getElementById('button');
var scoreContainer = document.getElementById('score');
var holes = document.querySelectorAll('.hole');
var moles = document.querySelectorAll('.mole');

// Click on start button
playButton.addEventListener('click', function() {
  // Start timer
  setTimeout(function() {
    // When the timer runs out..
    for (var i=0; i<holes.length; i++) {
      holes[i].classList.remove('active');
    }
    // Show the score
    alert("Well done, you whacked " + score + " moles!");
  }, timeRemaining);

  var showMole = function() {
    // Pick a random hole
    var holeIndex = Math.floor(Math.random() * holes.length);

    // Hide all active holes
    for (var i=0; i<holes.length; i++) {
      holes[i].classList.remove('active');
    }

    // Show the mole at the hole
    setTimeout(function() {
      holes[holeIndex].classList.add('active');
      setTimeout(function() {
        showMole();
      }, 500);
    }, Math.ceil(Math.random() * 5000));
  }

  showMole();
});

for (var i =0; i < moles.length; i++) {
  moles[i].addEventListener('click', function() {
    score = score + 1;
    scoreContainer.innerHTML = score;
  });
}
