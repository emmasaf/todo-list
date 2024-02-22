
export interface ITodoItem {
  id: number;
  task: string;
  isCompleted: boolean;
  isDeleted: boolean
}

export interface ITodoList {
  items: ITodoItem[];
}

export interface IButtonProps {
  onClick:Function;
  text: string;
  className?: string;
  payload?:any
}

export interface IInputProps {
  onChange: Function;
  value: string;
  className?: string;
  placeholder: string;
  label?: string;
  type?: string;

}

export interface IRoutes {
  id: number;
  name: string;
  component: React.ComponentType;
  path: string
}

export interface ITodoSliceInitState {
  value:string;
  todos:ITodoItem[],
  completedItems: ITodoItem[],
  actualTodos:ITodoItem[],
  trashModal: boolean,
  deletedItems:ITodoItem[],
  filterTab:boolean
}

export interface ICheckboxProps {
  isCompleted: boolean;
  onChange:Function;
  id:number
}
export interface ITrashProps {
  onClick: Function;
  className?: string;
  size?:number;
  modalState:boolean;
  title?:string
}
export interface IDoneProps {
  onClick: Function;
  className?: string;
  size?:number;
  index:boolean;
  title?:string
}
export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}