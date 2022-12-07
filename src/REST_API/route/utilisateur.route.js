const express = require('express');
const router = express.Router();
const userController = require('..REST_API/controller/utilisateur.controller');
const { findByIdAndDelete } = require('..REST_API/model/utilisateur.model');

/* const {
    ajouterUtilisateur,
    getTousUtilisateurs,
    getUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    testAll,
} = require('../controller/utilisateur');
 */

router.get('/', userController.test);
router.post('/', userController.create);
router.get('/:id', userController.findOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
/* router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getTousUtilisateurs);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(modifierUtilisateur);
router.route("/utilisateurs/:id").delete(supprimerUtilisateur); */


module.exports = router