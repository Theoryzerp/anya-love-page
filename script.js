const messages = [
    "Hi Anya, this is Antony. You're the cutest person in the whole universe.",
    "Even when you're quiet, your presence fills the room with warmth 💗",
    "Anya, I smile more since I met you. Thank you for being you.",
    "Every second with you feels like magic ✨",
    "Anya, you are loved. Deeply. Endlessly.",
    "If hearts could speak, mine would only whisper your name.",
    "When I say 'stay', I mean forever — Antony",
    "You're not just cute... you're my peace ☁️",
    "Your eyes are galaxies, and I'm lost in them 🌌",
    "You’re the best part of my every day, Anya 💕",
  ];
  
  const faces = [
    "(｡♥‿♥｡)", "(✿◠‿◠)", "(≧◡≦)", "(✧ω✧)", "(￣▽￣*)ゞ", "(；⌣̀_⌣́)"
  ];
  
  const messageEl = document.getElementById("message");
  const faceEl = document.getElementById("face");
  
  function updateMessage() {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    const newFace = faces[Math.floor(Math.random() * faces.length)];
    messageEl.innerText = newMessage;
    faceEl.innerText = newFace;
  }
  
  setInterval(updateMessage, 4000);
  