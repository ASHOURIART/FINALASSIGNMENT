pushInStart();
// create an AudioContext object
const audioContext = new AudioContext();

// create an array of frequencies for the available tones
const toneFrequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];

// create a function to generate the tone
function playTone(frequency) {
  const oscillator = audioContext.createOscillator();

  oscillator.frequency.value = frequency;

  oscillator.connect(audioContext.destination);

  oscillator.start();

  // stop the oscillator after 6 second
  setTimeout(() => {
    oscillator.stop();
  }, 1000);
}

// find the image element
const image = document.getElementById('fullflower');
const image1 = document.getElementById('sokoot');
const image2 = document.getElementById('Ants');
const image3 = document.getElementById('sea');


// add a mouseover event listener to the image
image.addEventListener('mouseover', () => {
  // generate a random tone frequency from the array
  const randomFrequency = toneFrequencies[Math.floor(Math.random() * toneFrequencies.length)];

  
  // play the tone
  playTone(randomFrequency);
});
// add a mouseout event listener to the image
image.addEventListener('mouseout', () => {
  // stop the oscillator
  oscillator.stop();
});


// ------------------------
image1.addEventListener('mouseover', () => {
    // generate a random tone frequency from the array
    const randomFrequency = toneFrequencies[Math.floor(Math.random() * toneFrequencies.length)];

 // play the tone
 playTone(randomFrequency);
});

// add a mouseout event listener to the image
image1.addEventListener('mouseout', () => {
  // stop the oscillator
  oscillator.stop();
});
// ----------------


// add a mouseover event listener to the image
image2.addEventListener('mouseover', () => {
  // generate a random tone frequency from the array
  const randomFrequency = toneFrequencies[Math.floor(Math.random() * toneFrequencies.length)];

  
  // play the tone
  playTone(randomFrequency);
});



// add a mouseover event listener to the image
image3.addEventListener('mouseover', () => {
  // generate a random tone frequency from the array
  const randomFrequency = toneFrequencies[Math.floor(Math.random() * toneFrequencies.length)];

  
  // play the tone
  playTone(randomFrequency);
});