import logo_e from "../assets/img/logo_emobility.webp";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-bg">
      <div className="box">
        <img src={logo_e} style={{ width: "300px" }} />
        <Link to="/vehicle">
          <button className="go-to">google login</button>
        </Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}
export default Login;
