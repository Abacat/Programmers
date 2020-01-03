const mongoose =  require('../../database/index');

const GameSchema = mongoose.Schema({
    name: {
        type: String
        ,require: true
        ,unique: true
        ,lowercase:true
    },
    gender:{
        type: String
        ,require: true
        ,lowercase:true
    },
    description:{
        type: String
        ,require: true
    },
    company:{
        type: String
        ,require: true
    },
    created_at:{
        type: Date
        ,default: Date.now,
    },
    update_at:{
        type: Date
    }
 });

 const Game = mongoose.model('Game', GameSchema);

 module.exports = Game;