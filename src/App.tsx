import "mimic";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./scenes/Dashboard";
import configureStore from "./store";

const storeCreator = configureStore();

const StyledPageBody = styled.div`
  max-width: 600px;
  margin:auto;
`;

const App = () => {
  return (
    <Provider store={storeCreator.store}>
      <PersistGate loading={null} persistor={storeCreator.persistor}>
        <Header title="TODO LIST" />
        <StyledPageBody>
          <Dashboard />
        </StyledPageBody>
      </PersistGate>
    </Provider>
  );
};

export default App;
