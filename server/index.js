const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const distDir = "../dist/";
const uri = "mongodb+srv://123:123@cluster0.boxey.mongodb.net/basededonnee?retryWrites=true&w=majority";
const Card = require('./model/card.model');

// Déclaration d'instance et connexion BdD

const app = express();
var promise = mongoose.connect(uri, { useNewUriParser: true });

promise.then(() => {
    console.log('DB Connected');
    app.listen("3000", () => {
        console.log("Listening on port 3000 !");
    });
});

app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, distDir + "/index.html"));
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());





// ROUTES


app.post('/api/movies', (req, res) => {
    var newCard = new Card(req.body);

    newCard.save((err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        res.send(obj);
    });
});

app.get('/api/movies', (req, res) => {
    Card.find({}, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

// Le :id sera autimatiquement transofrmé par l'identifiant envoyé apr la requête xhttp
app.get('/api/movies/:id', (req, res) => {
    // Pour effectuer une recherche on va utiliser le modèle
    // BodyParser permet de conserver l'id dans req.params.id
    Card.findOne({ _id: req.params.id }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    })
});

app.put('/api/movies/:id', (req, res) => {
    Card.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }

        return res.send(obj);
    });
});

app.delete('/api/movies/:id', (req, res) => {
    Card.deleteOne({ _id: req.params.id }, (err, obj) => {
        if (err) {
            console.log(err);
            return res.send(500);
        }
        res.status(204).end();
    });
});