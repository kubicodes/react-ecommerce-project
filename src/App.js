//React stuff
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//redux related
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

//utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//components
import HomepageComponent from './components/pages/homepage/homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App(props) {
  const { setCurrentUser } = props;
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);

  useEffect(() => {
    setUnsubscribeFromAuth(() => {
      auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = createUserProfileDocument(userAuth);
          (await userRef).onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        } else setCurrentUser(userAuth); //will be null because nothing returned from userAuth
      });
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={HomepageComponent} />
          <Route exact path='/shop' component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)), //dispatch: way for redux to know to pass the state to all actions
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
