// MENU
function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

// SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// ALERT
function showAlert() {
  alert("Hubungi saya via WhatsApp 😎");
}

// PARTICLE ULTRA PREMIUM
tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: { value: 60 },
    color: { value: ["#00ffff", "#a855f7", "#ffffff"] },
    links: {
      enable: true,
      distance: 150,
      opacity: 0.3
    },
    move: {
      enable: true,
      speed: 0.6
    },
    size: { value: { min: 1, max: 3 } },
    opacity: { value: 0.4 }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" }
    }
  }
});

/*NAV PROJEC */
function toggleMegaMenu() {
  document.getElementById("megaMenu").classList.toggle("show");
}

// Tutup kalau klik luar
window.onclick = function(e) {
  if (!e.target.classList.contains('mega-btn')) {
    document.getElementById("megaMenu").classList.remove("show");
  }
};

window.addEventListener("scroll", () => {
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  const trigger = window.innerHeight * 0.8;

  if (aboutText.getBoundingClientRect().top < trigger) {
    aboutText.classList.add("show");
    aboutImage.classList.add("show");
  }
});

// scroll back
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

let queue = localStorage.getItem("queue") || 0;

document.getElementById("queueNumber").innerText = queue;

function addQueue() {
  queue++;
  localStorage.setItem("queue", queue);
  document.getElementById("queueNumber").innerText = queue;
}

// ANIMATION ON SCROLL
const reveal = document.querySelector(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  if (reveal.getBoundingClientRect().top < trigger) {
    reveal.classList.add("show");
  }
});

const searchInput = document.getElementById("pdSearch");
const cards = document.querySelectorAll(".pd-card");

/* FILTER */
function filterProjects(type) {
  cards.forEach(card => {
    if (type === "all") {
      card.classList.remove("hide");
    } else {
      if (card.classList.contains(type)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    }
  });
}

/* SEARCH */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".steam-card");
  const search = document.getElementById("gameSearch");

  if (!cards || !search) return;

  function filterGame(type) {
    cards.forEach(card => {
      if (type === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.classList.contains(type)
          ? "block"
          : "none";
      }
    });
  }

  search.addEventListener("input", function () {
    const val = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      card.style.display = text.includes(val) ? "block" : "none";
    });
  });

  window.filterGame = filterGame;

});