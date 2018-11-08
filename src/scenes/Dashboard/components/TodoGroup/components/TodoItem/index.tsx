import * as React from "react";
import Moment from "react-moment";
import Checkbox from "src/components/Checkbox/";
import styled from "styled-components";

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

const onChange = (e:any) => {
  // tslint:disable-next-line:no-console
  console.log(e.target.checked) 
    
};

interface ITodoItemProps {
  message: string;
  createdOn: Date;
}

const TodoItem: React.SFC<ITodoItemProps> = ({ message, createdOn }) => (
  <div>
    <Container>
      <Checkbox onChange={onChange} />
      <Text>{message}</Text>
      <Moment format="MM/DD" style={{ textDecoration: "underline" }}>
        {createdOn.toISOString()}
      </Moment>
    </Container>
  </div>
);

export default TodoItem;
