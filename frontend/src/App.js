import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import SignupCard from './Components/Signup/SignupCard';
import LoginCard from './Components/Login/LoginCard';
import ForgotPasswordCard from "./Components/ForgotPassword/ForgotPasswordCard";
import ImageUpload from "./Components/testSystem/ImageUpload";
import FeedsMain from "./Components/Feeds/FeedsMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <LoginCard></LoginCard> */}

     

      <Router>
      <Switch>
          <Route path="/signup">
          <SignupCard></SignupCard>

          </Route>

          <Route path="/forgotpassword">
          <ForgotPasswordCard></ForgotPasswordCard>
          </Route>
          
          
          <Route path="/test">
          <ImageUpload></ImageUpload>
          </Route>

          <Route path="/login">
          <LoginCard></LoginCard>
          </Route>
          
          <Route path="/">
          <FeedsMain></FeedsMain>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
