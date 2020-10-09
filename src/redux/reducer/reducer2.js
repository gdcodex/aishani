 const reducer2 = (state=true,action)=>{
    switch (action.type){
        case 'IN_OUT':
            return !state;
        default:
            return state;  
    }
    
};
export default reducer2;