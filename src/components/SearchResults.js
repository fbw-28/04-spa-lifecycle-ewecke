import React, { Component } from 'react'
import User from './User'

export default class SearchResults extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
        }  
    }

    componentDidMount(){
        //best place to fetch data from server
      /*   this.fetchdata() */

       fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=> this.setState({
            users:data
        }) ) 

    }
       
    render() {
        const {users} = this.state
        return (
            
            <div>
                <h1>search result</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {users.map(item=>{

                    return(
                    <User key={item.id} id={item.id} name ={item.name} email={item.email}/>
                    )

                    })}
                    
                    </tbody>
                </table>
            </div>
            
        )
    }
}

