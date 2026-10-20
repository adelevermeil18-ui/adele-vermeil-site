// songs.js — Adèle Vermeil
// Логика автовоспроизведения: когда трек заканчивается, включается следующий.

const tracks = [
  { title: "Appelle-moi", file: "audio/Appelle-moi.mp3" },
  { title: "Sur les bords de la Néva", file: "audio/Sur les bords de la Neva.mp3" },
  { title: "Orly", file: "audio/Orly.mp3" },
  { title: "Deux patries", file: "audio/Deux patries.mp3" },
  { title: "Le Silence", file: "audio/Le Silence.mp3" },
  { title: "Paris, mon amour", file: "audio/Paris, mon amour.mp3" },
  { title: "Danse encore", file: "audio/Danse encore.mp3" },
  { title: "Le Parfum des Lilas", file: "audio/Le Parfum des Lilas.mp3" },
  { title: "Les nuits blanches", file: "audio/Les nuits blanches.mp3" },
  { title: "L'orage", file: "audio/L'orage.mp3" },
  { title: "Les Ponts de la Néva", file: "audio/Les Ponts de la Neva.mp3" },
  { title: "Ne me réveille pas", file: "audio/ne-me-reveille-pas.mp3" },
  { title: "Liberté", file: "audio/Liberte.mp3" },
  { title: "Un jour de plus", file: "audio/Un jour de plus.mp3" }
];

let currentIndex = -1;
let audioPlayer = new Audio();

function renderTracks() {
  const list = document.getElementById('track-list');
  if (!list) return;
  list.innerHTML = '';
  
  tracks.forEach((track, index) => {
    const div = document.createElement('div');
    div.className = 'track';
    
    const title = document.createElement('span');
    title.className = 'track-title';
    title.textContent = `${index + 1}. ${track.title}`;
    
    const btn = document.createElement('button');
    btn.className = 'play-btn';
    btn.textContent = 'Слушать';
    btn.dataset.index = index;
    btn.onclick = () => togglePlay(index);
    
    div.appendChild(title);
    div.appendChild(btn);
    list.appendChild(div);
  });
}

function togglePlay(index) {
  // Если нажали на текущий трек
  if (index === currentIndex) {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
    updateUI();
    return;
  }

  // Включаем новый трек
  audioPlayer.pause();
  audioPlayer = new Audio(tracks[index].file);
  currentIndex = index;
  
  audioPlayer.play().catch(e => console.log("Ошибка воспроизведения:", e));
  updateUI();
  
  // МАГИЯ АВТОПЕРЕХОДА
  audioPlayer.onended = () => {
    if (currentIndex + 1 < tracks.length) {
      togglePlay(currentIndex + 1);
    } else {
      currentIndex = -1; // Конец альбома
      updateUI();
    }
  };
}

function updateUI() {
  const buttons = document.querySelectorAll('.play-btn');
  buttons.forEach((btn, i) => {
    if (i === currentIndex && !audioPlayer.paused) {
      btn.textContent = 'Играет...';
      btn.classList.add('playing');
    } else if (i === currentIndex && audioPlayer.paused) {
      btn.textContent = 'Продолжить';
      btn.classList.remove('playing');
    } else {
      btn.textContent = 'Слушать';
      btn.classList.remove('playing');
    }
  });
}

document.addEventListener('DOMContentLoaded', renderTracks);