
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

const baseUrl = "http://localhost:3000/v1";

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe ("Teste API Challenge Games \n", () => {
    
    describe("Cenario de teste get sem parametro", () =>{
        it ("Array: \nDeve retornar um array de objetos de games" , (done) => {
            request (baseUrl + '/game', function (err, res) {

                expect (res.statusCode).to.equal(200);

                expect('array');

                return done(err);
            });
        });
    });

    describe("Cenario de teste get com parametro Id", () =>{
        it ("Id: \nDeve retornar um objeto game" , (done) => {
            chai.request(baseUrl)
                .get('/game/5dd3de3ac7f716174c8d549d')
                .end( (err, res) => {

                  expect (res.statusCode).to.equal(200);

                  expect (res.body).to.have.property('_id');
                  expect (res.body).to.have.property('name');
                  expect (res.body).to.have.property('gender');
                  expect (res.body).to.have.property('description');
                  expect (res.body).to.have.property('company');
                  expect (res.body).to.have.property('created_at');

                  return done(err);
            });
        });
    });

    describe("Cenario de teste get com parametro name", () =>{
        it ("Name:\n Deve retornar um objeto game" , (done) => {
            chai.request(baseUrl)
                .get('/game/name/smite1')
                .end( (err, res) => {

                  expect (res.statusCode).to.equal(200);

                  expect (res.body[0]).to.have.property('_id');
                  expect (res.body[0]).to.have.property('name');
                  expect (res.body[0]).to.have.property('gender');
                  expect (res.body[0]).to.have.property('description');
                  expect (res.body[0]).to.have.property('company');
                  expect (res.body[0]).to.have.property('created_at');

                  return done(err);
            });
        });
    });

    describe("Cenario de teste get com parametro gender", () =>{
        it ("Gender:\n Deve retornar um objeto game" , (done) => {
            chai.request(baseUrl)
                .get('/game/gender/terror')
                .end( (err, res) => {

                  expect (res.statusCode).to.equal(200);

                  expect (res.body[0]).to.have.property('_id');
                  expect (res.body[0]).to.have.property('name');
                  expect (res.body[0]).to.have.property('gender');
                  expect (res.body[0]).to.have.property('description');
                  expect (res.body[0]).to.have.property('company');
                  expect (res.body[0]).to.have.property('created_at');

                  return done(err);
            });
        });
    });

    describe("Cenario de teste get com parametro company", () =>{
        it ("Company:\n Deve retornar um objeto game" , (done) => {
            chai.request(baseUrl)
                .get('/game/company/solution')
                .end( (err, res) => {

                  expect (res.statusCode).to.equal(200);

                  expect (res.body[0]).to.have.property('_id');
                  expect (res.body[0]).to.have.property('name');
                  expect (res.body[0]).to.have.property('gender');
                  expect (res.body[0]).to.have.property('description');
                  expect (res.body[0]).to.have.property('company');
                  expect (res.body[0]).to.have.property('created_at');

                  return done(err);
            });
        });
    });

    describe("Cenario de teste get com parametro company", () =>{
        it ("Company:\n Deve retornar um objeto game" , (done) => {
            chai.request(baseUrl)
                .put('/game')                                                                                                                                                                                                                                                                                                                                                                                   
                .set({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    '_method': 'put',
                    'name': smite123

                })

                  expect (res.statusCode).to.eq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ual(200);
                  expect (res.body[0]).to.have.property('name');

                  return done(err);
            });
        });
    });
});