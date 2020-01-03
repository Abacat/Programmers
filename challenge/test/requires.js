// //Testing at routers the Game Challenge (CRUD) 

// let chai =  require('chai');
// let chaiHttp = require('chai-http');

// let should = chai.should();

// chai.use(chaiHttp);

//  describe ('Campos requeridos Games', () => {

// it ('Testando POST, cadastrando um <Game> - Sem name', (done) => {
//     let gameone = {                         
//         gender: "Adventure",
//         description: "One Adventure",
//         company: "DevPontal"
//     }
//     chai.request ('http://localhost:3000')
//       .post ('/v1/game')
//       .send (gameone)
//       .end ((err, res) => {
//         res.should.have.status (400);
//         done();
//       });
// });
//  describe ('/Put /v1/game/gameid', () => {
//     it ('Testando PUT, alterando um <Game> - sem name', (done) => {
//        chai.request ('http://localhost:3000')
//           .post ('/v1/game')
//         .send ({})
//         .end ((err, res) => {
//           res.should.have.status (400);
//           done();
//         });
//         expected().have.to.be.equal(0000)
  
//     });
//   });
//  });
