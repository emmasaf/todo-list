import { ICheckboxProps } from 'entities/todoModel'
import { useAppDispatch } from 'shared/store'

const Checkbox: React.FC<ICheckboxProps> = ({ isCompleted, onChange,id }) => {
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(onChange(id))
  }

  return (
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={handleChange}
    />
  )
}

export default Checkbox
