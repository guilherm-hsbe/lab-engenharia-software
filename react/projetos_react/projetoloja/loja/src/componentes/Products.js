import styled from "styled-components";

// Bloco Personalizado CSS
const SDiv = styled.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cusor: pointer;

    img {
        width: 100%;
        height: 140px;
        border-radius: 5px;
    }
`;

// Bloco de Informação Personalizado CSS
const SDivInfo = styled.div`
    padding: 15px;
    
    p {
        font-size: 15px;
    }

    span {
        font-size: 20px;
        font-wight: bold;
    }
`;

// Listagem de Produto
/**
 * @param {Object} product Produto para listagem
 * @param {Function} onClick Função de seleção
 */
function Product({ product, onClick }) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <img src={product.image} alt={product.name} />
            <SDivInfo>
                <p>{product.name}</p>
                <span>R${product.price}</span>
            </SDivInfo>
        </SDiv>
    );
}

// Seção Personalizada CSS
const SSection = styled.section`
    overflow: auto;
    padding: 20px;
    display: grid;
    grid-template-colums: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 230px;
    gap: 20px
`;

/**
 * Listagem de Produtos
 * @param {Object[]} products Produtos para listagem
 * @param {Function} onClick Função de Seleção
 */
function Products({ products, onClick, isLoading = false }) {
    return (
        <SSection>
            {isLoading //Verifica loading}
            ? "Carregando..."
            : products.lenght > 0 //Verifica se existem produtos
            ? products.maps((product) => (
                <Product key={product.id} product={product} onClick={onClick} />
            ))
            : "Nenhum produto encontrado!"}
        </SSection>
    );
}

export default Products;