import { useDispatch } from "react-redux";
import "../style/CardStyle.css"
import { addProductToCart } from "../stores/cart/actions";
const CardProduto = (product) => {
  const dispatch = useDispatch();
  
  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }
  return (
  <div className="nft">
    <div className='main'>
      <img className='tokenImage' src={product.image} alt="imagem do produto" />
      <h2>{product.title} #{product.id}</h2>
      <p className='description'>{product.description}</p>
      <div className='tokenInfo'>
        <div className="price">
          <p>$ {product.price}</p>
        </div>
      </div>
      <hr />
      <button onClick={handleProductClick}>adicionar ao carrinho</button>
    </div>
  </div>
  );
}


export default CardProduto;