const messages = [
  "You're the cutest person I know 🥹",
  "Have I mentioned how shiny and gorgeus you are 🥰?",
  "I smile more since I met you 😋",
  "Every second with you feels so good ✨",
  "Stay forever 🙂‍↔️",
  "And of course you're not just cute ... you also make me feel comfortable ☁️",
  "I feel like I can talk with you about anything at anytime 🌌",
  "You’re one of my best parts of my every day, Anya 💕",
];

const faces = [
  "(｡♥‿♥｡)", "(✿◠‿◠)", "(≧◡≦)", "(✧ω✧)", "(￣▽￣*)ゞ", "(；⌣̀_⌣́)"
];

const messageEl = document.getElementById("message");
const faceEl = document.getElementById("face");

function updateMessage() {
  messageEl.classList.remove("show");
  faceEl.classList.remove("show");

  setTimeout(() => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    const newFace = faces[Math.floor(Math.random() * faces.length)];
    messageEl.innerText = newMessage;
    faceEl.innerText = newFace;

    messageEl.classList.add("show");
    faceEl.classList.add("show");
  }, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(updateMessage, 4000);
setInterval(createHeart, 3000);
