 const reducer2 = (state=true,action)=>{
    switch (action.type){
        case 'IN_OUT':
            return !state;
        default:
            return false;  
    }
    return false;
};
export default reducer2;