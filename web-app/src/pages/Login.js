import logo_e from "../assets/img/logo_emobility.webp";
import { Link } from "react-router-dom";
import { t } from "i18next";

function Login() {
  return (
    <div className="login-bg">
      <div className="box">
        <img src={logo_e} style={{ width: "300px" }} />
        <Link to="/vehicle">
          <button className="go-to">google login</button>
        </Link>
        <Link to="/signup">{t("signup")}</Link>
      </div>
    </div>
  );
}
export default Login;
