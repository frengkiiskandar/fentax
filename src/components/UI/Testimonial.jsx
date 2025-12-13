import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimonial from '../../assets/json/testimonial.json'

// phospor icon
import {Quotes} from '@phosphor-icons/react'

// Import CSS Swiper
import "swiper/css";
import "swiper/css/pagination";
import Rating from "./Rating";


export default function Testimonial() {
  return (
    <div className="w-full px-4 ">
        <div className="flex flex-col justify-center items-center gap-3 ">
            <h3 className='uppercase text-sm lg:text-xl'>Apa Kata Mereka ?</h3>
            <h2 className='text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold'>Testimoni Kami</h2>
        </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={4} // tampilkan 3 testimonial sekaligus
        breakpoints={{
            0: {
            slidesPerView: 1, // mobile
            },
            640: {
            slidesPerView: 2, // tablet
            },
            1024: {
            slidesPerView: 3, // desktop
            },
        }}
      >
        {testimonial.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full flex justify-center items-center">
                <div className="card bg-base-100 p-6 text-center flex flex-col justify-center items-start max-w-[25rem] h-[20rem] lg:h-[25rem] ">
                    <div className="flex mb-4">
                    <Rating rating={t.rating} />
                </div>
                <p className="italic mb-4 text-gray-700 text-xs lg:text-sm text-left">&quot;{t.message}&quot;</p>
                <div className="w-full flex justify-between items-end">
                    <div className="flex justify-center items-center gap-5">
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-14 h-14 rounded-full mb-4"
                        />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className="font-semibold">{t.name}</h3>
                            <span className="text-sm text-gray-500">{t.role}</span>
                        </div>
                    </div>
                    <Quotes size={32} color="#77ce5f" weight="fill" />
                </div>
                
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
