// ----------------Code pour affiche la date----------------
const dateElement = document.getElementById("date");

const today = new Date();

const options = {
  day: "2-digit",
  month: "long",
  year: "numeric"
};

const formattedDate = today.toLocaleDateString("fr-FR", options);

dateElement.textContent = formattedDate;

// ----------------Menu burger----------------
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// ----------------Cartes de projets----------------
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  const video = card.querySelector('video');

  if (!video) return; 
  
  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});