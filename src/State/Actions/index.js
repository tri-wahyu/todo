export const addToDO = (data) => {
    return {
        type:'ADD_TODO',
        payload:data
    }
}
export const deleteToDO = (index) => {
    return {
        type:'DEL_TODO',
        payload:index
    }
}
export const doneToDO = (index) => {
    return {
        type:'DONE_TODO',
        payload:index
    }
}
export const fetchToDO = (list) => {
    return {
        type:'GET_TODO',
        payload:list
    }
}