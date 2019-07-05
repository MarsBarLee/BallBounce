let ball = document.getElementById('float-circle');

window.addEventListener('keydown', function(event){
    ball.classList.add('jump'); // adds jumps class to animate frog moving up
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // plays the HTML audio tag with matched data-key
    audio.play(); //cNote.play()
    audio.currentTime = 0; //reseting the audio if user presses key again before audio completes
})

// window.addEventListener('keyup', function(event){
//   ball.style.bottom = '50px';  
// })

// Old code
// let up = function() {
//     ball.style.bottom = '250px';
// };
// let down = function() {
//   ball.style.bottom = '50px';  
// };

// document.onkeydown = up;
// document.onkeyup = down;

/*
document.querySelectorAll // retrieves static nodelist
document.getElementById/Class // retrieves live nodelist
document.querySelector // returns only first match
document.querySelectorAll // returns all matches
*/