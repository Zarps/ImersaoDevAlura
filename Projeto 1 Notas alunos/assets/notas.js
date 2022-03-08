var nome = "wesley"

var notaDoPrimeiroBimestre = 9.234
var notaDoSegundoBimestre = 7.456
var notaDoTerceiroBimestre = 4.678
var notaDoQuartoBimestre = 2.543

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("Nota do aluno: " + notaFixada)

if(notaFixada >= 6){
  console.log("Aluno Aprovado")
}else{
  console.log("Aluno não aprovado")
}

// isso é um comentário
//revisão
//varíaveis, strings, console.log, toFixed, operações matemáticas, concatenação.