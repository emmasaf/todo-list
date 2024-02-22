import React from 'react'
import { IDoneProps } from '../entities/todoModel'
import { useAppDispatch } from 'shared/store'
import { IoMdCloudDone } from "react-icons/io";

const Done: React.FC<IDoneProps> = ({
  size = 35,
  className = 'bg-red',
  onClick,
  index,
  title='Show Completed Items'
}) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(onClick(index))
  }
  return (
    <section className="p-3">
      <button title={title} className={className} onClick={handleChange}>
        <IoMdCloudDone size={size} color={index ? 'green' : 'black'} />
      </button>
    </section>
  )
}

export default Done
