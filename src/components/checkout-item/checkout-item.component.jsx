import { connect } from 'react-redux';
import {
  removeItemFromCart,
  addItemToCart,
  decreaseItemFromCart,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseItem }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={cartItem.imageUrl} alt='item' />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => decreaseItem(cartItem)}>
        &#10094;
      </div>
      <span className='value'>{cartItem.quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>{' '}
    <span className='price'>{cartItem.price}</span>
    <div className='remove-button' onClick={() => removeItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  decreaseItem: item => dispatch(decreaseItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
