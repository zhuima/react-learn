import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { LoginScreen } from "./screens/login";
import { ProjectListScreen } from "./screens/project-list";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
