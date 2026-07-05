const cotacoes = {
    btc: 350000,
    eth: 15000
}

const valorReais = document.getElementById(`valorReais`)
const moedaCry = document.getElementById(`moedaCrypto`)
const converter = document.getElementById(`converter`)
const resultado = document.getElementById(`resultado`)
const barraP = document.getElementById(`barraProgresso`)

converter.addEventListener(`click`, () => {
    const valor = Number(valorReais.value)
    const moeda = moedaCry.value
    const fracao = valor / cotacoes[moeda];
    resultado.innerHTML = fracao.toFixed(5)
    let porcentagem = fracao * 100
    if(porcentagem > 100) {
        porcentagem = 100;
    }
    barraP.style.width = `${porcentagem}%`
})