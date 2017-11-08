const request = require('request');
const cipheredURL = 'http://localhost:8888/media/data/ciphered';

const getCipheredStringChunk = (textId, bookid, userid, deviceid) => {
    //
    return new Promise(
        (resolve, reject) => {
            const onSuccess = (data) => {
                var toReturn = {string: data, isCiphered: true};
                return resolve(toReturn);
            };
            const onError = (error) => {
                return reject(error);
            };

            getCipheredTextService(textId, bookid, userid, deviceid).then(onSuccess, onError);


        });

};

const getCipheredTextService = (fileId, bookid, userid, deviceid) => {

    return new Promise((resolve) => {
        return resolve(fileId);
    })

};



exports.getCipheredStringChunk = getCipheredStringChunk;
exports.getCipheredTextService = getCipheredTextService;