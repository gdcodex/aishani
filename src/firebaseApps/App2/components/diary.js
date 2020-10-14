import React from 'react'
import Card from '@material-ui/core/Card'
import '../css/diary.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

function Diary(props) {





    if (!props.authstatus.uid) return <Redirect to='/login' />
    return (
        <div>
            {/*props.uEvent.id===props.event.authorId &&*/ /*props.Event && props.Event.*/
                props.Event && props.Event.filter(e => {
                    return e.authorId === props.authstatus.uid /*user specific */
                }).map((e, i) =>
                    <div key={e + i} className="diary">
                        <Card style={{ background: "#FF8080", color: "seashell", padding: "10px" }}>
                            <h3 style={{ color: "rgb(56, 55, 54)" }}>{e.title}</h3>
                            <p className="diary-parah">{e.description}</p>
                            <p className="created-by">{moment(e.createdAt.toDate()).calendar()}, by {e.firstname} </p>
                        </Card>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Event: state.firestore.ordered.Diary,
        uEvent: state.firestore.ordered.user,
        authstatus: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "Diary" },
        { collection: "user" }
    ])
)(Diary)
//FF8080
