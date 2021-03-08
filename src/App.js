import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Page/Register/Register';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import Login from './Page/Login/Login';
import Header from './Components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/**Root mặc định để dưới cùng của ứng dụng */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
