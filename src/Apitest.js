import React, { Component } from 'react';


class Apitest extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setTimeout(() => {
                    this.setState({ post: result })
                }, 1500);

            })


    }
    render() {
        return (
            <div className="Apitest">
                <h1>Notre dernier article :</h1>
                {(this.state.post.title) ? this.state.post.title : <p>Chargement...</p>}
            </div>
        );
    }
}

export default Apitest;