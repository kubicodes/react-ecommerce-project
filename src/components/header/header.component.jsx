import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        KubiCodes
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
