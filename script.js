// ================================
// Part 2: JavaScript Functions
// ================================

// Global variable (accessible anywhere)
let animationState = false;

/**
 * Toggle animation on the box.
 * Uses parameters + return values.
 */
function toggleBoxAnimation(element, shouldAnimate) {
  if (shouldAnimate) {
    element.classList.add("move");
    return "Animation started!";
  } else {
    element.classList.remove("move");
    return "Animation reset!";
  }
}

// Helper function to log results
function logMessage(message) {
  console.log("LOG:", message);
}

// ================================
// Part 3: Combining CSS + JavaScript
// ================================
const animatedBox = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBoxBtn");
const resetBtn = document.getElementById("resetBoxBtn");

// Start animation when button is clicked
animateBtn.addEventListener("click", function () {
  animationState = true; // update global state
  let result = toggleBoxAnimation(animatedBox, animationState);
  logMessage(result);
});

// Reset animation when reset button is clicked
resetBtn.addEventListener("click", function () {
  animationState = false; // update global state
  let result = toggleBoxAnimation(animatedBox, animationState);
  logMessage(result);
});
