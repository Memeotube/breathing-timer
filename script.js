const prompts = ["Inhale", "Hold", "Exhale"];
const times = [4000, 7000, 8000]; // Durations for each phase in ms
let index = 0;

function startBreathing() {
  const circle = document.querySelector(".circle");
  const prompt = document.querySelector(".prompt");
  const countdown = document.querySelector(".countdown");

  function updateBreathing() {
    // Update text prompt
    prompt.textContent = prompts[index];

    // Update circle animation
    if (index === 0) {
      circle.style.transform = "scale(1.5)"; // Expand on "Inhale"
    } else if (index === 1) {
      circle.style.transform = "scale(1.5)"; // Hold at expanded size
    } else {
      circle.style.transform = "scale(1)"; // Contract on "Exhale"
    }

    // Start the countdown
    let timeLeft = times[index] / 1000; // Convert ms to seconds
    countdown.textContent = timeLeft; // Set initial countdown number

    const countdownInterval = setInterval(() => {
      timeLeft -= 1;
      countdown.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
      }
    }, 1000);

    // Set next phase
    setTimeout(() => {
      index = (index + 1) % prompts.length; // Cycle through prompts
      updateBreathing();
    }, times[index]);
  }

  updateBreathing(); // Start the breathing cycle
}

startBreathing();
