//Desafio DIO 2 - partidas Rankeadas
let qtdeVitorias = 100
let qtdeDerrotas = 20

function quantidadeFinal(){
    let qtdeFinal = qtdeVitorias - qtdeDerrotas
    return qtdeFinal
}

let saldoRankeadas = quantidadeFinal()
let nivel = ""

if(saldoRankeadas <= 10){
    nivel = "Ferro"
  }
    else if(saldoRankeadas <= 20){
    nivel = "Bronze"
 }
    else if(saldoRankeadas <= 50){
    nivel = "Prata"
 }
  else if(saldoRankeadas <= 80){
    nivel = "Ouro" 
}
   else if(saldoRankeadas <= 90){
    nivel = "Diamante"
}
    else if(saldoRankeadas <= 100){
    nivel = "Lendário"
}
    else{
    nivel = "Imortal"
 }

 console.log("O herói tem saldo " + saldoRankeadas +  " e está no nível... " + nivel)