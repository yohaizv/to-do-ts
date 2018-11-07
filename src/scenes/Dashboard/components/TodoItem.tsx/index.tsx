import * as React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import RoundCheckbox from "../../../../components/RoundCheckbox/";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
`;

const Text = styled.div`
  padding-left: 5px;
  font-weight: bold;
`;


const onChecked = () => {
  alert("checked!!!");
};

interface ITodoItemProps {
  message: string;
  createdOn: Date;
}

const TodoItem: React.SFC<ITodoItemProps> = ({ message, createdOn }) => (
  <div>
    <Container>
      <RoundCheckbox onChecked={onChecked} />
      <Text>{message}</Text>
      <Moment format="MM/DD" style={{textDecoration: 'underline'}}>{createdOn.toString()}</Moment>
    </Container>
  </div>
);

export default TodoItem;
