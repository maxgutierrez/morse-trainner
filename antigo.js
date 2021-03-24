function numAleatorioEntre(min, max) {//por padrão vai de 0 até o num designado
  return (parseInt(Math.random() * (max- min + 1)) + min)
}
const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
const alfabetoMorse = {
  A:{A:'.-'}, 
  B:{B:'-...'}, 
  C:{C:'-.-.'}, 
  D:{D:'-..'}, 
  E:{E:'.'}, 
  F:{F:'..-.'},
  G:{G:'--.'}, 
  H:{H:'....'}, 
  I:{I:'..'}, 
  J:{J:'.---'}, 
  K:{K:'-.-'}, 
  L:{L:'.-..'},
  M:{M:'--'}, 
  N:{N:'-.'}, 
  O:{O:'---'}, 
  P:{P:'.--.'}, 
  Q:{Q:'--.-'}, 
  R:{R:'.-.'},
  S:{S:'...'}, 
  T:{T:'-'}, 
  U:{U:'..-'}, 
  V:{V:'...-'}, 
  W:{W:'.--'}, 
  X:{X:'-..-'},
  Y:{Y:'-.--'},
  Z:{Z:'--..'}
}
const alfabetoMorseArray = Object.values(alfabetoMorse)
const numDeLetras = Object.values(alfabetoMorse).length
const numAleatorio = numAleatorioEntre(0,numDeLetras-1)
const letraAleatoria = alfabeto[numAleatorio]
const morseAleatorio = alfabetoMorse[letraAleatoria]

console.log(letraAleatoria);
console.log(morseAleatorio);
