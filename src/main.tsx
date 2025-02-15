import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";
import { AuthProvider } from "./pages/auth/context.tsx";
import { BrowserRouter } from "react-router-dom";

const accessToken = storage.get("auth");
if(accessToken) {
  setAuthorizationHeader(accessToken);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider defaultIsLogged = {Boolean(accessToken)}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
