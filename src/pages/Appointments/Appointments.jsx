import React, { useState } from "react";
import "./Appointments.css";

function Appointments() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      child: "محمد",
      date: "2026-09-20",
      time: "10:00",
      type: "فحص عام",
      status: "مؤكد",
    },
  ]);

  const [form, setForm] = useState({
    child: "",
    age: "",
    phone: "",
    type: "فحص عام",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !form.child ||
      !form.age ||
      !form.phone ||
      !form.date ||
      !form.time
    ) {
      alert("يرجى تعبئة جميع المعلومات");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      child: form.child,
      date: form.date,
      time: form.time,
      type: form.type,
      status: "قيد المراجعة",
    };

    setAppointments([
      ...appointments,
      newAppointment,
    ]);

    setForm({
      child: "",
      age: "",
      phone: "",
      type: "فحص عام",
      date: "",
      time: "",
    });

    alert("تم إرسال طلب الموعد");
  };

  return (
    <section className="appointments-page">

      <div className="appointments-container">

        <div className="page-heading">
          <span>📅</span>
          <h1>حجز موعد</h1>
          <p>
            احجز موعداً لطفلك بسهولة
          </p>
        </div>

        <div className="appointments-layout">

          {/* نموذج الحجز */}
          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >

            <h2>بيانات الطفل</h2>

            <label>
              اسم الطفل
              <input
                type="text"
                name="child"
                value={form.child}
                onChange={handleChange}
                placeholder="اكتب اسم الطفل"
              />
            </label>

            <label>
              عمر الطفل
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="العمر"
              />
            </label>

            <label>
              رقم الهاتف
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="09xxxxxxxx"
              />
            </label>

            <label>
              نوع الزيارة
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option>فحص عام</option>
                <option>استشارة</option>
                <option>متابعة</option>
                <option>تطعيم</option>
              </select>
            </label>

            <div className="date-time">

              <label>
                التاريخ
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </label>

              <label>
                الوقت
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </label>

            </div>

            <button type="submit">
              تأكيد طلب الموعد
            </button>

          </form>

          {/* المواعيد */}
          <div className="appointments-list">

            <h2>
              مواعيدي
            </h2>

            {appointments.length === 0 ? (

              <div className="empty-appointments">
                لا يوجد مواعيد حالياً
              </div>

            ) : (

              appointments.map((appointment) => (

                <div
                  className="appointment-card"
                  key={appointment.id}
                >

                  <div className="appointment-top">

                    <div>
                      <h3>
                        {appointment.child}
                      </h3>

                      <span>
                        {appointment.type}
                      </span>
                    </div>

                    <strong>
                      {appointment.status}
                    </strong>

                  </div>

                  <div className="appointment-details">

                    <span>
                      📅 {appointment.date}
                    </span>

                    <span>
                      ⏰ {appointment.time}
                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Appointments;