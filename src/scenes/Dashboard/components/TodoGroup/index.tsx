import { Icon } from 'antd';
import * as React from "react";
import TodoItem from "src/components/TodoList/components/TodoItem";
import styled from "styled-components";
import ActionLink from "../../../../components/ActionLink";
import UpsertTask, { ActionType } from "../../../../components/UpsertTask";

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoGroupProps {
  title: string;
  isOverdue?: boolean;
}
interface ITodoGroupState {
  isNewTaskOpen: boolean;
  todos: Array<{
    id: number;
    message: string;
    dueDate: Date;
    completed: boolean;
  }>;
}

export default class TodoGroup extends React.Component<
  ITodoGroupProps,
  ITodoGroupState
> {
  constructor(props: ITodoGroupProps) {
    super(props);
    this.state = {
      isNewTaskOpen: false,
      todos: [
        {
          completed: false,
          dueDate: new Date(),
          id: 1,
          message: "Call to Jo"
        },
        {
          completed: false,
          dueDate: new Date(2018, 1, 1),
          id: 2,
          message: "Send to Rachel"
        }
      ]
    };
    this.bindFunctions();
  }

  public onAddTaskClick() {
    this.setState({
      isNewTaskOpen: true
    });
  }

  public createTask(message: string, dueDate: Date) {
    this.setState(prevState => ({
      ...prevState,
      isNewTaskOpen: false,
      todos: [...prevState.todos, { message, dueDate, completed: false, id: 0 }]
    }));
  }

  public onAddTaskCancel() {
    this.setState({
      isNewTaskOpen: false
    });
  }

  public onChange(event: any) {
    alert(event);
  }

  public render() {
    const { todos, isNewTaskOpen } = this.state;
    const { title, isOverdue } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <div>
          {todos.map((todo, i) => (
            <TodoItem
              onChange={this.onChange}
              completed={todo.completed}
              message={todo.message}
              dueDate={todo.dueDate}
              key={i}
            />
          ))}
        </div>
        {isNewTaskOpen && (
          <UpsertTask
            actionType={ActionType.Create}
            onSave={this.createTask}
            onCancel={this.onAddTaskCancel}
          />
        )}
        {!isOverdue && (
          <ActionLink
            label="Add Task"
            icon={<Icon type="plus" />}
            onClick={this.onAddTaskClick}
          />
        )}
      </Container>
    );
  }

  private bindFunctions() {
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.createTask = this.createTask.bind(this);
    this.onAddTaskCancel = this.onAddTaskCancel.bind(this);
  }
}
