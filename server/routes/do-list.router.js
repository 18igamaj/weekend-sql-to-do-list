const express = require('express');
const router = express.Router();

// this is how to connect with our database
const pool = require('../modules/pool')


router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "our_toDos" `;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        console.log('sending over rows', result.rows);
    }).catch((error) => {
        console.log('request for tasks failed', error);
        res.sendStatus(500);
    });
});


router.post('/', (req,res) => {
    const newToDo = req.body
    console.log(newToDo)
    const queryText = `
    INSERT INTO "our_toDos" ("todo")
    VALUES ($1);`

    pool.query(queryText,[newToDo.toDo]).then(result => {
        res.sendStatus(201)
    }).catch(error => {
        console.log('Query text:', queryText, 'Our error is:', error)
        res.sendStatus(500)
    })
    
});


router.put('/:id', (req,res) => {
    let idUp = req.params.id
    let queryText = `UPDATE "our_toDos" SET "status" = '1'
    WHERE "id" = $1;`
    pool.query(queryText, [idUp])
    .then(result => {
        console.log('Our task up to date', result.rows)
        res.sendStatus(200)
    }).catch(error => {
        console.log('Our query', queryText, 'error', error);
        res.sendStatus(500);
    })
})


router.delete('/:id',(req,res) => {
    let idDel = req.params.id;
    let queryText = `DELETE FROM "our_toDos" WHERE "id" = $1`;

    pool.query(queryText, [idDel]).then((result) => {
        console.log('removed our task', result.rows);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error with our delete', error)
        res.sendStatus(500)
    })
})












module.exports = router