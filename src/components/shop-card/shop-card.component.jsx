import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const ShopCard = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
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
          <button className='btn btn-dark' onClick={() => addItem(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopCard);
