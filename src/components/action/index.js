export const addTodo = (data) =>{
    return {
        type: 'ADDTODO',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deletTodo = (id) =>{
    return {
        type: 'DELETTODO',
        id
    }
}

export const removeTodo = () =>{
    return {
        type: 'REMOVETODO',
    }
}