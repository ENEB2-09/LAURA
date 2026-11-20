// Fecha de inicio: 4 de septiembre de 2026 a las 7:59 p. m.
const startDate = new Date(2026, 8, 4, 19, 59, 0);

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  message: document.getElementById("counter-message")
};

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  if (difference < 0) {
    const remaining = Math.abs(difference);
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    elements.days.textContent = days;
    elements.hours.textContent = String(hours).padStart(2, "0");
    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
    elements.message.textContent = "La cuenta regresiva para nuestro comienzo 💖";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elements.days.textContent = days;
  elements.hours.textContent = String(hours).padStart(2, "0");
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
  elements.message.textContent = "Y contando cada segundo contigo, mi amor ❤️";
}

updateCounter();
setInterval(updateCounter, 1000);

// Respuestas interactivas
document.querySelectorAll(".answer-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("answer").textContent = button.dataset.answer;
    makeHearts(8);
  });
});

// Sorpresa
const surprises = [
  "Eres mi lugar favorito en todo el universo. 🌙💖",
  "Si pudiera elegir otra vez, te elegiría a ti, mi princesa. 💘",
  "Te debo un abrazo gigante y muchos besitos. 🤗😘",
  "La mejor parte de mis días siempre tiene algo de ti. ✨"
];

document.getElementById("surprise-button").addEventListener("click", () => {
  const message = surprises[Math.floor(Math.random() * surprises.length)];
  document.getElementById("surprise-message").textContent = message;
  makeHearts(18);
});

// Corazones flotantes
function makeHearts(amount = 1) {
  const symbols = ["💖", "💕", "💗", "❤️", "✨"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${16 + Math.random() * 20}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
  }
}

setInterval(() => makeHearts(1), 1800);
