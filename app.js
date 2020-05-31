const request = require('request');
const RWG = {}

RWG.random = (callback) => {
    request('https://sozluk.gov.tr/icerik', (err,res,body) => {

        let content = JSON.parse(body);
        return callback(err,content.karistirma.map(l => l.dogru));
    
    })
}

module.exports = RWG;