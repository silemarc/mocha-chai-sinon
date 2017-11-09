process.env.NODE_ENV = 'test';

const sinon = require('sinon');
const utils = require('../src/utils');
const chai = require('chai');
const should = chai.should();

describe('sample Test', () => {


    it('calcola 2 numeri', (done) => {
        utils.somma(2, 3).should.eql(5);
        utils.funzioneComposta(2, 3).should.eql(11);
        done();
    });

    it('calcola 2 numeri con stub', (done) => {
        let sommaStub = sinon.stub(utils, 'somma').returns(0);
        utils.somma(2, 3).should.eql(0);
        utils.funzioneComposta(2, 3).should.eql(1);

        utils.somma.restore();
        utils.somma(2, 3).should.eql(5);
        sinon.assert.calledWith(sommaStub, 2, 3);
        done();
    });


});


