var express = require('express');
var router = express.Router();
var SuperheroCollection = require('../models/superheroModel');

//read all superheros
router.get('/', (req, res) => {
    SuperheroCollection.find({}, (error, results) => {
        if (error) res.send(error);
        else {
            res.render('index', {allEntries: results});
            console.log(results)
        }
    })
});

//read one superhero
router.get('/find', (req, res) => {
    res.render('find')
});

router.post('/find', (req, res) => {
    SuperheroCollection.findOne({id: req.body.id}, (error, results) => {
        if (error) res.send(error);
        else {
            res.render('find', {findResults: results})
        }
    })
});

//create a superhero
router.get('/add', (req, res) => {
    res.render('add')
});

router.post('/add', (req, res) => {
    SuperheroCollection.create(req.body, (error) => {
        if (error) res.send(error);
        else {
            res.render('add', {isSent: 'sent'})
        }
    })
});

//update a superhero
router.get('/edit', (req, res) => {
    res.render('edit')
});

router.post('/edit', (req, res) => {
    SuperheroCollection.findOne({id: req.body.id}, (error, results) => {
        if (error) res.send(error);
        else {
            console.log(results);
            res.render('editChange', {findResults: results})
        }
    })
});
//fixme
router.post('/editChange', (req, res) => {
    SuperheroCollection.updateOne(req.body, (error) => {
            if (error) res.send(error);
            else {
                console.log(req.body);
                // res.render('editChange',{findResults:req.body,isSent:'sent'})
                res.send('updated')
            }
        })
});

//delete a superhero
router.get('/delete', (req, res) => {
    res.render('delete')
});

router.post('/delete', (req, res) => {
    SuperheroCollection.deleteOne({id:req.body.id}, (error) => {
        if (error) res.send(error);
        else {
            console.log(req.body);
            res.render('delete', {isSent: 'sent'})
        }
    })
});

module.exports = router;
