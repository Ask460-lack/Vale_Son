import React, { useState, useEffect, useRef } from "react";
import {FaAnglesLeft} from "react-icons/fa6";
import {FaAngleDoubleRight} from "react-icons/fa"


const testimonials = [
  {

    comment: "Aracımı kapımdan alıp tertemiz teslim ettiler.",
  },
  {

    comment: "Muayene sürecini hiç düşünmedim, her şeyi hallettiler.",
  },
  {

    comment: "Lastik değişimi için mükemmel hizmet.",
  },
  {
    comment: "Net söylüyorum: Araç muayenesi için en mantıklı çözüm bu. Hem uygun hem zahmetsiz.",
  },
  {
    comment: "Bu hizmeti kullanmadan önce nasıl uğraşıyormuşuz anlamıyorum. Artık tek tercihim Valepratik.",
  },
  {
    comment: "Zamanın ne kadar değerli olduğunu bilenler için kusursuz bir çözüm. Beklentimin çok üzerinde bir deneyim yaşadım.",
  },
  {
    comment: "Valepratik, hizmet kalitesiyle fark yaratıyor. Sürecin her aşamasında profesyonellik ve güven hissi ön planda.",
  },
  {
    comment: "İlk başta korktum ama şimdi herkese öneriyorum. Adamlar işi biliyor.",
  },
  {
    comment: "Ben böyle rahatlık görmedim. Arabayı verdim, çayımı içtim, geri geldi. Harika sistem!",
  },
  {
    comment: "Gerçekten profesyonel bir ekip. Araç teslim tutanağıyla çalışmaları çok güven veriyor. Kesinlikle tavsiye ederim.",
  },

];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Otomatik kayma
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Swipe başlangıç
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Swipe bitiş
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // sola swipe → ileri
      nextSlide();
    } else if (diff < -50) {
      // sağa swipe → geri
      prevSlide();
    }
  };

  return (
    <div className="w-full py-12">
      <div
        className="relative max-w-2xl mx-auto overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="h-[200px] flex items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full text-center px-6 transition-all duration-700
              ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : index < current
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <p className="text-lg italic mb-4 bg-gray-300 flex justify-center items-center h-40 rounded-4xl shadow-xl shadow-black">
                “{item.comment}”
              </p>
              <h4 className="font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>

        {/* Butonlar (desktop için) */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 cursor-pointer rounded-full"
        >
          <FaAnglesLeft/>
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 cursor-pointer rounded-full"
        >
         <FaAngleDoubleRight/>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;