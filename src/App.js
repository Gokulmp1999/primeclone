
import './App.css';
import Header from './Component/Header/Header';
import Rent from './Component/Rent/Rent';
import Page from './Component/WelcomePage/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Store from './Component/Store/Store';
import Detail from './Component/Detail/Detail';
import Video from './Component/Video';
import Channels from './Component/Channels/Channels';
import Login from './Component/Login/Login';
import { auth} from '../src/Firebase/Firebase';
import { useEffect } from 'react';
import { useStateValue } from '../src/StateProvider';
import UserRegister from './Component/UserRegister/UserRegister';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })

  }, []);
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/">
            <Header />
            <Page />
            <Rent />
          </Route>
          <Route path="/store">
            <Header />
            <Store />
          </Route>
          <Route path='/detail/:id'>
            <Header />
            <Detail/>
          </Route>
          <Router path='/channel'>
          <Header />
            <Channels/>

          </Router>
          <Router path='/login'>
          <Login/>

          </Router>
          <Router path='/register'>
         <UserRegister/>

          </Router>
        </Switch>

      </Router>
      {/* <Video/> */}


    </div>
  );
}

export default App;
