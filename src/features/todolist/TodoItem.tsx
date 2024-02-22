import React from 'react' // Ensure React is imported for JSX
import { ITodoItem } from 'entities/todoModel'
import Button from 'widgets/Button'
import { comleteTodo, removeTodo } from './api/todoSlice'
import Checkbox from 'widgets/Checkbox'

// Correctly define the functional component using the FC type for typing props
const TodoItem: React.FC<{ item: ITodoItem }> = ({
  item: { isDeleted, isCompleted, id, task },
}) => {
  return (
    <li
      className={`flex align-center justify-between text-blue-600 font-semibold ${
        isDeleted ? 'hidden' : 'block'
      } `}
    >
      <p className='flex'>
        <Checkbox id={id} onChange={comleteTodo} isCompleted={isCompleted} />
        <span className={`mx-3 ${isCompleted ? 'line-through	' : ''}`}>{task}</span>
      </p>
      <Button text={'x'} onClick={removeTodo} payload={id} />
    </li>
  )
}

export default TodoItem
