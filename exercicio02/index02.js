let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

const identificadorFormatado = identificador.padStart(6, "0")
console.log(identificadorFormatado)

const nomeFormatado = nome.split(" ")
let nomeJuntado = "";
for (let nome of nomeFormatado) {
    let primeiraLetra = nome.slice(0, 1).toUpperCase()
    let restanteDoNome = nome.slice(1)

    nomeJuntado += primeiraLetra + restanteDoNome + " "
}
console.log(nomeJuntado)

const emailFormatado = email.trim()
console.log(`${emailFormatado}`)