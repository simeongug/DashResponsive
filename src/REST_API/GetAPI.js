import React, { Component } from 'react';
import findAll from '../REST_API/controller/utilisateur.controller.js';

class GetAPI extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch('mongodb://127.0.0.1:27017/dbOK')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setTimeout(() => {
                    this.setState({ post: result })
                }, 500);

            })


    }
    render() {
        return (
            <div className="Affichage API">
                <h1>Nos derniers clients :</h1>
                {(this.state.post.user) ? this.state.post.user : <p>Chargement...</p>}
            </div>
        );
    }
}

export default GetAPI;