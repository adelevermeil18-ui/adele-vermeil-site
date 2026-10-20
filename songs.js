// songs.js — Адаптация под твои файлы (с пробелами и preview)

const tracks = [
  { title: "Appelle-moi", file: "Appele moi preview.mp3" },
  { title: "Sur les bords de la Néva", file: "Sur le bord de la Neva preview.mp3" },
  { title: "Orly", file: "Only preview.mp3" },
  { title: "Deux patries", file: "Deux Patries.preview.mp3" },
  { title: "Le Silence", file: "Lt silence preview.mp3" },
  { title: "Paris, mon amour", file: "Paris , mon amour preview.mp3" },
  { title: "Danse encore", file: "Dance encore preview.mp3" },
  { title: "Le Parfum des Lilas", file: "Le parfum des lilas preview.mp3" },
  { title: "Les nuits blanches", file: "Les nuits blanches preview.mp3" },
  { title: "L'orage", file: "L orage preview.mp3" },
  { title: "Les Ponts de la Néva", file: "Le ponts de la Neva preview.mp3" },
  { title: "Ne me réveille pas", file: "Ne me reveille pas preview.mp3" },
  { title: "Liberté", file: "Liberte preview.mp3" },
  { title: "Un jour de plus", file: "Un jour de plus preview.mp3" }
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
  if (index === currentIndex) {
    if (audioPlayer.paused) {
      audioPlayer.play().catch(e => handleError(e));
    } else {
      audioPlayer.pause();
    }
    updateUI();
    return;
  }

  audioPlayer.pause();
  
  // Кодируем пробелы и запятые, чтобы GitHub их правильно прочитал
  const safeFileName = encodeURIComponent(tracks[index].file);
  const audioUrl = `audio/${safeFileName}`;
  
  console.log("Загружаю:", audioUrl);

  audioPlayer = new Audio();
  audioPlayer.src = audioUrl;
  currentIndex = index;
  
  audioPlayer.play()
    .then(() => updateUI())
    .catch(e => {
      console.error("Ошибка:", audioUrl);
      alert("Не удалось загрузить: " + tracks[index].file);
      currentIndex = -1;
      updateUI();
    });
  
  audioPlayer.onended = () => {
    if (currentIndex + 1 < tracks.length) {
      togglePlay(currentIndex + 1);
    } else {
      currentIndex = -1;
      updateUI();
    }
  };
  
  updateUI();
}

function handleError(e) {
    console.error(e);
    alert("Ошибка воспроизведения.");
    currentIndex = -1;
    updateUI();
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
