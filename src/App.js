import { Route, Switch } from 'react-router-dom';
import './App.css';
import First from './Components/First/First.js';
import Home from './Components/Home/Home.js';
import Footer from './Layout/Footer.js';
import Header from './Layout/Header.js';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/first" component={First} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
