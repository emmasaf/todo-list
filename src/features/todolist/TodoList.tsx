import React, { useEffect, useState } from 'react' // Ensure React is imported for JSX
import { ITodoItem, ITodoList } from 'entities/todoModel'
import TodoItem from './TodoItem'
import { useAppSelector } from 'shared/hooks'
import Input from 'widgets/Input'
import {
  addTodo,
  changeValue,
  filterTabHandler,
  restoreItems,
  trashModalHandler,
} from './api/todoSlice'
import Button from 'widgets/Button'
import Trash from 'widgets/Trash'
import Modal from 'widgets/Modal'
import { useAppDispatch } from 'shared/store'
import Done from 'widgets/Done'

const TodoList: React.FC<{ items: ITodoList }> = ({
  items: { items: todos },
}) => {
  const {
    value,
    trashModal,
    deletedItems,
    completedItems,
    actualTodos,
    filterTab,
  } = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()
  const [filteredTodos, setFilteredTodos] = useState<ITodoItem[]>(actualTodos)

  useEffect(() => {
    setFilteredTodos(filterTab ? completedItems : actualTodos)
  }, [filterTab,completedItems,actualTodos])

  return (
    <div>
      <h1 className="text-3xl font-bold ">Todo list</h1>
      <div className="w-full flex justify-end">
        <Trash modalState={trashModal} onClick={trashModalHandler} />
        <Done index={filterTab} onClick={filterTabHandler} />
      </div>

      <form
        className="flex"
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <Input
          placeholder="write todo.."
          value={value}
          onChange={changeValue}
        />
        <Button text="Add todo" onClick={addTodo} />
      </form>
      <p className="text-gray-400 text-end my-3">
        {completedItems.length} / {actualTodos.length}
      </p>
      {filteredTodos.length > 0 ? (
        <ol className="list-decimal bg-white shadow-lg rounded-lg  flex flex-col justify-start  space-y-2 p-4">
          {filteredTodos.map(item => {
            return <TodoItem key={item.id} item={item} />
          })}
        </ol>
      ) : null}
      <Modal
        isOpen={trashModal}
        onClose={() => dispatch(trashModalHandler(!trashModal))}
      >
        <b className="text-lg">Removed Items</b>
        <ul className="list-none my-2 pl-5 space-y-2">
          {deletedItems.length > 0 ? (
            deletedItems.map(item => {
              return (
                <li
                  className="text-blue-500 hover:text-blue-600 flex justify-between"
                  key={item.id}
                >
                  {item.task}
                  <Button
                    text="Restore item"
                    payload={item.id}
                    onClick={restoreItems}
                  />
                </li>
              )
            })
          ) : (
            <p className="w-full text-center"> There are no removed items</p>
          )}
        </ul>
      </Modal>
    </div>
  )
}

export default TodoList
