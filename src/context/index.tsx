import React from "react";
import { AuthProvider } from "./auth-context";
import { QueryClientProvider, QueryClient } from "react-query";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
};
