document.addEventListener("DOMContentLoaded", () => {
  const flipCardBtn = document.getElementById("flip-card-btn");
  const backCardBtn = document.getElementById("back-card-btn");
  const businessCard = document.querySelector(".business-card");
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const messageBtn = document.getElementById("message-btn");
  const modal = document.getElementById("modal");
  const contactForm = document.getElementById("contact-form");

  // Flip Card Functionality
  flipCardBtn.addEventListener("click", () => {
    businessCard.classList.toggle("flipped");
  });
  backCardBtn.addEventListener("click", () => {
    businessCard.classList.toggle("flipped");
  });

  // Dark Mode Toggle
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Show Modal
  messageBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Hide Modal on Form Submit
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent!");
    modal.classList.add("hidden");
  });
});