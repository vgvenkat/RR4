import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css'
const Home = (props) => {
    console.log(props);
    return <h1>Home</h1>
}

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to={{pathname:"/about"}}>About</Link>
        <Link replace to="/children">Children</Link>
        
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
