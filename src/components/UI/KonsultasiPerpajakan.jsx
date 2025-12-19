import Testimonial from '../UI/Testimonial'

// image
import person from "../../assets/image/person.jpg";
import test1 from "../../assets/image/test1.jpg";
// icons
import { UserCircleCheck, Chat, CheckFat } from "@phosphor-icons/react";

const KonsultasiPerpajakan = () => {
  const size = () => {
    const width = window.innerWidth;

    if (width < 768) {
      // sm (HP)
      return 120;
    } else if (width < 1024) {
      // md
      return 100;
    } else {
      // lg
      return 100;
    }
  };
  return (
    <>
      <div className="relative w-full h-32 lg:h-72 overflow-hidden ">
        <img src={person} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
          <h1 className="text-xl lg:text-5xl font-medium lg:font-bold ">
            Konsultasi Perpajakan
          </h1>
        </div>
      </div>

      <div className="px-12 md:px-[5%] lg:px-[15%] py-10 lg:py-32 bg-gray-400 bg-opacity-15 flex flex-wrap justify-center items-center gap-10">
        {/* 1 */}
        <div className="lg:w-[25rem] flex justify-start items-start gap-5 font-light">
          <UserCircleCheck size={size()} color="#4374d6" />
          <div>
            <p className="text-xl lg:text-3xl ">Kualifikasi</p>
            <p className="text-sm">
              Tim kami telah konsisten lebih dari 20 kualifikasi pengalaman dari
              akuntan,marketing dan manajer
            </p>
          </div>
        </div>

        <div className="lg:w-[25rem] flex justify-start items-start gap-5 font-light">
          <Chat size={size()} color="#4374d6" />
          <div>
            <p className="text-xl lg:text-3xl ">Konsultasi Gratis</p>
            <p className="text-sm">
              Kami menjamin client selalu mendapatkan konsuiltasi gratis untuk
              menemukan solusi dari setiap masalah
            </p>
          </div>
        </div>

        <div className="lg:w-[25rem] flex justify-start items-start gap-5 font-light">
          <CheckFat size={size()} color="#4374d6" />
          <div>
            <p className="text-xl lg:text-3xl ">100% Garansi</p>
            <p className="text-sm">
              Kami memberikan jaminan garansi 100% untuk mengantar anda ke level
              probabilitas dan kesuksesan finansial
            </p>
          </div>
        </div>
      </div>

      {/* section keterangan services */}

      <div className="px-3 md:px-[5%] lg:px-[15%] py-10 lg:py-20 flex flex-wrap justify-start items-start gap-10  ">
        <figure className="hidden lg:block lg:w-[40rem] lg:h-[25rem] ">
          <img src={test1} alt="" className="w-full h-full object-cover" />
        </figure>

        <div className="flex flex-1 flex-col justify-items-start items-start gap-5 lg:gap-8">
          <h1 className="text-2xl lg:text-4xl">Konsultasi Perpajakan</h1>
            <p>
              Get a complete bookkeeping solution for your business including :
              bank reconciliations, cusromer incoiving and collections and more
            </p>
          <div className="text-sm lg:text-base text-slate-600">
            <p className="">
              Memberikan saran dan masukan tentang perpajakan terbaik untuk Anda
              dan bisnis Anda, dengan mengacu pada Undang-Undang Perpajakan yang
              berlaku di Indonesia
            </p>
            <p className="">
              Memberikan anda gambaran mendetail tentang solusi praktis dari
              masalah perpajakan yang anda hadapi
            </p>
            <p className="">
              Memberikan anda gambaran mendetail tentang solusi praktis dari
              masalah perpajakan yang anda hadapi.
            </p>
          </div>
          <button className="bg-choco px-5 py-3 text-white text-xs lg:text-sm">Pelajari Selengkapnyna</button>
        </div>
      </div>

      <div className="w-full py-10 lg:py-24 bg-primary flex flex-wrap justify-center items-center gap-5 lg:gap-10 text-white text-center">
        <h3 className="text-xl lg:text-4xl">We Offer Quality <span className="font-bold">Tax Consultation Support</span></h3>
        <button className="px-3 py-2 lg:px-7 lg:py-3 text-xl bg-choco">Konsultasi Sekarang</button>
      </div>

      <div className="py-10 lg:py-20">
        <Testimonial />
      </div>
    </>
  );
};

export default KonsultasiPerpajakan;
