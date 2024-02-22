import React from 'react'
import { ITrashProps } from '../entities/todoModel'
import { useAppDispatch } from 'shared/store'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const Trash: React.FC<ITrashProps> = ({
  size = 35,
  className = 'bg-red',
  onClick,
  modalState,
  title='Removed Items'
}) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(onClick(modalState))
  }
  return (
    <section className="p-3">
      <button title={title} className={className} onClick={handleChange}>
        <RiDeleteBin5Fill size={size} />
      </button>
    </section>
  )
}

export default Trash
