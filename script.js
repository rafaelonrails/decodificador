function alteraPalavra(texto, palavraOriginal, palavraTrocada) { 
    if (texto.includes(palavraOriginal)) {
        texto = texto.replaceAll(palavraOriginal, palavraTrocada);
    }
    return texto;
}

function limparCampo() {
    let campo = document.querySelector('textarea');
    campo.value = '';
}

function criptografar() {
    let texto = document.querySelector('textarea').value;
    let textoCriptografado = texto;

    textoCriptografado = alteraPalavra(textoCriptografado, 'e', 'enter');
    textoCriptografado = alteraPalavra(textoCriptografado, 'i', 'imes');
    textoCriptografado = alteraPalavra(textoCriptografado, 'a', 'ai');
    textoCriptografado = alteraPalavra(textoCriptografado, 'o', 'ober');
    textoCriptografado = alteraPalavra(textoCriptografado, 'u', 'ufat');

    alteraAside(textoCriptografado);
    limparCampo();
}

function descriptografar() {
    let texto = document.querySelector('textarea').value;
    let textoCriptografado = texto;

    textoCriptografado = alteraPalavra(textoCriptografado, 'enter', 'e');
    textoCriptografado = alteraPalavra(textoCriptografado, 'imes', 'i');
    textoCriptografado = alteraPalavra(textoCriptografado, 'ai', 'a');
    textoCriptografado = alteraPalavra(textoCriptografado, 'ober', 'o');
    textoCriptografado = alteraPalavra(textoCriptografado, 'ufat', 'u');
    alteraAside(textoCriptografado);
    limparCampo();
}

function alteraAside(textoCopia) {
    let texto = textoCopia;
    console.log(texto)
    let resultados = document.querySelector('aside');

    resultados.classList.add('container__resultado__novo');
    resultados.innerHTML ='<p id="textoResultado">'+texto+'</p>' + '<button type="submit" id="btnCopiar" onclick="copiar()" class="btn__descriptografar ">Copiar</button>'  
}

function copiar() {
    let texto = document.getElementById('textoResultado').innerHTML;
    navigator.clipboard.writeText(texto);
}
