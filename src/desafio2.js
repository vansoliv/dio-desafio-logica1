let saldoFinal = pontuacaoJogo(34, 4)
let rankingFinal = rankingJogo(saldoFinal)

console.log("O Herói tem o saldo de " + saldoFinal + " e está no nível de " + rankingFinal)

function pontuacaoJogo(vitorias, derrotas) {

    let saldo = vitorias - derrotas
    return saldo
}

function rankingJogo(saldoFinal) {
let ranking

    if(saldoFinal <= 10) {
        ranking = "Ferro"
    }
    else if (saldoFinal >=11 && saldoFinal <= 20) {
        ranking = "Bronze"
    }
    else if (saldoFinal >=21 && saldoFinal <=50) {
        ranking = "Prata"
    }
    else if (saldoFinal >=11 && saldoFinal <=80) {
        ranking = "Ouro"
    }
    else if (saldoFinal >=81 && saldoFinal <=90) {
        ranking = "Diamante"
    }
    else if (saldoFinal >=91 && saldoFinal <=100) {
        ranking = "Lendário"
    }
    else {
        ranking = "Imortal"
    }
    return ranking
}