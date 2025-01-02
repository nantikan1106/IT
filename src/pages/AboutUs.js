import React from "react";
import ImageBox from "../components/ImageBox";

function AboutUs() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fef7dc" }}>
      <h1 style={{ color: "#000000", textAlign: "center" }}>เกี่ยวกับเรา</h1>
      <ImageBox 
        src="/img/it1.jpeg" 
        alt="ภาพเกี่ยวกับเรา" 
      />
      <h3 style={{ fontSize: "16px", lineHeight: "1.8", color: "#333" }}>
        สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่
        มีความมุ่งมั่นในการพัฒนาความรู้ที่มีความสามารถใช้งานเทคโนโลยี...
      </h3>
      <p>การคิดและทำอย่างสร้างสรรค์ คือแรงผลักดันที่พวกเรา 
        ชาวเทคโนโลยีสารสนทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ 
        ใช้เป็นแนวทางในการผลิตคอมพิวเตอร์ สร้างองค์ความที่โดนเด่นโดยบุคลากรผู้ทรงคุณวุฒิทั้งภายในและภายนอกสถานศึกษา</p>
    </div>
  );
}

export default AboutUs;