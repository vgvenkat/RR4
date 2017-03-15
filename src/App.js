import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css'
const Home = (props) => <h1>Home</h1>


const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink to={{pathname:"/about"}}>About</NavLink>
        <NavLink replace to="/children">Children</NavLink>
    </nav>
)
const App = () => (
    <Router>
        <div>
            <Links/>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={()=> <h1>About</h1>} />
            <Route path="/children" children={({match})=>  match && <h1>Children</h1>} />

        </div>
    </Router>
)

export default App
