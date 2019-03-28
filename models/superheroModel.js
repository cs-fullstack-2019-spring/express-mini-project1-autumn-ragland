var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperheroSchema = new Schema (
    {
        'id':Number,
        'name':String,
        'powers.intelligence':Number,
        'powers.strength':Number,
        'powers.speed':Number,
        'powers.combat':Number,
        'powers.wealth':Number,
        'image':String,
    }
);

module.exports = mongoose.model('superhero', SuperheroSchema);