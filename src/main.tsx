import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./shared/provider/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
