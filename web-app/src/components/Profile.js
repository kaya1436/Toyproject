import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import profile from "../assets/img/blank_profile.png";

function Profile() {
  const ImageButton = styled.button`
    background-image: url(${profile});
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-size: cover;
    margin: 0 auto;
  `;
  const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
    cursor: pointer;
  `;

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
  return (
    <>
      {preview ? (
        <Img
          src={preview}
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click();
          }}
        />
      ) : (
        <ImageButton
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click();
          }}
        ></ImageButton>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file && file.type.substring(0, 5) === "image") {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      />
    </>
  );
}

export default Profile;
