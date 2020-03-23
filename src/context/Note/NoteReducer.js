import methods from '../methods';

export default(state, action) => {
    switch(action.type){
        case methods.GET_NOTE:
            return{
                ...state,
                returnData: action.payload,
                loading: false
            };
            break;
            
        default:
            return state;    
    }
};