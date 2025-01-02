import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</p>
      <p>
        ติดต่อเรา: <a href="mailto:lannapoly@lannapoly.ac.th" style={linkStyle}>lannapoly@lannapoly.ac.th</a> | โทร: 053 213 061
      </p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#000", // สีดำ
  color: "#f5c518", // สีเหลือง
  textAlign: "center",
  padding: "15px 0",
  marginTop: "20px",
};

const linkStyle = {
  color: "#f5c518",
  textDecoration: "none",
};

export default Footer;
