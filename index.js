let nomeHeroi = "Mashle"
let quantidadeXp = 99999
let nivel = ""

if (quantidadeXp <= 1000) {
    nivel = "Ferro"
} else if (quantidadeXp > 1000 && quantidadeXp <= 2000) {
    nivel = "Bronze"
} else if (quantidadeXp > 2000 && quantidadeXp <= 5000) {
    nivel = "Prata"
} else if (quantidadeXp > 5000 && quantidadeXp <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXp > 7000 && quantidadeXp <= 8000) {
    nivel = "Platina"
} else if (quantidadeXp > 8000 && quantidadeXp <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXp > 9000 && quantidadeXp <= 10000) {
    nivel = "Imortal"
} else if (quantidadeXp >= 10001) {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
