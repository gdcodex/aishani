import React from 'react'
import '../css/newevent.css'
import Tooltip from '@material-ui/core/Tooltip';

function Newevent() {
    return (
        <div className="new-event">
            <h3>Add life event</h3>
            <form action="" className="event-form">
            <h5 className="form-title">Title</h5>
            <input id="input-t" type="text"/>
            <h5 className="form-description">Event Description</h5>
            <input type="text"/>
            <Tooltip title="Add your event">
            <button type="submit">Add</button>
            </Tooltip>
            </form>
        </div>
    )
}

export default Newevent
