import * as React from "react";


interface ITodoListProps {
  todos: any;
}

const TodoList: React.SFC<ITodoListProps> = (props) => (
  <div>
    {props.todos}
  </div>
);

export default TodoList;

