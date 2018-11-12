import ITodo from 'src/models/ITodo';

export default interface ITodoItemProps {
  id: number;
  todo: ITodo;
  onChange: (todoId: number, completed: boolean) => void; 
}
