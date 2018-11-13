import "mimic";
import * as React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./scenes/Dashboard";
import store from "./store";

const StyledPageBody = styled.div`
  max-width: 600px;
  margin: auto;
`;

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header title="TODO LIST" />
        <StyledPageBody>
          <Dashboard />
        </StyledPageBody>
      </div>
    </Provider>
  );
};

export default App;
