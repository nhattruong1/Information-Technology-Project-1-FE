const initialState = {
    list: []
}

const cartReducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'ADD_ITEM':{
            const newList = [...state.list];
            newList.push(action.payload);

            return {
                ...state,
                list: newList,
            };
        }
        case 'DELETE_ITEM':{
            return {
                ...state,
                list: state.list.filter((item, index) => index !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;