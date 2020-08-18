
import React from 'react'

let User = (pro) => {
    const {id, name, email} = pro;
    return (
                   
       <tr>
           <td>{id}</td>
           <td>{name}</td>
           <td>{email}</td>
       </tr>
       
    )
}

export default User;
