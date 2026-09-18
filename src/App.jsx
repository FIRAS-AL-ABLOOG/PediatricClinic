import React from "react";
import { Routes, Route } from "react-router-dom";

// الصفحات
import Home from "./pages/Home/Home";
import Appointments from "./pages/Appointments/Appointments";
import Posts from "./pages/Posts/Posts";
import Location from "./pages/Location/Location";
import Store from "./pages/Store/Store";

// المكونات المشتركة
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">

      {/* النافبار يظهر في كل الصفحات */}
      <Navbar />

      <main className="page-content">

        <Routes>

          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* صفحة المواعيد */}
          <Route path="/appointments" element={<Appointments />} />

          {/* صفحة منشورات الطبيب */}
          <Route path="/posts" element={<Posts />} />

          {/* صفحة التوقيت والموقع */}
          <Route path="/location" element={<Location />} />

          {/* المتجر */}
          <Route path="/store" element={<Store />} />

        </Routes>

      </main>

      {/* الفوتر يظهر في كل الصفحات */}
      <Footer />

    </div>
  );
}

export default App;