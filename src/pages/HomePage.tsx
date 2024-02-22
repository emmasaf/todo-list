import React from 'react'
import TodoList from 'features/todolist/TodoList'
import { useAppSelector } from 'shared/hooks'
const HomePage: React.FC = () => {
  const { todos } = useAppSelector(state => state.todo)

  return (
    <main className="flex flex-1 items-center justify-start flex-col bg-gray-100">
      <TodoList items={{ items: todos }} />
    </main>
  )
}

export default HomePage
