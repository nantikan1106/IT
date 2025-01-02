import React from "react";

function ContactUs() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ติดต่อเรา</h1>
      <p>
        สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา
      </p>
      <p>ที่อยู่: 2 ถนน สุขเกษม ตำบล ช้างเผือก อำเภอเมืองเชียงใหม่ เชียงใหม่ 50300</p>
      <p>โทรศัพท์: 053 213 061</p>

      <h2>แผนที่</h2>
      <div style={{ marginTop: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.517036676563!2d98.99055821489625!3d18.813355887232638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a829b2707d5%3A0x8fefedb3cc486f42!2sLanna%20Polytechnic%20College!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
