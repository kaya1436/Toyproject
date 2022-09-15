import { Link } from "react-router-dom";
import logo_w from "../../assets/img/logo_w.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/vehicle">
          <img src={logo_w} style={{ width: "150px" }} />
        </Link>
      </div>
      <Navbar />
      <div className="header-info">login info</div>
    </header>
  );
}
export default Header;
