import * as React from "react";
import styled from "styled-components";

interface IActionLinkProps {
  onClick: (e: any) => void;
  label: string;
  icon: JSX.Element;
}

const StyledDiv = styled.div`
  margin-top: 5px;
`;

const StyledIcon = styled.span`
  border-radius: 50%;
  ${StyledDiv}:hover & {
    background-color: #db4c3f;
    color: #fff;
    vertical-align: top;
  }
`;

const StyledLabel = styled.span`
  margin: 0 5px 0 5px;
  ${StyledDiv}:hover & {
    color: #db4c3f;
  }
`;


const ActionLink: React.SFC<IActionLinkProps> = props => (
  <StyledDiv onClick={props.onClick}>
    <StyledIcon>{props.icon}</StyledIcon>
    <StyledLabel>{props.label}</StyledLabel>
  </StyledDiv>
);

export default ActionLink;

