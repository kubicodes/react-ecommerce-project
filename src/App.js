//React stuff
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//utils
import { auth } from './firebase/firebase.utils';

//components
import HomepageComponent from './components/pages/homepage/homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);

  useEffect(() => {
    setUnsubscribeFromAuth(() => {
      auth.onAuthStateChanged(user => {
        setCurrentUser(user);
      });
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
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

export default App;
