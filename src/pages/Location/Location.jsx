import React from "react";
import "./Location.css";

function Location() {

  const workingHours = [
    {
      day: "السبت",
      time: "10:00 صباحاً - 6:00 مساءً",
    },
    {
      day: "الأحد",
      time: "10:00 صباحاً - 6:00 مساءً",
    },
    {
      day: "الاثنين",
      time: "10:00 صباحاً - 6:00 مساءً",
    },
    {
      day: "الثلاثاء",
      time: "10:00 صباحاً - 6:00 مساءً",
    },
    {
      day: "الأربعاء",
      time: "10:00 صباحاً - 6:00 مساءً",
    },
    {
      day: "الخميس",
      time: "10:00 صباحاً - 3:00 مساءً",
    },
    {
      day: "الجمعة",
      time: "مغلق",
    },
  ];

  return (
    <section className="location-page">

      <div className="location-container">

        <div className="page-heading">
          <span>📍</span>
          <h1>التوقيت والموقع</h1>
          <p>
            تعرف على أوقات الدوام ومكان العيادة
          </p>
        </div>

        <div className="location-grid">

          {/* أوقات الدوام */}
          <div className="hours-card">

            <h2>
              🕐 أوقات الدوام
            </h2>

            <div className="hours-list">

              {workingHours.map((item) => (

                <div
                  className="hour-row"
                  key={item.day}
                >

                  <strong>
                    {item.day}
                  </strong>

                  <span
                    className={
                      item.time === "مغلق"
                        ? "closed"
                        : ""
                    }
                  >
                    {item.time}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* الموقع */}
          <div className="address-card">

            <div className="map-placeholder">
              📍
            </div>

            <h2>
              موقع العيادة
            </h2>

            <p>
              دمشق - سوريا
              <br />
              شارع المثال، بناء رقم 25
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              فتح الموقع على الخريطة
            </a>

            <div className="contact-box">

              <span>
                📞
              </span>

              <div>
                <small>للاستفسار والحجز</small>
                <strong>
                  09XXXXXXXX
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Location;