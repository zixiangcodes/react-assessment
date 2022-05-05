import React from 'react';

import HomePage from './HomePage';
import Latestpromotions from './Latestpromotions';
import Delivery from './Delivery';
import Takeaway from './Takeaway';
import AboutUs from './AboutUs';
import OrderPage from './OrderPage';
// import Test from './Test';

import './App.css'; // its loading here.

import { 
    BrowserRouter as Router, 
    Link, 
    Routes, 
    Route
} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">[Home Page]</Link>
                        </li>
                        <li>
                            <Link to="/Latestpromotions">[Latest Promotions]</Link>
                        </li>
                        <li>
                            <Link to="/Delivery">[Delivery]</Link>
                        </li>
                        <li>
                            <Link to="/Takeaway">[Takeaway]</Link>
                        </li>
                        <li>
                            <Link to="/AboutUs">[About Us]</Link>
                        </li>
                        <li>
                            <Link to="/OrderPage">[Store Order Tracker]</Link>
                        </li>
                        {/* <li>
                            <Link to="/Test">[Test]</Link>
                        </li> */}
                    </ul>
                </nav>

                <Routes>
                    {/* <Route path="/Test"
                        element={<Test />} /> */}
                    <Route path="/OrderPage"
                        element={<OrderPage />} />
                    <Route path="/AboutUs"
                        element={<AboutUs />} />
                    <Route path="/Takeaway"
                        element={<Takeaway />} />
                    <Route path="/Delivery"
                        element={<Delivery />} />
                     <Route path="/Latestpromotions"
                        element={<Latestpromotions />} />
                     <Route path="/" 
                        element={<HomePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// class App extends React.Component {
//     render() {
//         return (
//             <div className='app'>
//                 <h1>
//                 <img src="images/pizzalogo.png" className="pizzalogo" alt="Logo, but nothing shows up" />
//                     <h2>
//                     <img src="images/homepage.jpg" className="homepage" alt="Pizza, but nothing shows up" />
                    
//                         <h3 className="greetings">
//                             Welcome to Dominoes! 
//                             <h4>Start your order</h4>
//                             <p className="Takeaway">  
//                                 <a /**/ href="OrderPage.html">Takeaway!</a>
//                                 {/*<input type="button" onClick={"window.location.href='https://www.w3docs.com';"} value="w3docs"/> */} 
//                             </p>
//                             <p className="Delivery">
//                                 <a /**/ href="OrderPage.html">Delivery!</a>
//                             </p>
//                         </h3>
//                     </h2>
//                 </h1>
//             </div>
//         );
//     }
// } 

// import { Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { NavLink, Switch, Route } from 'react-router-dom';




// export default HomePage;
// export default App;


