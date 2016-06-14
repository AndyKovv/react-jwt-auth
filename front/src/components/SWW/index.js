import React from 'react'
import { Link }  from 'react-router'

export default class SWW extends React.Component{

    render(){
        return(
             <div className='text-center'>
                <h2>Something Went Wrong</h2>
                    <br/>
                <Link to='/'>Main Page</Link>
            </div>
        )
    }
}