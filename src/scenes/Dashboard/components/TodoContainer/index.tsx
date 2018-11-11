import { Icon } from "antd";
import * as React from "react";
import TodoList, { ITodoLists } from "src/components/TodoList";
import styled from "styled-components";
import ActionLink from "../../../../components/ActionLink";
import UpsertTask, { ActionType } from "../../../../components/UpsertTask";

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoContainerProps {
  title: string;
  isOverdue?: boolean;
}
interface ITodoContainerState {
  isNewTaskOpen: boolean;
  todos: ITodoLists;
}

export default class TodoContainer extends React.Component<
  ITodoContainerProps,
  ITodoContainerState
> {
  constructor(props: ITodoContainerProps) {
    super(props);
    this.state = {
      isNewTaskOpen: false,
      todos: {
        1: {
          completed: false,
          dueDate: new Date(),
          message: "Call to Jo"
        },
        2: {
          completed: false,
          dueDate: new Date(2018, 1, 1),
          message: "Send to Rachel"
        }
      }
    };
    this.bindFunctions();
  }

  public onAddTaskClick() {
    this.setState({
      isNewTaskOpen: true
    });
  }

  public createTask(message: string, dueDate: Date) {
    this.setState(prevState => {
      const newId = this.generateTodoId(prevState.todos);
      return {
        ...prevState,
        isNewTaskOpen: false,
        todos: {
          ...prevState.todos,
          [newId]: { message, dueDate, completed: false }
        }
      };
    });
  }

  public onAddTaskCancel() {
    this.setState({
      isNewTaskOpen: false
    });
  }

  public onChange(todoId: number, completed: boolean) {
    this.setState(pervState => ({
      ...pervState,
      todos: {
        ...pervState.todos,
        [todoId]: {
          completed,
          dueDate: new Date(2018, 1, 1),
          message: "Send to Rachel"
        }
      }
    }));
  }

  public render() {
    const { todos, isNewTaskOpen } = this.state;
    const { title, isOverdue } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        <div>
          <TodoList todos={todos} onChange={this.onChange} />
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

  private generateTodoId(todos: ITodoLists): number {
    return 1 + Math.max(...Object.keys(todos).map(key => +key));
  }

  private bindFunctions() {
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.createTask = this.createTask.bind(this);
    this.onAddTaskCancel = this.onAddTaskCancel.bind(this);
    this.onChange = this.onChange.bind(this);
  }
}
