function tocaSom(elementoSom) {
    const somSelecionado = document.getElementById(elementoSom);
    
    if(somSelecionado === null || somSelecionado.localName != "audio") {
        alert("Áudio não encontrado!");
    } 
    else {
        somSelecionado.currentTime = 0; // Reseta o audio caso aperte o botão mais de uma vez
        somSelecionado.play();
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const nomeSom = tecla.classList[1].slice(5); // Extrai nome da classe com som desejado
    const idSom = "som" + nomeSom; 

    // Adiciona cada som em um botão respectivo
    tecla.addEventListener("click", function () {
        tocaSom(idSom);
    })
}
