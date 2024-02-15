function alteraAside(textoCriptografado) {
    let resultados = document.querySelector('aside');

    resultados.classList.add('container__resultado__novo');
    resultados.innerHTML = textoCriptografado +'<button type="submit" onclick="navigator.clipboard.writeText(textoCriptografado)" class="btn__descriptografar btnCopiar">Copiar</button>'    
}

navigator.clipboard.writeText()

function criptografar() {
    let texto = document.querySelector('textarea').value;
    textoCriptografado = texto;
    
    if (texto.includes('e')) {
        textoCriptografado = textoCriptografado.replaceAll('e', 'enter');
    }
    if (texto.includes('i')) {
        textoCriptografado = textoCriptografado.replaceAll('i', 'imes');
    }
    if (texto.includes('a')) {
        textoCriptografado = textoCriptografado.replaceAll('a', 'ai');
    }
    if (texto.includes('o')) {
        textoCriptografado = textoCriptografado.replaceAll('o', 'ober');
    }
    if (texto.includes('u')) {
        textoCriptografado = textoCriptografado.replaceAll('u', 'ufat');
    }
    
    
    alteraAside(textoCriptografado);
}

function descriptografar() {
    let texto = document.querySelector('textarea').value;
    textoCriptografado = texto;

    if (texto.includes('enter')) {
        textoCriptografado = textoCriptografado.replaceAll('enter', 'e');
    }
    if (texto.includes('imes')) {
        textoCriptografado = textoCriptografado.replaceAll('imes', 'i');
    }
    if (texto.includes('ai')) {
        textoCriptografado = textoCriptografado.replaceAll('ai', 'a');
    }
    if (texto.includes('ober')) {
        textoCriptografado = textoCriptografado.replaceAll('ober', 'o');
    }
    if (texto.includes('ufat')) {
        textoCriptografado = textoCriptografado.replaceAll('ufat', 'u');
    }

    alteraAside(textoCriptografado);

}

function copiar() {
    
    
}


