import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // حالة فتح وإغلاق القائمة على الموبايل
  const [menuOpen, setMenuOpen] = useState(false);

  // إغلاق القائمة بعد الضغط على أي رابط
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* ==================================================
            شعار العيادة
        ================================================== */}

        <NavLink
          to="/"
          className="clinic-logo"
          onClick={closeMenu}
        >
          <span>🩺</span>

          <div>
            <strong>عيادة طفلي</strong>
            <small>طب الأطفال</small>
          </div>
        </NavLink>


        {/* ==================================================
            زر القائمة للموبايل
        ================================================== */}

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* ==================================================
            روابط الموقع
        ================================================== */}

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            onClick={closeMenu}
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/appointments"
            onClick={closeMenu}
          >
            المواعيد
          </NavLink>

          <NavLink
            to="/posts"
            onClick={closeMenu}
          >
            إرشادات الطبيب
          </NavLink>

          <NavLink
            to="/location"
            onClick={closeMenu}
          >
            التوقيت والموقع
          </NavLink>

          <NavLink
            to="/store"
            onClick={closeMenu}
          >
            المتجر
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;