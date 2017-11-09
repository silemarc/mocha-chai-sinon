function _somma(a, b) {
    return a + b;
}

const _funzioneComposta = (x, y) => {
    // return _somma(x,y) * 2 + 1; // così non funziona lo stub della funzione
    return utils.somma(x,y) * 2 + 1;
}


const utils = {
    somma: _somma,
    funzioneComposta: _funzioneComposta
}

module.exports = utils;