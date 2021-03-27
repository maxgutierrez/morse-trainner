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
const xp_atualEl = document.querySelector('#xp_atual')
const infoEl = document.querySelector('#info')

const levelEl = document.querySelector('#lvl')
const data = {
  'level':1,
  'xp_atual':0,
  'letrasDoLvl':function() {
    return alfabeto.slice(0, this.level+1)
  },
  'display_crr':''
}

const numAleatorio = ()=> numAleatorioEntre(0, data.level)
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
function revelarButtons() {
  return botoesEl.forEach(button =>{
    if(data.letrasDoLvl().indexOf(button.innerHTML) == -1){
      button.style.display = 'none'
    } else {
      button.style.display = 'inline'
    }
  })
}

function main(btn){
  data.level = 1 + parseInt(data.xp_atual/10 ) 
  levelEl.innerHTML = data.level

  const escolhido_letra = alfabeto.indexOf(btn) // index da letra no []
  const morse_display = display.innerHTML //morse_display
  const letra_display = alfabeto[alfMorse.indexOf(morse_display)]
  
  if (alfMorse[escolhido_letra] == morse_display){// SE ACERTO ===
    data.xp_atual++
    xp_atualEl.innerHTML = data.xp_atual
    flashPrint(0, 300, letra_display, infoEl)
    atraso(300)(mostrarMorse)

  } else {//                           SE ERRO ===
    data.xp_atual--
    xp_atualEl.innerHTML = data.xp_atual
    flashPrint(0, 500, letra_display, display)
  }
  // vibrate(morse_display)
  revelarButtons()

  
}

botoesEl.forEach(btn => {
  btn.addEventListener('click', function(){ //CLICK
    main(btn.innerHTML)
  })
})
document.addEventListener('keydown', function(keyboardEvent){// KEYDOWN
  main(keyboardEvent.key.toUpperCase())
})



mostrarMorse()
revelarButtons()