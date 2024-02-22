import React, { ChangeEvent } from 'react';
import { IInputProps } from '../entities/todoModel'
import { useAppDispatch } from 'shared/store'

const Input: React.FC<IInputProps> = ({
  label,
  value,
  onChange,
  type = 'text', // Default type is text
  placeholder = '',
  className = 'min-w-[250px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
}) => {
  const dispatch = useAppDispatch()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChange(e.target.value));
  };

  return (
    <div className="input-with-label">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  )
}

export default Input
