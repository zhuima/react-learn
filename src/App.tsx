import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { AuthenticatedApp } from "./authenticated-app";
import { UserAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
// import { ProjectListScreen } from "./screens/project-list";

function App() {
  const { user } = UserAuth();

  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <LoginScreen /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
