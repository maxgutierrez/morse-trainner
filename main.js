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
const vibrar = (ms)=> window.navigator.vibrate(ms)

const flashPrint = (atraso, clearIn, txtPrint, tag)=>{
  const saveTagContent = tag.innerHTML
  setTimeout(() => {
    tag.innerHTML = txtPrint
    setTimeout(() => {
      tag.innerHTML = saveTagContent
    },clearIn)
  }, atraso);
}
botoesEl.forEach(btn => {
  btn.addEventListener('click', function(){

    lvlData.level = parseInt(lvlData.pontuacao/10) + 1
    levelEl.innerHTML = lvlData.level

    const escolhido = alfabeto.indexOf(btn.innerHTML) // index da letra no []
    const morse = display.innerHTML //morse
    // const pontoAtt = parseInt(pontuacaoEl.innerHTML)
    

    if (alfMorse[escolhido] == morse){
      // pontuacaoEl.innerHTML = pontoAtt ++
      lvlData.pontuacao++
      pontuacaoEl.innerHTML = lvlData.pontuacao

      flashPrint(0, 100, 'CERTO !', infoEl)
      flashPrint(200, 500, 'CERTO !', infoEl)
      mostrarMorse()

    } else {
      lvlData.pontuacao--
      pontuacaoEl.innerHTML = lvlData.pontuacao
      flashPrint(0, 500,`${alfabeto[alfMorse.indexOf(morse)]}`, display)
      vibrar(200)      
    }
  })
})

mostrarMorse()
