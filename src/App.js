import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HowItWorks from './HowItWorks';
import HomePage from './HomePage';
import OurServices from './OurServices';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { HomePage  } />
        <Route exact path = '/HowItWorks' component = { HowItWorks  } />
        <Route exact path = '/OurServices' component = { OurServices  } />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
