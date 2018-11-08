import * as React from "react";
import styled from "styled-components";
import TodoItem from "./components/TodoItem/";


const Container = styled.div`
  margin: 0 10px 0 10px;
`;

interface ITodoGroup {
  title: string;
}

const TodoGroup: React.SFC<ITodoGroup> = ({ title }) => (
  <Container>
    <h2>{title}</h2>
    <TodoItem message="Call to Jo" createdOn={new Date()} />
    <TodoItem message="Send to Rachel" createdOn={new Date()}  />
    <TodoItem message="Send to Rachel" createdOn={new Date()}  />
  </Container>
);

export default TodoGroup;
