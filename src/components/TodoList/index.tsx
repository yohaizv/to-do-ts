import * as React from "react";
import { ITodoItem } from "./components/ITodoItemProps";
import TodoItem from "./components/TodoItem";

export interface ITodoLists {
  [id: number]: ITodoItem;
}

interface ITodoListProps {
  todos: ITodoLists;
  onChange: (todoId: number, completed: boolean) => void;
}

const TodoList: React.SFC<ITodoListProps> = props => (
  <div>
    {Object.keys(props.todos).map(key => (
      <TodoItem
        onChange={props.onChange}
        id={+key}
        todo={props.todos[key]}
        key={key}
      />
    ))}
  </div>
);

export default TodoList;
