import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="page">
      <Outlet />

      <Sidebar />
    </div>
  );
};

export default Layout;
