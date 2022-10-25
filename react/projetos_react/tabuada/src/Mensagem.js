import React from "react";

class Mensagem extends React.Component {
    exibir = (mnsg) => {
        alert(mnsg);
    }
    render() {
        return(
            <div>
                <hr></hr>
                <h3>Mensagem</h3>
                <button onClick={()=>this.exibir("Olá Mundo!")}>Clique</button>
            </div>
        );
    }
}

export default Mensagem;