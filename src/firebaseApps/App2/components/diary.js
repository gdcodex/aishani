import React from 'react'
import Card from '@material-ui/core/Card'
import '../css/diary.css'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

function Diary(props) {
    const array = [1,2,3,4,2,2,2]
    return (
        <div>
        {props.Event && props.Event.map((e,i)=>
            <div key={e+i} className="diary">
            <Card style={{background:"#FF8080",color:"seashell",padding:"10px"}}>
            <h3 style={{color:"rgb(56, 55, 54)"}}>{e.title}</h3>
            <p className="diary-parah">{e.description}</p>
        </Card>
        </div>
        )}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        Event: state.firestore.ordered.Diary
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "Diary" }
    ])
)(Diary)
//FF8080
