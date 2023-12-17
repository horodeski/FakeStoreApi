import "../style/CardStyle.css"
export default function CardProduto(product) {
  return (
  <div className="nft">
    <div className='main'>
      <img className='tokenImage' src={product.image} alt="imagem do produto" />
      <h2>{product.title} #{product.id}</h2>
      <p className='description'>{product.description}</p>
      <div className='tokenInfo'>
        <div className="price">
          <ins>◘</ins>
          <p>$ {product.price}</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div>
      <hr />
      <div className='creator'>
        <div className='wrapper'>
          <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
        </div>
        <p><ins>Creation of</ins> Kiberbash</p>
      </div>
    </div>
  </div>
  );
}
