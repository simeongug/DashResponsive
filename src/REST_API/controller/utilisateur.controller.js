/* const { Utilisateur } = require("../model/utilisateur")
const client = require("../bd/connect");
const { ObjectID } = require("bson"); */
const User = require('../model/utilisateur.model.js');

// const ajouterUtilisateur = async (req, res) => {
//     try {
//         let utilisateur = new Utilisateur(
//             req.body.noms,
//             req.body.adresse,
//             req.body.telephone
//         );

//         let result = await client
//             .bd()
//             .collection("utilisateurs")
//             .insertOne(utilisateur);

//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };

// //On remplit un tableau avec les données de la BDD
// const getTousUtilisateurs = async (req, res) => {
//     try {
//         let cursor = client.bd().collection("utilisateurs").find();
//         let result = await cursor.toArray();
//         if (result.length > 0) {
//             res.status(200).json(result);
//             console.log(utilisateur);
//         } else {//Si le tableau est vide
//             res.status(204).json({ msg: "Aucun utilisateur trouvé" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };
exports.test = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};
//Create
exports.create = (req, res) => {
    //Valider la requete
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // créer un nouvel user
    const user = new User({
        noms: req.body.noms,
        adresse: req.body.adresse,
        telephone: req.body.telephone
    });

    // sauvegarder les users dans la bdd
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new user."
            });
        });
};

// Afficher tous les users
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of users."
            });
        });
};


// Trouver un user avec l'id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error getting user with id " + req.params.id
            });
        });
};

// Modifier un user
exports.update = (req, res) => {
    // Valider la requete
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Trouver un user et le modifier
    User.findByIdAndUpdate(req.params.id, {
        noms: req.body.noms,
        adresse: req.body.adresse,
        telephone: req.body.telephone
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.id
            });
        });
};

// Supprimer un user grace à l'Id
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            res.send({ message: "user deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.id
            });
        });
};


// const getUtilisateur = async (req, res) => {
//     try {
//         let id = new ObjectID(req.params.id);
//         let cursor = client.bd().collection("utilisateurs").find({ _id: id });
//         let result = await cursor.toArray();
//         if (result.length > 0) {
//             res.status(200).json(result[0]);
//         } else {//Si le tableau est vide
//             res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };

// const modifierUtilisateur = async (req, res) => {
//     try {
//         let id = new ObjectID(req.params.id);
//         let nNoms = req.body.noms;
//         let nAdresse = req.body.adresse;
//         let nTelephone = req.body.telephone;

//         let result = await client
//             .bd()
//             .collection("utilisateurs")
//             .updateOne(
//                 { _id: id },
//                 { $set: { noms: nNoms, adresse: nAdresse, telephone: nTelephone } }
//             );
//         if (result.modifiedCount == 1) {
//             res.status(200).json({ msg: "Modification réussie !" });
//         } else {
//             res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };

// const supprimerUtilisateur = async (req, res) => {
//     try {
//         let id = new ObjectID(req.params.id);

//         let result = await client
//             .bd()
//             .collection("utilisateurs")
//             .deleteOne(
//                 { _id: id },
//             );
//         if (result.deletedCount == 1) {
//             res.status(200).json({ msg: "Suppression réussie !!" });
//         } else {
//             res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// };

// module.exports = { ajouterUtilisateur, getTousUtilisateurs, getUtilisateur, modifierUtilisateur, supprimerUtilisateur };