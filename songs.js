const tracks = [
  { title: "Appelle-moi", file: "appelle-moi.mp3" },
  { title: "Sur les bords de la Néva", file: "sur-les-bords-de-la-neva.mp3" },
  { title: "Orly", file: "orly.mp3" },
  { title: "Deux patries", file: "deux-patries.mp3" },
  { title: "Le Silence", file: "le-silence.mp3" },
  { title: "Paris, mon amour", file: "paris-mon-amour.mp3" },
  { title: "Danse encore", file: "danse-encore.mp3" },
  { title: "Le Parfum des Lilas", file: "le-parfum-des-lilas.mp3" },
  { title: "Les nuits blanches", file: "les-nuits-blanches.mp3" },
  { title: "L'orage", file: "lorage.mp3" },
  { title: "Les Ponts de la Néva", file: "les-ponts-de-la-neva.mp3" },
  { title: "Ne me réveille pas", file: "ne-me-reveille-pas.mp3" },
  { title: "Liberté", file: "liberte.mp3" },
  { title: "Un jour de plus", file: "un-jour-de-plus.mp3" }
];

const btnTexts = {
  ru: { listen: 'Слушать', playing: 'Играет...', pause: 'Пауза', continue: 'Продолжить' },
  en: { listen: 'Listen', playing: 'Playing...', pause: 'Pause', continue: 'Continue' },
  fr: { listen: 'Écouter', playing: 'En lecture...', pause: 'Pause', continue: 'Continuer' },
  zh: { listen: '收听', playing: '播放中...', pause: '暂停', continue: '继续' }
};

let currentIndex = -1;
let audioPlayer = new Audio();

function getBtnText(key) {
  const lang = localStorage.getItem('adele_lang') || 'ru';
  return (btnTexts[lang] && btnTexts[lang][key]) || btnTexts.ru[key];
}

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
    btn.dataset.index = index;
    btn.textContent = getBtnText('listen');
    btn.onclick = () => togglePlay(index);

    div.appendChild(title);
    div.appendChild(btn);
    list.appendChild(div);
  });
  
  updateUI();
}

function togglePlay(index) {
  if (index === currentIndex) {
    if (audioPlayer.paused) {
      audioPlayer.play().catch(e => handleError(e, index));
    } else {
      audioPlayer.pause();
    }
    updateUI();
    return;
  }

  audioPlayer.pause();
  audioPlayer = new Audio(`audio/${tracks[index].file}`);
  currentIndex = index;

  audioPlayer.onerror = () => {
    alert(`Ошибка 404: Файл "${tracks[index].file}" не найден в папке audio.`);
    currentIndex = -1;
    updateUI();
  };

  audioPlayer.play()
    .then(() => updateUI())
    .catch(e => handleError(e, index));

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

function handleError(e, index) {
  console.error("Ошибка воспроизведения:", e);
  alert(`Не удалось воспроизвести файл "${tracks[index].file}".`);
  currentIndex = -1;
  updateUI();
}

function updateUI() {
  const buttons = document.querySelectorAll('.play-btn');
  buttons.forEach((btn, i) => {
    if (i === currentIndex && !audioPlayer.paused) {
      btn.textContent = getBtnText('playing');
      btn.classList.add('playing');
    } else if (i === currentIndex && audioPlayer.paused) {
      btn.textContent = getBtnText('continue');
      btn.classList.remove('playing');
    } else {
      btn.textContent = getBtnText('listen');
      btn.classList.remove('playing');
    }
  });
}

document.addEventListener('languagechange', () => {
  renderTracks();
});

document.addEventListener('DOMContentLoaded', renderTracks);
