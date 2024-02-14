import React from 'react'

const PostDetails =(props) =>{
// props contains details like match(for param), location(from QueryParam), history(redirection)
// do console.log(props) and inspect on browser for more details
console.log(props.location.search)
    return(
        <div className='panel panel-info'>
            <div className='panel-heading'>
            {props.match.params.item} Page
            </div>
            <div className='panel-body'>
                <h1>{props.match.params.item} Page</h1>
                <p>This is {props.match.params.item} infromation page</p>
                <p>You are on page number {props.location.search.split("=")[1]}</p>
            </div>
        </div>
    )
}

export default PostDetails