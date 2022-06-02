import React, {Component} from 'react'
import Header from './components/header/Header'
import Sb from './components/sb/Sb'


class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <div className = '_header'>
                    <Header />
                </div>
            </>
        )
    }
}

export default App;

