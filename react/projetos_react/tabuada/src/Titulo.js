import React from 'react';
import react from 'react';

class Titulo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: this.props.titulo,
            texto: this.props.texto,
            link: this.props.link,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.texto}</p>
                <a href={this.state.link}>{this.state.link}</a>
            </div>
        );
    }
}

export default Titulo;