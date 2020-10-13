import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

const Section = (props) =>{
    return(
        <>
            <div  style={{display:"inline-block",position:"relative", left:"100px",top:"-2px"}} className="section">
            <h3>Band :</h3>
                {
                    props.user && props.user.map((e,i)=>
                    <>
                    <p key={e+i}>{e.band}</p>
                    </>
                    )
                }
            </div>
        </>
    )
}


const mapStateToProps = (state)=>{
    return{
        user: state.firestore.ordered.Users
    }
}


export default compose(
    connect(mapStateToProps),firestoreConnect(
        [
            {collection:"Users"}
        ]
    )
)(Section)