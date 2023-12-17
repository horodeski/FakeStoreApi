import { useState } from "react";
import CardProduto from "../Components/CardProduto";
import api from "../services/api";
import Carrinho from "../Components/Carrinho";
import "../style/home.css"

export default function Home() {
  const [products, setProducts] = useState([]);
  async function BuscaProdutos() {
    const response = await api.get("products");
    setProducts(response.data);
  }
  BuscaProdutos();
  return (
    <main>
      <section className="products">
      {products.map((product) => (
        <CardProduto
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      ))}
      </section>
      <Carrinho />
    </main>
  );
}
