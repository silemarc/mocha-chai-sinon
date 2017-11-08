const somma = (a, b) => {
    return a + b;
}

const funzioneComposta = (x, y) => {
    return somma(x,y) * 2 + 1;
}

exports.somma = somma;
exports.funzioneComposta = funzioneComposta;