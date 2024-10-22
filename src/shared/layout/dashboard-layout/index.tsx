import { Outlet } from "react-router-dom";
import SheetProvider from "../../provider/sheet-provider";
import Sidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <div className="flex-col flex-1 flex h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <SheetProvider />
    </>
  );
};

export default DashboardLayout;
