import styled from "styled-componentes";

// Botão Personalizado CSS
const SButton = styled.button`
    cursor: pointer;
    padding: 18px 8px;
    width: 100%;
    color: #ffffff;
    background-color: #000000;
    font-size: 18px;
    border: 0;
    border-radius: 8px;
`;

/**
 * Componente de botão
 * @param {HTMLCollection} children Elementos internos
 * @param {Function} onClick Função ao Clicar
 * @param {Boolean} isLoading Status de Loading
 */
function Button({ children, onClick, isLoading = false}) {
    return (
        <SButton onClick={onClick} disabled={isLoading}>
            {isLoading ? "Carregando..." : children }
        </SButton>
    )
}

export default Button;