import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodoSliceInitState } from "entities/todoModel"

const initialState = {
  value: '',
  todos: [],
  completedItems: [],
  actualTodos: [],
  trashModal: false,
  deletedItems: [],
  filterTab: false
} as ITodoSliceInitState


const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
    addTodo(state) {
      if (state.value.trim()) {
        state.todos = [...state.todos, {
          id: Math.random(),
          task: state.value,
          isDeleted: false,
          isCompleted: false
        }]
        state.completedItems = [...state.todos].filter(({ isCompleted, isDeleted }) => isCompleted && !isDeleted)
        state.actualTodos = [...state.todos].filter(({ isDeleted }) => !isDeleted)
        state.value = ''
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].isDeleted = true;
      }
      state.completedItems = [...state.todos].filter(({ isCompleted, isDeleted }) => isCompleted && !isDeleted)
      state.deletedItems = [...state.todos].filter(({ isDeleted }) => isDeleted)
      state.actualTodos = [...state.todos].filter(({ isDeleted }) => !isDeleted)
    },
    comleteTodo(state, action: PayloadAction<number>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
      }
      state.completedItems = [...state.todos].filter(({ isCompleted, isDeleted }) => isCompleted && !isDeleted)
      state.actualTodos = [...state.todos].filter(({ isDeleted }) => !isDeleted)
      state.deletedItems = [...state.todos].filter(({ isDeleted }) => isDeleted)
    },
    trashModalHandler(state, acttion: PayloadAction<boolean>) {
      state.trashModal = !state.trashModal
    },
    restoreItems(state, action: PayloadAction<number>) {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].isDeleted = false;
        state.actualTodos = [...state.todos].filter(({ isDeleted }) => !isDeleted)
        state.completedItems = [...state.todos].filter(({ isCompleted, isDeleted }) => isCompleted && !isDeleted)
        state.deletedItems = [...state.todos].filter(({ isDeleted }) => isDeleted)
        state.trashModal = false
      }
    },
    filterTabHandler(state) {
      state.filterTab = !state.filterTab
    }
  },
})

export const { changeValue, trashModalHandler, restoreItems, addTodo, removeTodo, comleteTodo, filterTabHandler } = todoSlice.actions

export default todoSlice.reducer