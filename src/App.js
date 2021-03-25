import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/pages/homepage/homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/Header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
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

export default App;
