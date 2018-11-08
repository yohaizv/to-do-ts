import { Icon } from "antd";
import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 5px;
`;

const PlusContainer = styled.span`
  border-radius: 50%;
  ${Container}:hover & {
    background-color: #db4c3f;
    color: #fff;
    vertical-align: top;
  }
`;

const Label = styled.span`
  margin: 0 5px 0 5px;
  ${Container}:hover & {
    color: #db4c3f;
  }
`;

const AddTask: React.SFC<{ onClick: (e: any) => void }> = ({ onClick }) => (
  <Container onClick={onClick}>
    <PlusContainer>
      <Icon type="plus" />
    </PlusContainer>
    <Label>Add Task</Label>
  </Container>
);

export default AddTask;
