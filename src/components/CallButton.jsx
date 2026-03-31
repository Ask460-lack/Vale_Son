import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";

function CallButton() {
  const phoneNumber = "+905411022239";

  const handleCall = () => {
    // Sadece mobil cihazlarda çalıştır
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("Lütfen bu özelliği telefonunuzdan kullanın.");
    }
  };

  return (
    <button className=' flex w-8 h-8 md:w-15 md:h-15 rounded-full bg-red-600 justify-center items-center text-xl md:text-5xl mr-2 animate-pulse cursor-pointer'
      onClick={handleCall}>
      <BiSolidPhoneCall/>
    </button>
  );
}

export default CallButton;


