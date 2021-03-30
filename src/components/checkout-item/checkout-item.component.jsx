import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>{cartItem.quantity}</span>
    <span className='price'>{cartItem.price}</span>
    <div className='remove-button' onClick={() => removeItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
