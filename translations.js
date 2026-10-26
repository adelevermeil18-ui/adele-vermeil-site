/* Adèle Vermeil — translations.js
   Языки: RU, EN, FR, ZH.
   Переключает все data-i18n и синхронизирует кнопки «Слушать» в songs.js. */

const ADELE_TRANSLATIONS = {
  ru: {
    "hero.eyebrow": "Cinematic French Art · Atmospheric Baroque",
    "hero.title": "Музыкальные посвящения",
    "hero.text": "Мы не пишем песни на заказ. Мы создаём музыкальные посвящения.",
    "hero.btn": "Обсудить посвящение",

    "about.title": "О проекте",
    "about.text1": "Adèle Vermeil — это cinematic French art и atmospheric baroque. Музыка, в которой Париж встречается с Петербургом, а личная история становится произведением.",
    "about.text2": "Каждое посвящение — отдельный мир: текст, музыка, визуал и смысл. Без шаблонов и без масок.",

    "music.title": "Музыка",
    "music.subtitle": "Альбом «Expression» · 2026",

    "dedications.title": "Музыкальные посвящения",
    "dedications.text": "Les Ponts de la Néva — про 30-летие и Ленинград. Un jour de plus — про Крым и +32. Каждая история уникальна.",
    "dedications.quote": "«Это не маска — это дверь в мир, которую мы просто открыли».",

    "concerts.title": "Концерты",
    "concerts.text": "Студийный формат. Возможен при расширении аудитории. Детали не комментируем.",

    "author.title": "Об авторе",
    "author.text": "Проект создан Михаилом (Александром Кацем) — автором, композитором, гитаристом. Adèle Vermeil — его французский мир, отдельный от REDEMPTATION.",

    "contact.title": "Связь",
    "contact.text": "Напишите, чтобы обсудить посвящение. Цены — только по запросу.",

    "form.name": "Имя",
    "form.email": "Email",
    "form.message": "Сообщение",
    "form.btn": "Отправить",

    "redemptation.title": "Связь с REDEMPTATION",
    "redemptation.text": "Adèle Vermeil и REDEMPTATION — два разных мира. Не смешиваются."
  },

  en: {
    "hero.eyebrow": "Cinematic French Art · Atmospheric Baroque",
    "hero.title": "Musical Dedications",
    "hero.text": "We don't write songs to order. We create musical dedications.",
    "hero.btn": "Discuss a Dedication",

    "about.title": "About the Project",
    "about.text1": "Adèle Vermeil is cinematic French art and atmospheric baroque. Music where Paris meets St. Petersburg, and a personal story becomes a work of art.",
    "about.text2": "Each dedication is a world of its own: lyrics, music, visuals and meaning. No templates, no masks.",

    "music.title": "Music",
    "music.subtitle": "Album “Expression” · 2026",

    "dedications.title": "Musical Dedications",
    "dedications.text": "Les Ponts de la Néva is about a 30th birthday and Leningrad. Un jour de plus is about Crimea and +32. Every story is unique.",
    "dedications.quote": "“This is not a mask — it is a door into a world we have simply opened.”",

    "concerts.title": "Concerts",
    "concerts.text": "Studio format. Possible as the audience grows. We do not comment on details.",

    "author.title": "About the Author",
    "author.text": "The project was created by Mikhail (Alexander Katz) — author, composer, guitarist. Adèle Vermeil is his French world, separate from REDEMPTATION.",

    "contact.title": "Contact",
    "contact.text": "Write to discuss a dedication. Prices — on request only.",

    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.btn": "Send",

    "redemptation.title": "Connection with REDEMPTATION",
    "redemptation.text": "Adèle Vermeil and REDEMPTATION are two different worlds. They do not mix."
  },

  fr: {
    "hero.eyebrow": "Cinematic French Art · Atmospheric Baroque",
    "hero.title": "Dédicaces musicales",
    "hero.text": "Nous n’écrivons pas de chansons sur commande. Nous créons des dédicaces musicales.",
    "hero.btn": "Discuter d’une dédicace",

    "about.title": "À propos du projet",
    "about.text1": "Adèle Vermeil, c’est le cinematic French art et l’atmospheric baroque. Une musique où Paris rencontre Saint-Pétersbourg, et où une histoire personnelle devient une œuvre.",
    "about.text2": "Chaque dédicace est un monde à part : texte, musique, visuel et sens. Sans modèles, sans masques.",

    "music.title": "Musique",
    "music.subtitle": "Album « Expression » · 2026",

    "dedications.title": "Dédicaces musicales",
    "dedications.text": "Les Ponts de la Néva parle d’un trentième anniversaire et de Léningrad. Un jour de plus parle de Crimée et de +32. Chaque histoire est unique.",
    "dedications.quote": "« Ce n’est pas un masque — c’est une porte vers un monde que nous avons simplement ouverte. »",

    "concerts.title": "Concerts",
    "concerts.text": "Format studio. Possible avec l’élargissement du public. Nous ne commentons pas les détails.",

    "author.title": "À propos de l’auteur",
    "author.text": "Le projet a été créé par Mikhail (Alexander Katz) — auteur, compositeur, guitariste. Adèle Vermeil est son monde français, distinct de REDEMPTATION.",

    "contact.title": "Contact",
    "contact.text": "Écrivez-nous pour discuter d’une dédicace. Prix — sur demande uniquement.",

    "form.name": "Nom",
    "form.email": "Email",
    "form.message": "Message",
    "form.btn": "Envoyer",

    "redemptation.title": "Lien avec REDEMPTATION",
    "redemptation.text": "Adèle Vermeil et REDEMPTATION sont deux mondes différents. Ils ne se mélangent pas."
  },

  zh: {
    "hero.eyebrow": "电影感法式艺术 · 氛围巴洛克",
    "hero.title": "音乐献礼",
    "hero.text": "我们不按订单写歌。我们创作音乐献礼。",
    "hero.btn": "讨论献礼",

    "about.title": "关于项目",
    "about.text1": "Adèle Vermeil 是电影感法式艺术与氛围巴洛克。在这里，巴黎与圣彼得堡相遇，个人故事成为艺术作品。",
    "about.text2": "每一份献礼都是一个独立的世界：文字、音乐、视觉与意义。没有模板，没有面具。",

    "music.title": "音乐",
    "music.subtitle": "专辑《Expression》· 2026",

    "dedications.title": "音乐献礼",
    "dedications.text": "Les Ponts de la Néva 讲述三十岁生日与列宁格勒。Un jour de plus 讲述克里米亚与 +32。每个故事都独一无二。",
    "dedications.quote": "“这不是面具——这是一扇门，我们只是把它打开了。”",

    "concerts.title": "演出",
    "concerts.text": "录音室形式。随着听众扩大可能举办。细节不作评论。",

    "author.title": "关于作者",
    "author.text": "项目由 Mikhail（Alexander Katz）创建——作者、作曲家、吉他手。Adèle Vermeil 是他的法语世界，与 REDEMPTATION 分开。",

    "contact.title": "联系",
    "contact.text": "写信讨论献礼。价格仅按请求提供。",

    "form.name": "姓名",
    "form.email": "邮箱",
    "form.message": "留言",
    "form.btn": "发送",

    "redemptation.title": "与 REDEMPTATION 的联系",
    "redemptation.text": "Adèle Vermeil 与 REDEMPTATION 是两个不同的世界。不会混合。"
  }
};

const ADELE_LANG_KEY = "adele_lang";
let adeleCurrentLang = "ru";

function getCurrentLang() {
  return adeleCurrentLang;
}

function applyTranslations(lang) {
  const dict = ADELE_TRANSLATIONS[lang] || ADELE_TRANSLATIONS.ru;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  /* синхронизация кнопок «Слушать» в songs.js */
  if (typeof window.setAdeleLang === "function") {
    window.setAdeleLang(lang);
  }
}

function setLanguage(lang) {
  if (!ADELE_TRANSLATIONS[lang]) lang = "ru";
  adeleCurrentLang = lang;
  try { localStorage.setItem(ADELE_LANG_KEY, lang); } catch (e) {}
  applyTranslations(lang);
}

function initTranslations() {
  let saved = "ru";
  try { saved = localStorage.getItem(ADELE_LANG_KEY) || "ru"; } catch (e) {}
  if (!ADELE_TRANSLATIONS[saved]) saved = "ru";

  adeleCurrentLang = saved;

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.dataset.lang);
    });
  });

  applyTranslations(saved);
}

window.getCurrentLang = getCurrentLang;
window.setLanguage = setLanguage;

document.addEventListener("DOMContentLoaded", initTranslations);
