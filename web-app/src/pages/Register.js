import logo_e from "../assets/img/logo_emobility.webp";
import "../css/signup.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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

  const signUp = async () => {
    const formData = new FormData();
    formData.append("my_image", image);
    formData.append("name", name);
    formData.append("birth_data", birth);

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="box">
        <img src={logo_e} style={{ width: "350px" }} />
        <h2>가입 정보를 입력해주세요.</h2>
        <form onSubmit={signUp}>
          {preview ? (
            <img
              className="profileImg"
              src={preview}
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click();
              }}
            />
          ) : (
            <button
              className="imageBtn"
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
            이름 *
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              required
            />
          </label>
          <label htmlFor="date">
            생년월일 *
            <input
              type="date"
              name="date"
              min="1990-01-01"
              max="2022-12-31"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
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
export default Register;
