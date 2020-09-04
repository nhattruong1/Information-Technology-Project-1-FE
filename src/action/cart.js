export const addNewItem = (item) =>{
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}
export const deleteItem = (index) => {
    return({
        type: 'DELETE_ITEM',
        payload: index
    })
}