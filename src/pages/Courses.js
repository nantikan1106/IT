import React from "react";
import { useParams } from "react-router-dom";

const courseData = {
  it: {
    name: "เทคโนโลยีสารสนเทศ",
    description: "หลักสูตรนี้มุ่งเน้นพัฒนาทักษะการเขียนโปรแกรม การจัดการฐานข้อมูล และการออกแบบระบบสารสนเทศ",
    duration: "4 ปี",
  },
  business: {
    name: "คอมพิวเตอร์ธุรกิจ",
    description: "หลักสูตรนี้มุ่งเน้นการใช้เทคโนโลยีสารสนเทศในด้านการจัดการธุรกิจและการตลาด",
    duration: "4 ปี",
  },
};

function CourseDetails() {
  const { courseId } = useParams(); // รับ parameter จาก URL
  const course = courseData[courseId];

  if (!course) {
    return <h2>ไม่พบหลักสูตรที่คุณต้องการ</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p><strong>ระยะเวลาเรียน:</strong> {course.duration}</p>
    </div>
  );
}

export default CourseDetails;
