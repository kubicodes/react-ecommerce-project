import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        KubiCodes
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/shop'>
              Shop
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact'>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            {currentUser ? (
              <div
                className='nav-link'
                style={{ cursor: 'pointer' }}
                onClick={() => auth.signOut()}
              >
                Sign Out
              </div>
            ) : (
              <Link className='nav-link' to='/signin'>
                Sign In
              </Link>
            )}
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
        {hidden ? null : <CartDropdown />}
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
