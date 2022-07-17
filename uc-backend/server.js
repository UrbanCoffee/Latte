// = Required Libraries ===
const express   = require('express');
const cors      = require('cors');
const config    = require('config');
const mongoose  = require('mongoose');
const path      = require('path');

// = Request Handlers ===
const docHandler    = require('./handlers/docHandler');
const imgHandler    = require('./handlers/imgHandler');
const comHandler    = require('./handlers/comHandler');

// = Set up Server ===
const app  = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Connect to MongoDB
const db = config.get('mongoURI');

mongoose.connect(db,
    err => {
        if(err)
            throw err;
        console.log("Connected to MongoDB");
    });

// = API Endpoints ===
app.get('/getDocument/:docID', docHandler.getDocument);
app.get('/getDocImages/:docID/:image', imgHandler.getDocImage);
app.get('/getComment/:comID', comHandler.getComment );

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));