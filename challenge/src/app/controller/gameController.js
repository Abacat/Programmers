const express = require('express');

const Game = require('../models/game');

const router = express.Router();

//Metodos get
// router.get('/ping', (req,res) =>{
//     res.send('pong ok');
// });

router.get('/game', async (req, res) => {
    try {
        const game = await Game.find();

        return res.send(game);

    } catch (err) {
        const mensagem = ' Erro get full names!'; 
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        return res.status(500).send({ error: 'Error loading games'});
    }
});

router.get('/game/name/:name', async (req,res) =>{
    try {
        const {name} = req.params;

        const game = await Game.find({name});
        
        if (!game.length) {
            return res.status(400).send('Name not found');
        }

        res.send(game);

    } catch (err) {
        const mensagem = ' Erro get with name parameter!';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        return res.status(500).send({error:'Error loading game'});
    }
});

router.get('/game/:gameid', async (req,res) =>{
    try {
        const {gameid} = req.params;
        
        const game = await Game.findById(gameid)

        if (game) {
            res.send(game).status(200);
        }
        res.send({}).status(400);

    } catch (err) {
        const mensagem = ' Erro get with id parameter!';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        return res.status(500).send({error:'Error loading game'});
    }
});

router.get('/game/gender/:gender', async (req,res) =>{
    try {
        const {gender} = req.params;

        const game = await Game.find({gender});

        if (!game.length) {
            return res.status(400).send('This gender not found')
        }
        res.send(game);

    } catch (err) {
        const mensagem = ' Erro get gender game with gender parameter';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        res.status(500).send({error: 'Error loading this gender game'})
    }
});

router.get('/game/company/:company', async (req,res) =>{
    try {
        const {company} = req.params;

        const game = await Game.find({company});

        if(!game.length){
            return res.status(400).send('This company not found')
        }
        res.send(game);

    } catch (err) {
        const mensagem = ' Erro get company game with campany parameter';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        res.status(500).send({error: 'Error loading this gender game'})
    }
});

//Metodos post
router.post('/game', async (req, res) => {
    try {

        if (!req.body.name) {
            return res.send('Name not found').status(400);
        }

        if (!req.body.gender) {
            return res.send('Gender not found').status(400);
        }

        if (!req.body.description) {
            return res.send('Description not found').status(400);
        }
        
        if (!req.body.company) {
            return res.send('Company not found').status(400);
        }

        const game = await Game.create(req.body);
        
        return res.send(game);

    } catch (err) {

        let errorMessage =  '';

        if (err.code && err.code == 11000) {
            errorMessage = 'Name not possible duplicate';
            return res.status(400).send({ error: errorMessage });

        } else {
            errorMessage = 'server error'
        }
        
        const mensagem = ' Erro post game'+ err;
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);
        
        return res.status(500).send({ error: errorMessage });
        
    }
});

//Metodos put
router.put('/game/:gameid', async (req, res) => {
    try {
        if (req.body.name) {
            const now = new Date;

            const game = await Game.findByIdAndUpdate(req.params.gameid,{name: req.body.name, update_at: now},
                {new : true, select: {name:1, _id: 0}})

            res.send(`Game Update with sucess:\n ${game}`);
        }
        return res.send({}).status(400);    

    } catch (err) {
        const mensagem = ' Erro put name game with name in body request';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        res.status(500).send({ err: 'Update faild' });
    }
});

//Metodos delete
router.delete('/game/:gameid', async( req, res) => {
    try {
        const validargame = await Game.findById(req.params.gameid)

        if (!validargame) {
            return res.send('Invallid not found').status(400);
        }
        
        await Game.findByIdAndRemove(req.params.gameid);

        return res.send(`Game deleted with sucess, id deleted: ${req.params.gameid}`);


    } catch (err) {
        const mensagem = ' Erro delete game with id parameter';
        console.log(`\x1b[41m%s\x1b[37m`,mensagem, `\x1b[0m \n ${err}`);

        return res.status(400).send({error: 'Error deleting game'});
    }
});

//primeira versão
module.exports = (app) => app.use('/v1', router);

