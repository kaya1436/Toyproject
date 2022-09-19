import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
import styled from "styled-components";
import backImg from "../assets/img/img_intro_bg.webp";
import logo from "../assets/img/logo_hyundai.svg";
import logo_e from "../assets/img/logo_emobility.webp";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Home() {
  const Container = styled.div`
    background-image: url(${backImg});
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
  `;
  const Box = styled.div`
    background-color: #fff;
    width: 540px;
    height: 402px;
    border: 1px solid #dadee5;
    box-shadow: 0 2px 4px 0 rgba(68, 78, 93, 0.2);
    padding: 50px 40px;
  `;
  const Header = styled.div`
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Title = styled.div`
    height: 200px;
  `;
  const P = styled.div`
    color: rgb(37, 172, 204);
    font-size: 28px;
    letter-spacing: -0.5px;
  `;

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("language"));
  const changeLang = (e) => {
    setLang(e);
    i18n.changeLanguage(e);
    localStorage.setItem("language", e);
  };

  const { Option } = Select;
  return (
    <>
      <Container>
        <Box>
          <Header>
            <img src={logo} />
            <Select
              value={lang}
              bordered={false}
              style={{ width: "100px" }}
              onChange={changeLang}
            >
              <Option value="ko">{t("ko")}</Option>
              <Option value="en">{t("en")}</Option>
            </Select>
          </Header>
          <Title>
            <img src={logo_e} style={{ width: "414px", height: "62px" }} />
            <P>Management System</P>
          </Title>
          <div>
            <Link to="/login">
              <button className="go-to">{t("start")}</button>
            </Link>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default Home;
