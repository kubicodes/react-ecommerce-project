import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/pages/homepage/Homepage';

function App() {
  return (
    <div className='container mt-5'>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
