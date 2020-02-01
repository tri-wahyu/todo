
export const addToDo = addToDo => ({
    type: 'ADD_TODO',
});

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODO' : return  state=action.payload;
        case 'ADD_TODO' : return  state.concat([action.payload])
        case 'DEL_TODO' : return  state.filter((x)=>x.id !== action.payload);
        case 'DONE_TODO' : return state.map((x)=> x.id === action.payload.id ? action.payload : x);
        default: return state
    }
}
export default toDoReducer;