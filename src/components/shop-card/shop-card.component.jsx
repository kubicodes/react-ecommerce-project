const ShopCard = ({ name, imageUrl, price }) => {
  return (
    <div className='col mb-4'>
      <div className='card h-100'>
        <img
          src={imageUrl}
          className='card-img-top'
          alt={name}
          style={{ maxWidth: '400px', height: '250px' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-title'>{`$${price}`}</p>
          <button className='btn btn-dark'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
