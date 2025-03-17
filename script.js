function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//download cv
function downloadCV() {
  const link = document.createElement('a');
  link.href = './assets/Ganesh_CV.pdf';
  link.download = "Ganesh_CV.pdf"; // Optional: You can specify a custom filename here
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

//text slider fn
document.addEventListener("DOMContentLoaded", () => {
  const roles = ["Nodejs Developer", "Web Developer", "Tech Enthusiast"];
  const typedText = document.getElementById("typed-text");
  const typingSpeed = 100; // Typing speed in ms
  const backspaceSpeed = 50; // Backspacing speed in ms
  const delayBetweenRoles = 1000; // Delay before typing the next role
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[currentRoleIndex];
    if (!isDeleting) {
      // Typing the text
      typedText.textContent = currentRole.slice(0, currentCharIndex + 1);
      currentCharIndex++;

      if (currentCharIndex === currentRole.length) {
        // If the whole role is typed, pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenRoles);
        return;
      }
    } else {
      // Backspacing the text
      typedText.textContent = currentRole.slice(0, currentCharIndex - 1);
      currentCharIndex--;

      if (currentCharIndex === 0) {
        // If the role is fully deleted, move to the next role
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop through roles
      }
    }

    // Adjust speed based on typing or deleting
    const speed = isDeleting ? backspaceSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
  }

  // Start the typing effect
  typeEffect();
});