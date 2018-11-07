import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding: 5px;
`;

const Label = styled.label`
  background-color: #fff;
  border: 1px solid #db4c3f;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;

  :after {
    border: 2px solid #db4c3f;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

const Input = styled.input`
  visibility: hidden;
  :hover + label {
    background-color: #db4c3f4a;
    border-color: #db4c3f;
  }
  :hover + label:after {
    opacity: 1;
  }
  :checked + label {
    background-color: #db4c3f4a;
    border-color: #db4c3f;
  }
  :checked + label:after {
    opacity: 1;
  }
`;

const RoundCheckbox: React.SFC<{ onChecked: () => void }> = ({ onChecked }) => {
  const onChange =( event:any) => {
    if (event.target.checked) {
      onChecked();
    }
  };

  return (
    <Container>
      <Input type="checkbox" id="checkbox" onChange={onChange} />
      <Label htmlFor="checkbox" />
    </Container>
  );
};

export default RoundCheckbox;
