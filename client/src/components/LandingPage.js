import React from 'react'
import {useHistory} from 'react-router-dom'

function LandingPage() {
    const history = useHistory();
    const redirect  = (e)=>{
        history.push(`/${e.target.id}`);
    }
    return (
        <div>
            <button onClick={redirect} id="conductor">Conductor</button>
            <button onClick={redirect} id="user">User</button>
        </div>
    )
}

export default LandingPage
