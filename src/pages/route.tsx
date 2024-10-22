import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../shared/layout/dashboard-layout";
import DashboardPage from "./dashboard";
import PageNotFound from "./notFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default appRouter;
