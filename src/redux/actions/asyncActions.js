import {  fetchTodoError, fetchTodoRequest, fetchTodoSuccess } from "./api.actions"

export const fetchFakeApi = () => async dispatch => {
   try {
        dispatch(fetchTodoRequest())
        const data = new Promise(resolve => setTimeout(() => resolve({
            id: Math.random * 100,
            complete: false,
            text: "its fetch todo"
          }), 1000))
        const result = await Promise.resolve(data)
        //throw new Error("aaaa")  
        dispatch(fetchTodoSuccess(result))
        
   } catch (e) {
        dispatch(fetchTodoError(e.message))
   }
   
   
    
    
}

