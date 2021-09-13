const ADD_ITEM = 'ADD-ITEM';
const DELETE_ALL_ITEMS = 'DELETE-ALL-ITEMS';
const DELETE_ITEM = 'DELETE-ITEM';
const COMPLETED_ITEM = 'COMPLETED-ITEM';
const REMOVE_COMPLETED = 'REMOVE-COMPLETED';
const FILTER = 'FILTER';


const defaultState = {
    items: [],
    filter: 'all'
}
export const ToDoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]}
        case DELETE_ALL_ITEMS:
            return {...state, items: []}
        case DELETE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload)}
        case COMPLETED_ITEM:
            return {...state, items: action.payload}
        case REMOVE_COMPLETED:
            return {...state, items: state.items.filter(item => !item.complete)}
        case FILTER:
            return {...state, filter: action.payload}


        default :
            return state;
    }
}

export const addItemAction = (payload) => ({type: ADD_ITEM, payload})
export const deleteAllItemsAction = (payload) => ({type: DELETE_ALL_ITEMS, payload})
export const deleteItemAction = (payload) => ({type: DELETE_ITEM, payload})
export const completedItemAction = (payload) => ({type: COMPLETED_ITEM, payload})
export const removeCompletedAction = () => ({type: REMOVE_COMPLETED})
export const filterAction = (payload) => ({type: FILTER, payload})

