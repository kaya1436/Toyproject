import logo_e from "../assets/img/logo_emobility.webp";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="box">
        <img src={logo_e} style={{ width: "300px" }} />
        <button>google login</button>
        <Link to="/signup">회원가입</Link>
      </div>
    </>
  );
}
export default Login;
