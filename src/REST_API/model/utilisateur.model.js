/* class Utilisateur {
    constructor(noms, adresse, telephone) {
        this.noms = noms;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}

module.exports = { Utilisateur }; */
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    noms: String,
    adresse: String,
    telephone: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);