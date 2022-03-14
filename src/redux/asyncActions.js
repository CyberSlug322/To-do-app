import { fetchTodo } from "./actions"

export const fetchFakeApi = () => async dispatch => {
    await new Promise(resolve => setTimeout(() => resolve('data'), 1000))
    const todoObj = {
        id: 1,
        complete: true,
        text: "todo task number 1"
      }
    dispatch(fetchTodo())
    
}

