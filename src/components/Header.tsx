import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:43px;
  background-color: #db4c3f;
  color: #fff;  
  border-bottom: solid 1px #ca2100;  
`;

const Header: React.SFC<{ title: string }> = ({ title }) => (
  <Container>{title}</Container>
);

export default Header;
