import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      title: "OPEN HOUSE >>",
      description: "VIRTUAL IT WORLD เปิดโลก IT ผ่านมิติแห่งเทคโนโลยีเสมือนจริง",
      details: "รายละเอียดเพิ่มเติมเกี่ยวกับ OPEN HOUSE...",
      image: "img/open.jpg",
    },
    {
      title: "MOE Contentent Creator Awards ",
      description: "รางวัล MOE Content Creator Awards",
      details: "รายละเอียดเพิ่มเติมเกี่ยวกับ MOE Content Creator Awards...",
      image: "img/3.jpg",
    },
    {
      title: "IT Poly....",
      description: "การแข่งขันทักษะวิชาชีพ ในระดับจังหวัดเชียงใหม่",
      details: "รายละเอียดเพิ่มเติมเกี่ยวกับ IT Poly...",
      image: "img/1.jpg",
    },
  ];

  const openPopup = (activity) => {
    setSelectedActivity(activity);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedActivity(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
      <p>
        สาขาของเรามุ่งมั่นในการพัฒนาเทคโนโลยีและสร้างบุคลากรที่มีคุณภาพ
        พร้อมก้าวทันโลกดิจิทัล
      </p>

      <div>
        <h2>กิจกรรมล่าสุด</h2>
        <div className="activity-container">
          {activities.map((activity, index) => (
            <div
              className="activity-card"
              key={index}
              onClick={() => openPopup(activity)}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="activity-image"
              />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <h3>{selectedActivity.title}</h3>
            <img
              src={selectedActivity.image}
              alt={selectedActivity.title}
              className="popup-image"
            />
            <p>{selectedActivity.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
