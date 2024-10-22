import { RouterProvider } from "react-router-dom";
import appRouter from "./pages/route";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
