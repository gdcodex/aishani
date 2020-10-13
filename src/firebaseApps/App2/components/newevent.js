import React from 'react'
import '../css/newevent.css'

function Newevent() {
    return (
        <div className="new-event">
            <h3>Add life event</h3>
            <form action="" className="event-form">
            <h5 className="form-title">Title</h5>
            <input id="input-t" type="text"/>
            <h5 className="form-description">Event Description</h5>
            <input type="text"/>
            <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Newevent
