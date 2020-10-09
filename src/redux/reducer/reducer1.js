const initState= {
    posts:["There you go REDUX"," ","We are getting started"]
};

const reducer1 = (state=initState,action)=>{
    switch (action.type){
        case 'RESET':
            return {posts:[]};
            case 'CREATE':
            return {post:['created !!']}
        default:
            return state;    
    }
};

export default reducer1;