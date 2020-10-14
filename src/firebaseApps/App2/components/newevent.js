import React, { useState } from 'react'
import '../css/newevent.css'
import Tooltip from '@material-ui/core/Tooltip';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createevent } from '../redux/actions'
import {Redirect } from 'react-router-dom'


function Newevent(props) {


    const [event, setevent] = useState({
        title: "",
        description: ""
    })
    const inputevent = (e) => {
        const { value, name } = e.target
        setevent((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    if(!props.authstatus.uid) return <Redirect to='/login'/>
   
    return (
        <div className="new-event">
            <h3>Add life event</h3>

            <form onSubmit={(e) => {
                e.preventDefault();
                setevent(() => {
                    return {
                        title: "",
                        description: ""
                    }
                })
                props.createevent(event)

            }} className="event-form">

                <h5 className="form-title">Title</h5>
                <input id="input-t" type="text" name="title" value={event.title} onChange={inputevent} />

                <h5 className="form-description">Event Description</h5>
                <input type="text" name="description" value={event.description} onChange={inputevent} />
                <Tooltip title="Add your event">
                    <button type="submit">Add</button>
                </Tooltip>

            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        authstatus :state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createevent: (event) => dispatch(createevent(event))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "Diary" }
    ])
)(Newevent)
