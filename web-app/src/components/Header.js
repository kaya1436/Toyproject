import logo_w from "../assets/img/logo_w.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo_w} style={{ width: "130px" }} />
      </div>
      <Navbar />
      <div className="header-info">login info</div>
    </header>
  );
}
export default Header;
