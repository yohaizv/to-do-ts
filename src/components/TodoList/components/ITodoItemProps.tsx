export default interface ITodoItemProps {
  id: number;
  todo: ITodoItem;
  onChange: (todoId: number, completed: boolean) => void;
}

export interface ITodoItem {  
  message: string;
  dueDate: Date;
  completed: boolean;
}
