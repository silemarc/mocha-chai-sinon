function sum(a, b) {
    return a + b;
}

const funzioneComposta = (x, y) => {
    return utils.somma(x,y) * 2 + 1;
}


const utils = {
    somma: sum,
    funzioneComposta: funzioneComposta
}

module.exports = utils;