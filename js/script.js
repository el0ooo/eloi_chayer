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

// ----------------Modal vidéo----------------
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

cards.forEach(card => {
  const video = card.querySelector("video");

  if (!video) return;

  card.addEventListener("click", () => {
    const source = video.querySelector("source").src;
    const title = card.querySelector(".project-info h3")?.textContent || "";
    const description = card.querySelector(".project-info p")?.textContent || "";

    modalVideo.src = source;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add("active");
    modalVideo.play();
  });
});

if (closeModal && modal && modalVideo) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.src = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalVideo.pause();
      modalVideo.src = "";
    }
  });
}