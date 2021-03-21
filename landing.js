'use strict';

const languages = [
  ['Bienvenidos a', 'Odio La Escuela'],
  ['Willkommen bei', 'Ich Hasse Schule'],
  ['में स्वागतम्', 'पाठशाला पसंद नहीं'],
  ['欢迎 来到', '我讨厌上学']
]

const shuffle = () => {
  for (let i = languages.length - 1; i > 0; i--) {
    const j      = Math.floor(Math.random() * (i + 1))
    const temp   = languages[i]
    languages[i] = languages[j]
    languages[j] = temp
  }
}
shuffle()

const welcomeTitle = document.getElementById('welcome-landing-header')
const landingTitle = document.getElementById('landing-title')

let languageIndex = 0
const changeLanguage = () => {
  if (languageIndex === languages.length) {
    languageIndex = 0
    shuffle()
    setTimeout(() => welcomeTitle.textContent = 'Welcome to', 3000)
    setTimeout(() => landingTitle.textContent = 'I Hate School', 5000)
  } else {
    const language = languages[languageIndex]
    setTimeout(() => welcomeTitle.textContent = language[0], 3000)
    setTimeout(() => landingTitle.textContent = language[1], 5000)
    languageIndex++
  }
}

setInterval(changeLanguage, 7000)

const fadeAnimation = () => {
  welcomeTitle.className = '';
  landingTitle.className = '';

  setTimeout(() => welcomeTitle.className = 'fade', 2000)
  setTimeout(() => landingTitle.className = 'fade', 4000)
}

setInterval(fadeAnimation, 7000)