import { configureStore,Tuple  } from '@reduxjs/toolkit'
import todoReducer from 'features/todolist/api/todoSlice'
import { useDispatch } from 'react-redux'
import { thunk } from 'redux-thunk'


const store = configureStore({
  reducer: {
    todo:todoReducer
  },
  middleware: () => new Tuple(thunk),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>

export default store