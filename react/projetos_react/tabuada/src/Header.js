import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {frutafavorita: "Maçã"}
    }

    // getDerivedStateFromProps
    static getDerivedStateFromProps(props,state){
        return {frutafavorita: props.favcol};
    }

    render() {
        return(
            <h3>Minha fruta favorita é {this.state.frutafavorita}</h3>
        );
    }
}

class Header2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {musicafavorita: "Stargazing"}
    }

    // componentDidMount
    componentDidMount(){
        setTimeout(()=>{
            this.setState({musicafavorita: "Sunflower"})
        },1000);
    }

    render() {
        return(
            <h3>Minha música favorita é {this.state.musicafavorita}</h3>
        );
    }
}

export {Header,Header2};