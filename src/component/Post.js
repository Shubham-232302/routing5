import React from 'react'
import {Link} from 'react-router-dom'

const Post =() =>{

    return(
        <div className='panel panel-info'>
            <div className='panel-heading'>
            Post Page
            </div>
            <div className='panel-body'>
                <h1>Post Page</h1>
                <p>This is Post Page</p>
                <h2>Python</h2>
                <Link to="/post/python?page=1" className="btn btn-success">Python</Link>
                <h2>React</h2>
                <Link to="/post/react?page=2" className="btn btn-warning">React</Link>
                <h2>Java</h2>
                <Link to="/post/java?page=3" className="btn btn-danger">Java</Link>
                
            </div>
        </div>
    )
}

export default Post