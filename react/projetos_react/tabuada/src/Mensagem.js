import React from "react";

class Mensagem extends React.Component {
    exibir = (mnsg) => {
        alert(mnsg);
    }
    render() {
        return(
            <button onClick={()=>this.exibir("Olá Mundo!")}>Clique</button>
        );
    }
}

export default Mensagem;