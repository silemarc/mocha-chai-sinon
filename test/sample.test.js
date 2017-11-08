process.env.NODE_ENV = 'test';

const Lab = require('lab');
const Code = require('code');

const lab = exports.lab = Lab.script();
const sinon = require('sinon');
const sample = require('../src/sample');

lab.describe('sample Test', () => {


    lab.it('calcola 2 numeri', (done) => {
        Code.expect(sample.somma(2, 3)).to.be.equal(5);
        Code.expect(sample.funzioneComposta(2, 3)).to.be.equal(11);
        done();
    });

    lab.it('calcola 2 numeri con stub', (done) => {
        this.somma = sinon.stub(sample, 'somma').returns(0);
        Code.expect(sample.somma(2, 3)).to.be.equal(0);
        Code.expect(sample.funzioneComposta(2, 3)).to.be.equal(1);

        sample.somma.restore();
        sinon.assert.calledWith(stub, 2, 3);
        done();
    });


});


