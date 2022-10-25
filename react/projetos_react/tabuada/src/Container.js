import React from "react";

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true};
    }

    delHeader = () => {
        this.setState({show: false});
    }

    render(){
        let myheader;
        if (this.state.show){
            myheader = <Child/>;
        };

        return(
            <div>
                <hr></hr>
                <h3>Container</h3>
                {myheader}
                <button type="button" onClick={this.delHeader}>Apague o Título</button>
            </div>
        );
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        alert('O Componente Header está prestes a ser desmontado.');
    }

    render(){
        return(
            <h4>Olá Mundo!</h4>
        )
    }
}

export default Container;   