import * as React from "react";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import TaskEditorManager, { ActionType } from "./components/TaskEditorManager";
import TodoItem from "./components/TodoItem/";

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoGroupProps {
  title: string;
  isOverdue?: boolean;
}
interface ITodoGroupState {
  isNewTaskOpen: boolean;
  todos: Array<{ message: string; dueDate: Date }>;
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
          dueDate: new Date(),
          message: "Call to Jo"
        },
        {
          dueDate: new Date(2018, 1, 1),
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
      todos: [...prevState.todos, { message, dueDate }]
    }));
  }

  public onAddTaskCancel() {
    this.setState({
      isNewTaskOpen: false
    });
  }

  public render() {
    const { todos, isNewTaskOpen } = this.state;
    const { title, isOverdue } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <div>
          {todos.map((todo, i) => (
            <TodoItem message={todo.message} dueDate={todo.dueDate} key={i} />
          ))}
        </div>
        {isNewTaskOpen && (
          <TaskEditorManager
            actionType={ActionType.Create}
            onSave={this.createTask}
            onCancel={this.onAddTaskCancel}
          />
        )}
        {!isOverdue && <AddTask onClick={this.onAddTaskClick} />}
      </Container>
    );
  }

  private bindFunctions() {
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.createTask = this.createTask.bind(this);
    this.onAddTaskCancel = this.onAddTaskCancel.bind(this);
  }
}
