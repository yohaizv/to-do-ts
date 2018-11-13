import * as React from "react";
import Moment from "react-moment";
import Checkbox from "src/components/Checkbox";
import styled from "styled-components";
import ITodoItemProps from "./ITodoItemProps";

const TodoItem: React.SFC<ITodoItemProps> = props => {
  
  const onChange = (event: any) => {
    props.onChange(props.id, event.target.checked);
  };

  return (
    <div>
      <Container>
        <Checkbox checked={props.todo.completed} onChange={onChange} />
        <Text>{props.todo.message}</Text>
        <Moment 
        date={new Date(props.todo.dueDate.year,props.todo.dueDate.month,props.todo.dueDate.day)} 
        format="MM/DD" style={{ textDecoration: "underline" }}/>
      </Container>
    </div>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
`;

const Text = styled.div`
  padding-left: 5px;
  font-weight: bold;
`;
