import React from 'react'
import Card from '@material-ui/core/Card'
import '../css/diary.css'

function Diary() {
    const array = [1,2,3,4,2,2,2]
    return (
        <div>
        {array.map(e=>
            <div className="diary">
            <Card style={{background:"#FF8080",color:"seashell",padding:"10px"}}>
            <h3 style={{color:"rgb(56, 55, 54)"}}>Diary page</h3>
            <p className="diary-parah">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, hic nobis aut ea amet provident cupiditate voluptates enim eos delectus sit debitis veritatis ipsa ducimus illo rem numquam sint, harum molestias animi aliquam quo iste. Ut architecto doloribus quos veniam blanditiis aspernatur. Maiores ex nam perferendis, laudantium vel excepturi id!</p>
        </Card>
        </div>
        )}
        </div>
    )
}

export default Diary
//FF8080
