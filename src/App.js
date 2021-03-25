import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/pages/homepage/homepage.component';
import Shop from './components/pages/shop/shop.component';
import Header from './components/Header/Header.component';

function App() {
  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <Switch>
          <Route exact path='/' component={HomepageComponent} />
          <Route exact path='/shop' component={Shop} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
