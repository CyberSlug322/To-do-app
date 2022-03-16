import {  fetchTodoError, fetchTodoRequest, fetchTodoSuccess } from "./api.actions"

const fakeFetch = async() => {
    const data = new Promise(resolve => setTimeout(() => resolve({
        id: Math.random() * 100,
        complete: false,
        text: "its fetch todo"
      }), 1000))
    return data
}

export const fetchFakeApi = () => async dispatch => {
   try {
        dispatch(fetchTodoRequest())
        const result = await fakeFetch()
        dispatch(fetchTodoSuccess(result))
        
   } catch (e) {
        dispatch(fetchTodoError(e.message))
   }
   

}


