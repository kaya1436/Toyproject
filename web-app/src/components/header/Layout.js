import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../../css/header.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "../../css/gridTable.css";
import "../../css/toastStyle.css";

function Layout() {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
