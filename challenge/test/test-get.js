// let chai =  require('chai');

// let chaiHttp = require('chai-http');

// let should = chai.should();

// var should = require("should");
// var request = require("request");
// var chai = require("chai");
// var expect = chai.expect;
// var urlBase = "https://api.magicthegathering.io/v1";

// chai.use(chaiHttp);

// describe ('Validação de rotas getters \n', () => {

//   describe ('/Get /v1/game', () => {
//     it ('Testando GET, consultando todos os <Games>', (done) => {
//       chai.request ('http://localhost:3000')          
//         .get ('/v1/game')                             
//         .end ((err, res) => {                         
//           res.should.have.status (200);               
//           res.body.should.be.a ('array');            
//           done();
//         });
//     });
//   });

//   // describe ('/Get /v1/game:gameid', () => {
//   //   it ('Testando GET, consultando um <Game> por id', (done) => {
//   //     chai.request ('http://localhost:3000')          
//   //       .get ('/v1/game')             
//   //       .end ((err, res) => {                  
//   //         res.should.have.status (200);               
//   //         res.body.should.be.a ('array');            
//   //         done();
//   //       });
//   //   });
//   // });

//   //it ( '/PUT Game' , function (done) {
//   //  chai.request (route)
//   //  .put('/game/5ddbdb453f0d5c002f472ed9')
//   //  .end ( (err, res) => {
//   //    expect (res.statusCode).to.equal(200);
//   //    return done();
//   //  });
//   //});
//   //​
//   //it ('/DELETE Game', function (done) {
//   //  chai.request(route)
//   //    .delete('/game/5ddc09e03f0d5c002f472eec')
//   //    .end( (err, res) => {
//   //      expect (res.statusCode).to.equal(200);
//   //      expect(Object)
//   //      return done();
//   //    });
//   //});
// });