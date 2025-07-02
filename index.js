let nomeHeroi = "Storm"
let quantidadeXP = 4599
let resultado = ""

if(quantidadeXP <= 1000){
    resultado = "Ferro"
  }
else if(quantidadeXP <= 2000){
  resultado = "Bronze"
 }
 else if(quantidadeXP <= 5000){
  resultado = "Prata"
 }
  else if(quantidadeXP <= 7000){
  resultado = "Ouro" 
}
   else if(quantidadeXP <= 8000){
  resultado = "Platina"
}
     else if(quantidadeXP <= 9000){
  resultado = "Ascendente"
}
     else if(quantidadeXP <= 10000){
  resultado = "Imortal"
}

 else{
  resultado = "Radiante"
 }

 console.log("O herói de nome..." +  nomeHeroi + " está no nível... " + resultado)