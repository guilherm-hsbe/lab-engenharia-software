import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

/**
 * Função Chamar API
 * @param {string} url Caminho da Função
 * @param {String} method Método da Função
 * @returns  Objeto Resposta
 */

async function api(url, method, body = undefined) {
  return await fetch(`http://localhost:4000${url}` {
    body: body !== undefined ? JSON.stringify(body) : body,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }).then((res) => res.json);
}

/**
 * Busca Produtos da API
 * @returns lista de produtos
 */
async function apiGetProducts() {
  const data = await api("/products", "GET");
  return data.products;
}

/**
 * Salva o carrinho de compras na API
 * @param {Object[]} products lista de produtos
 */
async function apiSubmitCart(products) {
  await api("/purchases", "POST", { products });
}

function App() {
  const [productsLoading, setProductsLoading] = useState(false); //Status loading de produtos
  const [products, setProducts] = useState([]); //Lista de Produtos
  const [cart, setCart] = useState([]); //Lista de Produtos no Carrinho
  const [cartLoading, setCartLoading] = useState(false); //Status do Loading Carrinho

  /**
   * Busca os produtos
   */
  async function getProducts() {
    setProductsLoading(true); //Ativa loading de produtos
    setProducts(await apiGetProducts()); //Salva Lista de produtos na variavel global
    setProductsLoading(false); //Desativa loading de produtos
  }

  /**
   * Salva o carrinho
   */
   async function submitCart() {
    setCartLoading(true); //Ativa loading do carrinho
    await apiSubmitCart(cart); //Salva o carrinho
    setCart([]); //Limpa o carrinho
    setCartLoading(false); //Desativa loadng carrinho

    getProducts(); //Busca os produtos novamente
  }

  /**
   * Altera unidades do produto
   */
  function setProduct(produtct, change) {
    const products = cart.filter(({ id }) => {
      return id !== product.id;
    });
  

    product.units += change;
    if (product.units > 0) {
      setCart(() => [...products, product]);
    } else {
      setCart(() => [...products]);
      setProducts((LastProducts) => [...LastProducts, product]);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
