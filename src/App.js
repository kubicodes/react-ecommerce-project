//React stuff
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

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
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)), //dispatch: way for redux to know to pass the state to all actions
});

//app doesn´t need state as prop, so the first argument is null
export default connect(null, mapDispatchToProps)(App);
