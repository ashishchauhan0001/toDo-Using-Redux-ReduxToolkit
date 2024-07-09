import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid is use to generate unique Ids


const initialState={
    todos:[{id:1,text:"Test toDo"}]
}

export const todoSlice=createSlice({

    name:'todo',
    initialState,
    reducers:{ 
        addTodo:(state,action)=>{ // state updated values in the store
            const todo={
                id:nanoid(),
                text:action.payload  // it will automatically assign text from payload object yes it is a object
            }
            state.todos.push(todo) // previous state is preserve here 
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
              todo.text = text;
            }
          }
    }

})

export const{addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer