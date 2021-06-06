import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { signout } from './actions/userActions';
import AboutScreen from './screens/AboutScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
    const cart = useSelector((state) => state.cart);
    const{cartItems}=cart;

    const userSignin = useSelector((state)=> state.userSignin);
    const {userInfo} = userSignin;
    const dispatch= useDispatch();
    const signoutHandler= ()=>{
        dispatch(signout());

    }
  return (
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">Dilles</Link>
                </div>
                <div>
                    <Link to="/market">Zemnieku tirgus</Link>
                    <Link to="/cart">Grozs
                    {
                        cartItems.length>0 &&(
                            <span className="badge">{cartItems.length}</span>
                        )
                    }
                    </Link>
                    { userInfo ? (
                            <div className="dropdown">
                                <Link to="#">
                                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                                <ul >
                                    <li>
                                        <Link to="#signout" onClick={signoutHandler}>Iziet</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin">Pierakstities</Link>
                        )
                    }
                    
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path = "/signin" component={SigninScreen}></Route>
              <Route path = "/register" component={RegisterScreen}></Route>
              <Route path = "/about" component={AboutScreen}></Route>
              
            </main>
            <footer className="row center"> 
                <div>
                    <Link to="/about">Par Dillēm</Link>
                    <b href="location.html">Atrašanās vieta</b>
                    <b href="contacts.html">Kontakti</b>
                    <b href="help.html">Palīdzība</b>
                </div>
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
