const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = require('./routes/do-list.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes or as I like to call it our highways
app.use('/doList', router)


// now it's time to turn on our listener to see what port is running
app.listen(PORT, () =>{
    console.log('listening on port', PORT);
});