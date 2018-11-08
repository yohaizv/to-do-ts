import * as React from "react";
import styled from "styled-components";
import AddTask from "./components/AddTask";
import TodoItem from "./components/TodoItem/";

const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoGroup {
  title: string;
}

const onAddTaskClick = (e: any) => {
  // tslint:disable-next-line:no-console
  console.log("onAddTaskClick");
};

const TodoGroup: React.SFC<ITodoGroup> = ({ title }) => (
  <Container>
    <h2>{title}</h2>
    <div>
      <TodoItem message="Call to Jo" createdOn={new Date()} />
      <TodoItem message="Send to Rachel" createdOn={new Date()} />
      <TodoItem message="Send to Rachel" createdOn={new Date()} />
    </div>
    <AddTask onClick={onAddTaskClick} />
  </Container>
);

export default TodoGroup;
