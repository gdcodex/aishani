import React from 'react';


const User = ({array}) => {

    return (
        <div className="user-input" style={{ "border-color": (array.f === true) ? "#FCBAD3" : "plum" }}>
            <form onSubmit={array.c}>
                <input type="text" placeholder=" Your name" name="first" value={array.a} onChange={array.d} />
                <input type="text" placeholder="Your last name" name="last" value={array.b} onChange={array.d} />
                <input type="text" placeholder="Your hobby" name="hobby" value={array.g} onChange={array.d} />
                <input type="text" placeholder="Fav places" name="places" value={array.h} onChange={array.d} />
                <input type="text" placeholder="Fav song" name="song" value={array.i} onChange={array.d} />
                <input type="text" placeholder="Fav food" name="food" value={array.j} onChange={array.d} />
                <div className="submit">
                <input type="reset" id="reset" style={{ "background": (array.f === true) ? "rgb(223, 149, 186)" : "plum" }} onClick={array.e}></input>
                <button type="submit" style={{ "background": (array.f === true) ? "rgb(223, 149, 186)" : "plum" }}>Vamos</button>
                </div>
            </form>
        </div>
    )
}
export default User;