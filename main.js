/**
 * sistema de lvl:
 *    gerar um determinado n em cada vl 
 * gerar teclado de acordo com lvl
 */
function numAleatorioEntre(min, max) {//por padrão vai de 0 até o num designado
  return (parseInt(Math.random() * (max- min + 1)) + min)
}
const alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
  'W', 'X', 'Y', 'Z'
]
const alfMorse = [
  "•-", 
  "-•••", 
  "-•-•", 
  "-••", 
  "•", 
  "••-•", 
  "--•", 
  "••••", 
  "••", 
  "•---", 
  "-•-", 
  "•-••", 
  "--", 
  "-•", 
  "---", 
  "•--•", 
  "--•-", 
  "•-•", 
  "•••", 
  "-", 
  "••-", 
  "•••-", 
  "-••-", 
  "-•--", 
  "--••"
]
const display = document.querySelector('#display')
const botoesEl = document.querySelectorAll('button')
btnListEl = document.querySelector('#botoes')
const pontuacaoEl = document.querySelector('#pontuacao')
const infoEl = document.querySelector('#info')

const levelEl = document.querySelector('#lvl')
const lvlData = {
  'level':1,
  'pontuacao':0
}

const numAleatorio = ()=> numAleatorioEntre(0, lvlData.level)
const morseAleatorio = ()=> alfMorse[numAleatorio()]
const mostrarMorse = ()=> display.innerHTML = morseAleatorio()

const flashPrint = (atraso, clearIn, txtPrint, tag)=>{
  const saveTagContent = tag.innerHTML
  setTimeout(() => {
    tag.innerHTML = txtPrint
    setTimeout(() => {
      tag.innerHTML = saveTagContent
    },clearIn)
  }, atraso);
}
const vibrate = morse_str => {
  const splited = morse_str.split('').join(' ').split('')
  const patern = splited.map(caractere => {
    if(caractere == '-'){
      return 200
    } else {
      return 100
    }
  })
  window.navigator.vibrate(patern)
}
function tag_color(tag, color){
  tag.style.color = color
}
function atraso(ms){
  return function(fn){
    setTimeout(() => {
      fn()
    }, ms);
  }
}

function main(btn){

  lvlData.level = parseInt(lvlData.pontuacao/20) + 1
  levelEl.innerHTML = lvlData.level

  const escolhido_letra = alfabeto.indexOf(btn) // index da letra no []
  const morse_display = display.innerHTML //morse_display
  const letra_display = alfabeto[alfMorse.indexOf(morse_display)]
  
  if (alfMorse[escolhido_letra] == morse_display){// SE ACERTO ===
    lvlData.pontuacao++
    pontuacaoEl.innerHTML = lvlData.pontuacao
    flashPrint(0, 500, letra_display, infoEl)
    atraso(600)(mostrarMorse)

  } else {//                           SE ERRO ===
    lvlData.pontuacao--
    pontuacaoEl.innerHTML = lvlData.pontuacao
    flashPrint(0, 500, letra_display, display)
  }
  // vibrate(morse_display)

  
}

botoesEl.forEach(btn => {
  btn.addEventListener('click', function(){
    main(btn.innerHTML)
  })
})
document.addEventListener('keydown', function(keyboardEvent){
  main(keyboardEvent.key.toUpperCase())
})

mostrarMorse()
