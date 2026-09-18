import React, { useState } from "react";
import "./Store.css";

function Store() {

  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "معجون أسنان للأطفال",
      price: 5,
      icon: "🪥",
      description: "معجون مناسب للعناية بأسنان الأطفال.",
    },

    {
      id: 2,
      name: "فرشاة أسنان للأطفال",
      price: 4,
      icon: "🪥",
      description: "فرشاة ناعمة ومناسبة للأطفال.",
    },

    {
      id: 3,
      name: "ميزان حرارة",
      price: 12,
      icon: "🌡️",
      description: "ميزان حرارة رقمي للأطفال.",
    },

    {
      id: 4,
      name: "كريم أطفال",
      price: 7,
      icon: "🧴",
      description: "كريم للعناية ببشرة الطفل.",
    },

    {
      id: 5,
      name: "مقص أظافر للأطفال",
      price: 6,
      icon: "✂️",
      description: "أداة آمنة للعناية بأظافر الطفل.",
    },

    {
      id: 6,
      name: "علبة إسعافات صغيرة",
      price: 15,
      icon: "🩹",
      description: "مجموعة صغيرة للاستخدام المنزلي.",
    },
  ];

  const addToCart = (product) => {

    setCart([
      ...cart,
      product,
    ]);

    alert(`تمت إضافة ${product.name} إلى السلة`);
  };

  return (
    <section className="store-page">

      <div className="store-container">

        <div className="page-heading">

          <span>🛒</span>

          <h1>
            متجر العيادة
          </h1>

          <p>
            أدوات ومنتجات بسيطة للعناية بالأطفال
          </p>

        </div>

        {/* السلة */}
        <div className="cart-bar">

          <span>
            🛒 السلة
          </span>

          <strong>
            {cart.length} منتج
          </strong>

        </div>

        {/* المنتجات */}
        <div className="products-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">
                {product.icon}
              </div>

              <div className="product-info">

                <h2>
                  {product.name}
                </h2>

                <p>
                  {product.description}
                </p>

                <div className="product-bottom">

                  <strong>
                    ${product.price}
                  </strong>

                  <button
                    onClick={() => addToCart(product)}
                  >
                    أضف للسلة
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Store;