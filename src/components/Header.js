import React from 'react'

export default function Header() {
    return (
        <div style={{"display":"flex", "justifyContent":"space-between"}}>
            <div className="left"><h2>User Search</h2></div>
            {/* <div className="right"> <a href="#">Search</a> || <a href="#">About</a></div> */}
        </div>
    )
}
