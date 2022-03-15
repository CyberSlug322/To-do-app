import { fetchTodo } from "./actions"

export const fetchFakeApi = () => async dispatch => {
    await new Promise(resolve => setTimeout(() => resolve('data'), 1000))
    dispatch(fetchTodo())
    
}

