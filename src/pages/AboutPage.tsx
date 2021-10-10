import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

function AboutPage(): ReactElement {
    const history = useHistory()
    return (
        <div className="px1">
            <h1>Information</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias hic vel aliquid accusamus saepe ex, reiciendis id quis perspiciatis. Eos totam earum quaerat ipsam a corrupti cum porro atque!</p>
           <button className="btn" onClick={():void => history.push('/')} >Go to todo list</button>
        </div>
    )
}

export default AboutPage
