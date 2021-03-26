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
      return 300
    } else {
      return 100
    }
  })
  window.navigator.vibrate(patern)
}

function main(btn){

  lvlData.level = parseInt(lvlData.pontuacao/10) + 1
  levelEl.innerHTML = lvlData.level

  const escolhido = alfabeto.indexOf(btn) // index da letra no []
  const morse = display.innerHTML //morse
  // const pontoAtt = parseInt(pontuacaoEl.innerHTML)
  
  if (alfMorse[escolhido] == morse){
    // pontuacaoEl.innerHTML = pontoAtt ++
    lvlData.pontuacao++
    pontuacaoEl.innerHTML = lvlData.pontuacao

    flashPrint(0, 100, `${alfabeto[alfMorse.indexOf(morse)]}`, infoEl)
    flashPrint(200, 500, 'CERTO !', infoEl)
    mostrarMorse()

  } else {
    lvlData.pontuacao--
    pontuacaoEl.innerHTML = lvlData.pontuacao
    flashPrint(0, 500,`${alfabeto[alfMorse.indexOf(morse)]}`, display)
  }
  vibrate(morse)

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
