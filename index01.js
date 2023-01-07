const comentario = "Esse painel é muito perigoso!";

const arrayComentario = comentario.toUpperCase().split(" ") //--> [ 'Esse', 'COVID', 'é', 'muito', 'perigoso!' ]

function proibida(arrayDaFrase) {
    for (let palava of arrayDaFrase) {
        if (palava == "COVID" || palava == "PANDEMIA") { // acredito que seria interessante criar um array com diversas palavras. Perguntar depois.
            return console.log("Comentário bloqueado por conter palavras proibidas")
        }
    }
    console.log("Comentário Autorizado")
}

proibida(arrayComentario)