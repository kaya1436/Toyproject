import logo_e from "../assets/img/logo_emobility.webp";
import styled from "styled-components";

function Login() {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Noto Sans KR", sans-serif;
  `;
  return (
    <>
      <Container>
        <img src={logo_e} style={{ width: "300px", height: "40px" }} />
        <button>google login</button>
      </Container>
    </>
  );
}
export default Login;
