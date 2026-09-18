import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* ==================================================
          محتوى الفوتر
      ================================================== */}
      <div className="footer-container">

        {/* معلومات العيادة */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🩺</span>

            <div>
              <h2>عيادة طفلي</h2>
              <span>طب الأطفال وحديثي الولادة</span>
            </div>
          </div>

          <p className="footer-description">
            نحرص على تقديم رعاية طبية مميزة لطفلك،
            لأن صحته وراحته هي أولويتنا دائماً.
          </p>

          <Link to="/appointments" className="footer-book-btn">
            احجز موعداً الآن
            <span>←</span>
          </Link>
        </div>


        {/* إرشادات مهمة */}
        <div className="footer-section footer-tips">

          <h3>إرشادات مهمة</h3>

          <div className="footer-line"></div>

          <div className="tip-item">
            <span>✓</span>
            <p>يفضل حجز الموعد مسبقاً.</p>
          </div>

          <div className="tip-item">
            <span>✓</span>
            <p>يرجى الالتزام بموعد الحجز.</p>
          </div>

          <div className="tip-item">
            <span>✓</span>
            <p>يفضل إحضار التقارير الطبية السابقة.</p>
          </div>

          <div className="tip-item">
            <span>✓</span>
            <p>في الحالات الطارئة يرجى التواصل مباشرة.</p>
          </div>

        </div>


        {/* معلومات التواصل */}
        <div className="footer-section footer-contact">

          <h3>تواصل معنا</h3>

          <div className="footer-line"></div>

          <a href="tel:0951427056" className="contact-item">
            <span className="contact-icon">📞</span>

            <div>
              <small>الهاتف</small>
              <strong>0951427056</strong>
            </div>
          </a>

          <div className="contact-item">
            <span className="contact-icon">📍</span>

            <div>
              <small>العنوان</small>
              <strong>دمشق - سوريا</strong>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🕐</span>

            <div>
              <small>أوقات العمل</small>
              <strong>السبت - الخميس</strong>
            </div>
          </div>

        </div>

      </div>


      {/* ==================================================
          أسفل الفوتر
      ================================================== */}
      <div className="footer-bottom">

        <p>
          © 2026 عيادة طفلي - جميع الحقوق محفوظة
        </p>

        <span>
          رعاية صغيرة... لمستقبل أجمل 💙
        </span>

      </div>

    </footer>
  );
}

export default Footer;