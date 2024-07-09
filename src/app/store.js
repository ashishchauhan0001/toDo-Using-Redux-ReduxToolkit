import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store =configureStore({
    reducer:todoReducer
}) // it takes object in it