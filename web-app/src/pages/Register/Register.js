import logo_e from "../../assets/img/logo_emobility.webp";
import "../../css/signup.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { t } from "i18next";
import { toast } from "react-toastify";
import { PopUp } from "../../components/search/PopUp";
import { BirthLengthPop, WriteBirthPop, WriteNamePop } from "./registerPop";

function Register() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef("");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const imgHandler = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };
  const numInput = (e) => {
    setBirth(e.target.value.slice(0, 8));
  };
  const signUp = async () => {
    if (name === "") {
      toast.error(<WriteNamePop />);
    } else if (birth === "") {
      toast.error(<WriteBirthPop />);
    } else if (birth.length != 8) {
      toast.error(<BirthLengthPop />);
    } else {
      const formData = new FormData();
      formData.append("my_image", image);
      formData.append("name", name);
      formData.append("birth_data", birth);
      try {
        await axios.post("api주소", formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login-bg">
      <div className="box">
        <img src={logo_e} style={{ width: "350px" }} />
        <h2>{t("Please enter your registration information.")}</h2>
        <div className="signup-form">
          {preview ? (
            <img
              className="profile-img"
              src={preview}
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            />
          ) : (
            <button
              className="image-btn"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            ></button>
          )}
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={imgHandler}
          />
          <label htmlFor="name">
            {t("Name")}
            <input
              className="info-input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Name")}
              required
              autoComplete="off"
            />
          </label>
          <label htmlFor="date">
            {t("Date of birth")}
            <input
              className="info-input"
              type="number"
              value={birth}
              onChange={numInput}
              placeholder={t("Birth placeholder")}
              maxLength="8"
              required
              autoComplete="off"
            />
          </label>
          <PopUp />
          <button className="go-to" onClick={signUp}>
            {t("Sign up")}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
