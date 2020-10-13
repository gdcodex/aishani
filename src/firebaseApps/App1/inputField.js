import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { renderBuddy } from '../../redux/actions'


const Input = (props) => {
    const [user, setuser] = useState({
        name: '',
        band: '',
    });
    const inputU = (e) => {
        const { value, name } = e.target;
        setuser((p) => {
            return {
                ...p, [name]: value
            }
        })
    }
    return (
        <>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className="userInput1" value={user.name} onChange={inputU} />
            <div>
                <label htmlFor="band">Band: </label>
                <input type="text" name='band' className="userInput2" value={user.band} onChange={inputU} />
            </div>
            <button style={{ display: "block" }} onClick={() => {
                setuser(() => {
                    return {
                        name: '',
                        band: '',
                    }
                })
                props.renderBuddy(user)
            }}>Save</button>
            <div style={{display:"inline-block"}} className="name-section">
             <h2>Our People:</h2> 
            
            {
                props.ouruser && props.ouruser.map((e, i) =>
                   <>
                   <p key={e + i}>{e.name}</p>
                   </>
                )
            }
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        ouruser: state.firestore.ordered.Users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderBuddy: (user) => dispatch(renderBuddy(user))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "Users" }
    ])
)(Input)







{/* {
                user.details && [
                    <>
                    <p>Name:{user.name}</p>
                    <p>Band:{user.band}</p>
                    </>,<h1>Successful gerem bud</h1>
                    ]
            } */}