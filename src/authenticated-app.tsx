import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { UserAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { logout } = UserAuth();

  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
