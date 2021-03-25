import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/pages/homepage/homepage.component';
import Shop from './components/pages/shop/shop.component';

function App() {
  return (
    <div className='container mt-5'>
      <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
