import React from "react";

// getDerivedStateFromProps
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {frutafavorita: "Maçã"}
    }

    static getDerivedStateFromProps(props,state){
        return {frutafavorita: props.favcol};
    }

    render() {
        return(
            <div>
                <hr></hr>
                <h3>Header</h3>
                <h4>Minha fruta favorita é {this.state.frutafavorita}</h4>
            </div>
        );
    }
}

// componentDidMount
class Header2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {musicafavorita: "Stargazing"}
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({musicafavorita: "Sunflower"})
        },1500);
    }

    render() {
        return(
            <div>
                <h4>Minha música favorita é {this.state.musicafavorita}</h4>
            </div>
        );
    }
}

export {Header,Header2};