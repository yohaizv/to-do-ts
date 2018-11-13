import { Icon } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  IAddTodoAction,
  IToggleTodoAction,
  toggleTodo
} from "src/actions/todos";
import TodoList, { ITodoLists } from "src/components/TodoList";
import { ISimpleDate } from "src/models/ISimpleDate";
import { IState } from "src/reducers";
import { getTodos } from "src/selectors/todos";
import styled from "styled-components";
import ActionLink from "../../../../components/ActionLink";
import UpsertTask, { ActionType } from "../../../../components/UpsertTask";

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoContainerProps {
  title: string;
  isOverdue?: boolean;
  todos: ITodoLists;
  addTodo: (message: string, dueDate: ISimpleDate) => IAddTodoAction;
  onTodoClicked: (todoId: number) => IToggleTodoAction;
}
interface ITodoContainerState {
  isNewTaskOpen: boolean;
}

class TodoContainer extends React.Component<
  ITodoContainerProps,
  ITodoContainerState
> {
  constructor(props: ITodoContainerProps) {
    super(props);
    this.state = {
      isNewTaskOpen: false
    };
    this.bindFunctions();
  }

  public onAddTaskClick() {
    this.setState({
      isNewTaskOpen: true
    });
  }

  public createTask(message: string, dueDate: ISimpleDate) {
    this.props.addTodo(message, dueDate);
    this.setState({
      isNewTaskOpen: false
    });
  }

  public onAddTaskCancel() {
    this.setState({
      isNewTaskOpen: false
    });
  }

  public onChange(todoId: number) {
    this.props.onTodoClicked(todoId);
  }

  public render() {
    const { isNewTaskOpen } = this.state;
    const { title, isOverdue, todos } = this.props;
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

  // private generateTodoId(todos: ITodoLists): number {
  //   return 1 + Math.max(...Object.keys(todos).map(key => +key));
  // }

  private bindFunctions() {
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.createTask = this.createTask.bind(this);
    this.onAddTaskCancel = this.onAddTaskCancel.bind(this);
    this.onChange = this.onChange.bind(this);
  }
}

export default connect<any, any, any>(
  (state: IState) => ({
    todos: getTodos(state)
  }),
  {
    addTodo,
    onTodoClicked: toggleTodo
  }
)(TodoContainer);
