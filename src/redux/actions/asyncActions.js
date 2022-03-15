import { fetchTodo, fetchTodoError, fetchTodoRequest, fetchTodoSuccess } from "./actions"

export const fetchFakeApi = () => async dispatch => {
   try {
        const data = new Promise(resolve => setTimeout(() => resolve('data'), 1000))
        dispatch(fetchTodoRequest())
        const result = await Promise.resolve(data)
        //throw new Error("aaaa")  
        dispatch(fetchTodo())
        dispatch(fetchTodoSuccess(result))
        
   } catch (e) {
        dispatch(fetchTodoError(e.message))
   }
   
   
    
    
}

