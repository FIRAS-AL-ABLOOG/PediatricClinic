
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">

      {/* زخارف خلفية ناعمة */}
      <div className="home-bg-shape shape-one"></div>
      <div className="home-bg-shape shape-two"></div>

      <div className="home-container">

        {/* =================================
            القسم اليسار: النصوص والمقولات
        ================================= */}

        <div className="home-content">

          <div className="home-welcome">
            <span>🩺</span>
            <p>أهلاً بكم في عيادتنا</p>
          </div>

          <h1 className="home-main-title">
            عيادة <span>طفلي</span>
          </h1>

          <h2 className="home-subtitle">
            لأن صحة طفلكم...
            <br />
            <strong>هي أجمل ما نملك 💙</strong>
          </h2>

          <p className="home-description">
            نرافق أطفالكم في كل مرحلة من مراحل نموهم،
            ونقدم لهم الرعاية الطبية بكل حب واهتمام،
            لأن كل طفل يستحق بداية صحية وسعيدة.
          </p>

          {/* مقولة مؤثرة */}
          <div className="home-quote">

            <span className="quote-mark">“</span>

            <p>
              الطفل السليم هو بداية
              <br />
              مستقبل أجمل
            </p>

            <small>
              — عيادة طفلي
            </small>

          </div>

          {/* زر حجز الموعد */}
          <div className="home-buttons">

            <Link
              to="/appointments"
              className="home-book-btn"
            >
              احجز موعد طفلك
              <span>←</span>
            </Link>

            <Link
              to="/posts"
              className="home-more-btn"
            >
              إرشادات الطبيب
            </Link>

          </div>

          {/* معلومات سريعة */}
          <div className="home-features">

            <div className="home-feature">
              <span>💙</span>
              <div>
                <strong>رعاية بحب</strong>
                <small>نهتم بصحة طفلك</small>
              </div>
            </div>

            <div className="home-feature">
              <span>🩺</span>
              <div>
                <strong>طب الأطفال</strong>
                <small>رعاية متخصصة</small>
              </div>
            </div>

          </div>

        </div>

        {/* =================================
            القسم اليمين: صورة الطبيبة
        ================================= */}

        <div className="home-doctor-section">

          {/* ملصق أعلى الصورة */}
          <div className="doctor-sticker sticker-star">
            ✦
          </div>

          <div className="doctor-sticker sticker-heart">
            💙
          </div>

          <div className="doctor-sticker sticker-sparkle">
            ✨
          </div>

          {/* صورة الطبيبة */}
          <div className="doctor-art">

            <div className="doctor-circle-bg"></div>

            <div className="doctor-image-frame">

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
                alt="طبيبة أطفال"
              />

            </div>

            {/* بطاقة اسم الطبيبة متداخلة مع الصورة */}
            <div className="doctor-name-card">

              <span className="doctor-small-label">
                طبيبتكم
              </span>

              <h2>
                د. سارة أحمد
              </h2>

              <p>
                طبيبة أطفال وحديثي الولادة
              </p>

              <div className="doctor-line"></div>

              <small>
                نعتني بصغاركم بكل حب 🤍
              </small>

            </div>

          </div>

          {/* ملصقات الأطفال */}
          <div className="child-sticker child-one">

            <div className="sticker-image">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=300&q=80"
                alt="طفل صغير"
              />
            </div>

            <span>🌟</span>

          </div>

          <div className="child-sticker child-two">

            <div className="sticker-image">
              <img
                src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=300&q=80"
                alt="طفل صغير يبتسم"
              />
            </div>

            <span>💛</span>

          </div>

          {/* بطاقة صغيرة */}
          <div className="doctor-badge">

            <span>🩺</span>

            <div>
              <strong>رعاية متكاملة</strong>
              <small>لأطفالكم الصغار</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;