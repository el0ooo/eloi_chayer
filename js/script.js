// ----------------Code pour affiche la date----------------
const dateElement = document.getElementById("date");

const today = new Date();

const isEnglishPage = window.location.pathname.includes("en");

const locale = isEnglishPage ? "en-US" : "fr-FR";


const options = {
  day: "2-digit",
  month: "long",
  year: "numeric"
};

const formattedDate = today.toLocaleDateString(locale, options);

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

// ----------------Sélecteur de langue----------------
const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");

const languageLinks = languageDropdown.querySelectorAll("a");

/* ouvre / ferme */
languageBtn.addEventListener("click", () => {
  languageDropdown.classList.toggle("active");
});

/* change texte AVANT navigation */
languageLinks.forEach(link => {

  link.addEventListener("click", () => {

    const selectedLanguage = link.textContent;

    languageBtn.textContent = `${selectedLanguage} ▼`;

  });

});