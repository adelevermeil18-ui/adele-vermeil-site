/* Adèle Vermeil — songs.js
   Альбом «Expression» (2026), 11 треков.
   Кнопки «Слушать» переключаются вместе с языком (не залипают). */

const ADELE_SONGS = [
  { id: 1,  file: "appelle-moi.mp3",          ru: "Позови меня",            en: "Call Me",                 fr: "Appelle-moi",              zh: "呼唤我" },
  { id: 2,  file: "loin-de-paris.mp3",        ru: "Вдали от Парижа",        en: "Far from Paris",          fr: "Loin de Paris",            zh: "远离巴黎" },
  { id: 3,  file: "deux-patries.mp3",         ru: "Две родины",             en: "Two Homelands",           fr: "Deux patries",             zh: "两个祖国" },
  { id: 4,  file: "les-ponts-de-la-neva.mp3", ru: "Мосты Невы",             en: "The Bridges of the Neva", fr: "Les ponts de la Néva",     zh: "涅瓦河之桥" },
  { id: 5,  file: "les-nuits-blanches.mp3",   ru: "Белые ночи",             en: "White Nights",            fr: "Les nuits blanches",       zh: "白夜" },
  { id: 6,  file: "le-parfum-des-lilas.mp3",  ru: "Аромат сирени",          en: "The Scent of Lilacs",     fr: "Le parfum des lilas",      zh: "丁香芬芳" },
  { id: 7,  file: "paris-mon-amour.mp3",      ru: "Париж, моя любовь",      en: "Paris, My Love",          fr: "Paris, mon amour",         zh: "巴黎，我的爱" },
  { id: 8,  file: "ne-me-reveille-pas.mp3",   ru: "Не буди меня",           en: "Don't Wake Me",           fr: "Ne me réveille pas",       zh: "别叫醒我" },
  { id: 9,  file: "le-silence.mp3",           ru: "Тишина",                 en: "The Silence",             fr: "Le Silence",               zh: "寂静" },
  { id: 10, file: "liberte.mp3",              ru: "Свобода",                en: "Freedom",                 fr: "Liberté",                  zh: "自由" },
  { id: 11, file: "un-jour-de-plus.mp3",      ru: "Ещё один день",          en: "One More Day",            fr: "Un jour de plus",          zh: "再多一天" }
];

const BTN_LABEL = {
  ru: "Слушать",
  en: "Listen",
  fr: "Écouter",
  zh: "收听"
};

let adeleLang = "ru";
let adeleCurrentAudio = null;
let adeleCurrentBtn = null;

function getAdeleLang() {
  return adeleLang;
}

function renderAdeleSongs() {
  const list = document.getElementById("songs-list");
  if (!list) return;

  list.innerHTML = "";

  ADELE_SONGS.forEach(function (song) {
    const item = document.createElement("div");
    item.className = "song";

    const title = document.createElement("span");
    title.className = "song-title";
    title.textContent = song[adeleLang] || song.ru;

    const btn = document.createElement("button");
    btn.className = "song-btn";
    btn.type = "button";
    btn.textContent = BTN_LABEL[adeleLang] || BTN_LABEL.ru;
    btn.dataset.songId = String(song.id);

    btn.addEventListener("click", function () {
      toggleAdeleSong(song, btn);
    });

    item.appendChild(title);
    item.appendChild(btn);
    list.appendChild(item);
  });
}

function toggleAdeleSong(song, btn) {
  const src = "audio/" + song.file;

  /* повторный клик по той же кнопке — пауза/продолжить */
  if (adeleCurrentAudio && adeleCurrentBtn === btn) {
    if (adeleCurrentAudio.paused) {
      adeleCurrentAudio.play();
      btn.textContent = BTN_LABEL[adeleLang] + " ❚❚";
    } else {
      adeleCurrentAudio.pause();
      btn.textContent = BTN_LABEL[adeleLang] + " ▶";
    }
    return;
  }

  /* остановить предыдущий трек */
  if (adeleCurrentAudio) {
    adeleCurrentAudio.pause();
    adeleCurrentAudio.currentTime = 0;
  }
  if (adeleCurrentBtn) {
    adeleCurrentBtn.textContent = BTN_LABEL[adeleLang] || BTN_LABEL.ru;
  }

  adeleCurrentAudio = new Audio(src);
  adeleCurrentBtn = btn;

  adeleCurrentAudio.addEventListener("ended", function () {
    btn.textContent = BTN_LABEL[adeleLang] || BTN_LABEL.ru;
    adeleCurrentAudio = null;
    adeleCurrentBtn = null;
  });

  adeleCurrentAudio.addEventListener("error", function () {
    btn.textContent = BTN_LABEL[adeleLang] || BTN_LABEL.ru;
    console.warn("Adèle: не удалось загрузить " + src);
  });

  adeleCurrentAudio.play().then(function () {
    btn.textContent = BTN_LABEL[adeleLang] + " ❚❚";
  }).catch(function () {
    btn.textContent = BTN_LABEL[adeleLang] || BTN_LABEL.ru;
  });
}

/* Смена языка: перерисовать карточки и сбросить подписи кнопок */
function setAdeleLang(lang) {
  adeleLang = lang;

  /* если играет трек — не ломаем его, просто обновляем подпись текущей кнопки */
  renderAdeleSongs();

  if (adeleCurrentAudio && adeleCurrentBtn) {
    const playing = !adeleCurrentAudio.paused;
    const id = adeleCurrentBtn.dataset.songId;
    const newBtn = document.querySelector('.song-btn[data-song-id="' + id + '"]');
    if (newBtn) {
      newBtn.textContent = BTN_LABEL[adeleLang] + (playing ? " ❚❚" : " ▶");
      adeleCurrentBtn = newBtn;
    }
  }
}

/* Совместимость с переключателем языка (translations.js) */
window.setAdeleLang = setAdeleLang;
window.getAdeleLang = getAdeleLang;
window.renderAdeleSongs = renderAdeleSongs;

document.addEventListener("DOMContentLoaded", function () {
  if (typeof window.getCurrentLang === "function") {
    adeleLang = window.getCurrentLang() || "ru";
  }
  renderAdeleSongs();
});
