import { useSelector } from "react-redux";
import CardProduto from "../CardProduto";

export default function ModalCarrinho() {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  return (
    <div className="modal">
      <div className="header">
        <h2>Carrinho</h2>
        <div className="all-produts">
          {products.map((product) => (
            <CardProduto          product={product} key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            id={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
