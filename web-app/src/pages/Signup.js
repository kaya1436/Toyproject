import logo_e from "../assets/img/logo_emobility.webp";
import "../css/signup.css";
import Profile from "../components/Profile";

function Signup() {
  return (
    <>
      <div className="box">
        <img src={logo_e} style={{ width: "350px" }} />
        <h2>가입 정보를 입력해주세요.</h2>
        <form>
          <Profile />
          <label htmlFor="name">
            이름 *
            <input type="text" name="name" placeholder="이름" required />
          </label>
          <label htmlFor="date">
            생년월일 *
            <input
              type="date"
              name="date"
              min="1990-01-01"
              max="2030-12-31"
              pattern="\d{4}-\d{2}-\d{2}"
              required
            />
          </label>
          <button>회원가입</button>
        </form>
      </div>
    </>
  );
}
export default Signup;
