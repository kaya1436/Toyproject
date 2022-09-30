import { Outlet } from "react-router-dom";
import Header from "./Header";
import "../../css/header.css";

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
