import * as React from "react";
import Header from "./components/Header/";
import Dashboard from './scenes/Dashboard';
class App extends React.Component {
  public render() {
    return (
      <div>
        <Header title="TODO LIST" />
        <Dashboard />
      </div>
    );
  }
}

export default App;
