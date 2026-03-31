import Logo from "./RemoveBg.png"
import React, { useState, useEffect } from "react";
import Gif1 from "./CarGif2.png"
import Gif from "./CarGif.gif"
import Görsel1 from "./Görsel1.jpeg"
import Görsel2 from "./Görsel2.jpeg"
import Video from "./Video.mp4"
import Comments from "./Comments";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import {FaXTwitter} from "react-icons/fa6";
import {FiYoutube} from "react-icons/fi";
import ScrollToTop from "./ScrollToTop";
import CallButton from "./CallButton";


function Vale() {

  const[open,setOpen]=useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Sayfa açıldıktan sonra animasyonu başlat
    setTimeout(() => {
      setShow(true);
    }, 400); // küçük gecikme animasyonu daha düzgün başlatır
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-gray-400 w-screen h-full relative'>

      <div id='part1' className='container mx-auto flex justify-between items-center border-b-4 p-2 rounded-2xl '>
        <img src={Logo} className='h-30 w-30'></img>
        <div className='space-x-6 md:flex hidden'>
          <a href='#hakkimizda' className='group hover:scale-105 w-fit h-6 text-xl duration-200'>Hakkımızda
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#hizmetlerimiz' className='group hover:scale-105 w-fit h-6 text-xl duration-200'>Hizmetlerimiz
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#görüsleriniz' className='group hover:scale-105 w-fit h-6 text-xl duration-200'>Görüşleriniz
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#iletisim' className='group hover:scale-105 w-fit h-6 text-xl duration-200'>İletişim
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-between w-8 h-6 group md:hidden mx-10 cursor-pointer"
        >
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300
            ${open ? "rotate-45 translate-y-2" : ""}
          `}
          />
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300
            ${open ? "opacity-0" : ""}
          `}
          />
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300
            ${open ? "-rotate-45 -translate-y-2" : ""}
          `}
          />
        </button>
      </div>
      <div className='absolute md:hidden right-0 bg-black opacity-60 rounded-bl-full z-10 duration-300'>
            {open?
            <div className='text-white w-50 h-70 flex flex-col pb-5 space-y-5 justify-center items-center'>
          <a href='#hakkimizda' className='group hover:scale-105 w-fit h-6  duration-200'>Hakkımızda
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#hizmetlerimiz' className='group hover:scale-105 w-fit h-6  duration-200'>Hizmetlerimiz
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#görüsleriniz' className='group hover:scale-105 w-fit h-6  duration-200'>Görüşleriniz
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
          <a href='#iletisim' className='group hover:scale-105 w-fit h-6  duration-200'>İletişim
             <div className='hidden group-hover:flex w-full h-1 bg-red-800 rounded-full'></div></a>
            </div>:null
            }
        </div>

      <div id="part2" className=" h-full  flex flex-col items-center pt-10 pb-5 ">

         <div className="w-full flex justify-center items-center overflow-hidden">
          <img
          src={Gif1}
          alt="Ankara vale araç bakım"
          className={` w-75 md:w-150 transition-all duration-1000 ease-out
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}/>
        </div>
        
        <div className="container mx-auto flex flex-col justify-center text-center gap-2 text-xl md:text-5xl font-bold text-white pt-10">
        <span
          className={`transition-all duration-1000 ease-out
          ${show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} `}>
          Ankara'da aracınızın muayene ve bakım hizmetlerini,
        </span>
        <span
          className={`transition-all duration-1000 ease-out
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          bir telefonla sizin yerinize yapıyoruz.
        </span>
      </div>

      </div>

      <div className="w-screen flex justify-center ">
        <span
          className={`transition-all ease-out w-screen flex justify-center
          ${show ? " opacity-100" : "opacity-0"} `}>
          <CallButton/>
          <div className=" flex flex-col justify-center pb-5 text-xl md:text-5xl place-items-center"> +90 541 102 22 39
          <div className="w-40 h-1 md:h-2 rounded-full md:w-100 bg-black"></div>
       </div>
        </span>
      </div>



      <div id="hakkimizda" className="container mx-auto md:pt-7 pb-10 md:pb-15 px-2 md:px-25">
        <p className=" text-center md:text-xl ">
          Günümüzün yoğun temposunda araç bakımı, muayene ve lastik değişimi gibi işlemler çoğu zaman ertelenen ya da zahmetli hale gelen süreçlerdir. Biz, tam da bu noktada devreye giriyoruz.

          Şirketimiz, araç sahiplerinin hayatını kolaylaştırmak amacıyla kurulmuştur. Amacımız; müşterilerimizin araçlarını bulundukları konumdan güvenle teslim alarak, gerekli tüm bakım, muayene ve servis işlemlerini profesyonel ekiplerimizle gerçekleştirmek ve araçlarını eksiksiz şekilde teslim etmektir.

          Her aracı kendi aracımız gibi görüyor, sürecin her aşamasında şeffaflık ve güveni ön planda tutuyoruz. Alanında uzman kadromuz ve iş ortaklarımız sayesinde, aracınızın ihtiyacı olan tüm işlemleri titizlikle yerine getiriyoruz.
          </p>

          <div className="flex flex-col md:flex-row md:space-x-5 md:items-center">
          <img src={Gif} className="container mx-auto py-5 md:h-120 md:w-150 md:rounded-l-full"></img>
          <div>
          <p className=" text-center md:text-xl ">
          Vizyonumuz, araç bakım süreçlerini zahmetsiz hale getirerek sektörde güvenilir ve yenilikçi bir marka olmaktır. 
          </p>
          <p className=" text-center md:text-xl pt-3 md:pt-6 ">
          Misyonumuz ise, müşterilerimize güvenilir hizmet sunarken onların zamanını en verimli şekilde değerlendirmelerine yardımcı olmaktır.
          </p>
          </div>
          </div>


            
      </div>

      <div id="hizmetlerimiz" className="md:pt-13">
        <div className="md:container mx-auto flex flex-col md:flex-row md:space-x-8 justify-center items-center md:items-center">
          <img src={Görsel1} className=" h-120 w-100 md:h-160 md:w-120 md:rounded-l-4xl md:hover:scale-110 duration-200 cursor-pointer pb-5 md:pb-0 shadow-yellow-200 shadow-xl"></img>
          <img src={Görsel2} className=" h-120 w-100 md:h-160 md:w-120 md:rounded-r-4xl md:hover:scale-110 duration-200 cursor-pointer shadow-yellow-200 shadow-xl"></img>
        </div>
      </div>

      <div id="görüsleriniz" className="h-full">
          <video src={Video} controls disablePictureInPicture className="md:container mx-auto pt-5 md:h-120 md:w-180"></video>
          <div className="h-full">
            <Comments/>
          </div>
      </div>

      <div id="iletisim" className="flex flex-col justify-center items-center pt-10 md:pb-10 space-y-5">
        <h1 className="text-4xl md:text-6xl pb-5">+90 541 102 22 39</h1>
        <a href="https://wa.me/905411022239?text=Merhaba" target='blank' className='flex flex-col items-center gap-y-3 text-xl animate-bounce md:text-2xl'>Whatsapp iletişim için <FaWhatsapp className='bg-green-500 w-15 h-15 rounded-full text-white font-extrabold hover:bg-green-400 duration-300 hover:scale-105 p-2 active:scale-100'/></a>

        <div className="flex flex-col md:flex-row md:gap-10 space-y-5">
          <div className="md:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1873.7647251960345!2d32.85024748546234!3d39.88379797552796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34580157b3219%3A0xb577afee99e8c2a9!2sG%C3%BCzeltepe%2C%20Ahmet%20Mithat%20Efendi%20Sk.%2C%2006690%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1774877696250!5m2!1str!2str" className="h-50 w-full"></iframe>
          </div>

          <div className="md:w-1/2 text-center my-auto">
            <div>
              <p className="text-xl md:text-2xl tracking-widest border-b-2 mx-10">Adres</p>
              <p className="mx-3">Güzeltepe Mahallesi, Ahmet Mithat Efendi Sokak No:51/1, 06690 Çankaya/ANKARA</p>
            </div>

            <div className="flex justify-center space-x-5 py-7">
              <a href="https://x.com/vale_pratik" target='blank'><FaXTwitter className='border-b-2 font-bold tracking-wide hover:scale-150 hover:text-amber-50 duration-500 cursor-pointer mb-5 h-7 w-7'/></a>
              <a href="https://www.instagram.com/vale.pratik/" target='blank'><GrInstagram className='border-b-2 font-bold tracking-wide hover:scale-150 hover:text-amber-50 duration-500 cursor-pointer mb-5 h-7 w-7'/></a>
              <a href="https://www.youtube.com/@ValePratik" target='blank'><FiYoutube className='border-b-2 font-bold tracking-wide hover:scale-150 hover:text-amber-50 duration-500 cursor-pointer mb-5 h-7 w-7'/></a>
            </div>
          </div>
        </div>
      </div>

          
    <div className='flex w-full h-30 justify-center items-center bg-black'>
      <p className='text-amber-100 flex flex-row'>Copyright &copy; 2026</p>
    </div>


      <ScrollToTop/>
      </div>
  
  )
}

export default Vale
