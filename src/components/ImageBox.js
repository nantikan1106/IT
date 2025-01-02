import React, { useState } from "react";

function ImageBox({ src, alt, caption }) {
  const [isHovered, setHovered] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const containerStyle = {
    margin: "20px auto",
    maxWidth: "400px",
    border: "5px solid #f5c518",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#333",
    textAlign: "center",
    transition: "transform 0.3s ease", // เพิ่ม Transition
    transform: isHovered ? "scale(1.05)" : "scale(1)", // ขยายเมื่อ Hover
    cursor: "pointer", // แสดงว่าเป็นคลิกได้
  };

  const imageStyle = {
    width: "100%",
    display: "block",
  };

  const captionStyle = {
    padding: "10px",
    color: "#fef7dc",
    fontSize: "16px",
    fontStyle: "italic",
  };

  const popupOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: isPopupVisible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const popupImageStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    border: "5px solid #f5c518",
    borderRadius: "15px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#f5c518",
    color: "#333",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <>
      <div
        style={containerStyle}
        onMouseEnter={() => setHovered(true)} // เมื่อชี้เมาส์
        onMouseLeave={() => setHovered(false)} // เมื่อออกจากเมาส์
        onClick={() => setPopupVisible(true)} // เมื่อคลิกเปิด Popup
      >
        <img src={src} alt={alt} style={imageStyle} />
        <div style={captionStyle}>{caption}</div>
      </div>

      {isPopupVisible && (
        <div style={popupOverlayStyle}>
          <button
            style={closeButtonStyle}
            onClick={() => setPopupVisible(false)} // เมื่อคลิกปิด Popup
          >
            ×
          </button>
          <img src={src} alt={alt} style={popupImageStyle} />
        </div>
      )}
    </>
  );
}

export default ImageBox;

