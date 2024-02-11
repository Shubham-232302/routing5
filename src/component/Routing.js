import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom' 
import Header from './Header'
import Footer from './Footer'
import Post from './Post'
import Profile from './Profile'
import Home from './Home'

const App = () => {
    return(
        <div className='container'>
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/post" component={Post}/>
                <Route path="/profile" component = {Profile}/>
            <Footer/>
        </BrowserRouter>
        </div>

    )
}

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<App/>)
export default App