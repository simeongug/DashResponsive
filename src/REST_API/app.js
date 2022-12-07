// const express = require('express');
// const { connecter } = require('./bd/connect');
// const routesUtilisateur = require("./route/utilisateur");
// const app = express();

// /*app.get('/', (req, res) => {
//     console.log("Salut les gars ! ");
// });*/

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get('/', (req, res) => { res.json({ "message": "Hello" }); });

// app.use("/api/v1", routesUtilisateur);
// connecter("mongodb://127.0.0.1:27017/", (erreur) => {
//     if (erreur) {
//         console.log("Erreur lors de la connexion a la base de données");
//         process.exit(-1);
//     } else {
//         console.log("Connexion avec la bdd établie");
//         app.listen(3000);
//         console.log("Attente des requêtes au port 3000");
//     }
// }
// );


// /*

// const url = "http://localhost:3000/api/v1/utilisateurs/"
// const rep = exec url
// const repJson = await fetch(rep);


// */

const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 4000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/dbOK', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

// define a root/default route
app.get('/', (req, res) => {
    res.json({ "message": "Hello World" });
});

// Require Users routes
const userRoutes = require('./route/utilisateur.route')
// using as middleware
app.use('/api/users', userRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});