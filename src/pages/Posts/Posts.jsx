import React from "react";
import "./Posts.css";

function Posts() {

  const posts = [
    {
      id: 1,
      title: "نصائح مهمة لنوم الطفل",
      date: "17 أيلول 2026",
      category: "نصيحة",
      text:
        "احرصوا على تنظيم وقت نوم الطفل وتجنب استخدام الأجهزة الإلكترونية قبل النوم.",
    },

    {
      id: 2,
      title: "أهمية تنظيف أسنان الأطفال",
      date: "15 أيلول 2026",
      category: "العناية بالطفل",
      text:
        "يجب تعليم الطفل تنظيف أسنانه مرتين يومياً باستخدام معجون أسنان مناسب لعمره.",
    },

    {
      id: 3,
      title: "متى يحتاج الطفل إلى مراجعة الطبيب؟",
      date: "12 أيلول 2026",
      category: "إرشادات",
      text:
        "في حال وجود حرارة مستمرة أو أعراض غير طبيعية، يفضل التواصل مع طبيب الأطفال.",
    },
  ];

  return (
    <section className="posts-page">

      <div className="posts-container">

        <div className="page-heading">
          <span>📚</span>
          <h1>إرشادات الطبيب</h1>
          <p>
            ملاحظات ونصائح مفيدة لصحة طفلك
          </p>
        </div>

        <div className="posts-grid">

          {posts.map((post) => (

            <article
              className="post-card"
              key={post.id}
            >

              <div className="post-header">

                <div className="doctor-avatar">
                  👨‍⚕️
                </div>

                <div>
                  <h3>
                 د. سارة أحمد
                  </h3>

                  <span>
                    {post.date}
                  </span>
                </div>

              </div>

              <div className="post-category">
                {post.category}
              </div>

              <h2>
                {post.title}
              </h2>

              <p>
                {post.text}
              </p>

              <button>
                قراءة المزيد
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Posts;