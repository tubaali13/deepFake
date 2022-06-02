import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header'
import Sb from './components/sb/Sb'
import SignIn from './components/signin/SignIn';


class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <Router>
                  <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/signin" element={<SignIn />} />

                  </Routes>
                </Router>
                
            </>
        )
    }
}

export default App;

