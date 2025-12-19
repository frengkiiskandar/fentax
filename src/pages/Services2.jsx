import { Link } from "react-router-dom";

// image
import test1 from "../assets/image/test1.jpg";
import test2 from "../assets/image/test2.jpg";
import test3 from "../assets/image/test3.jpg";
import test4 from "../assets/image/test4.jpg";

import business from "../assets/image/business.jpg";

// icons

import person from "../assets/image/person.jpg";

const Services2 = () => {
  return (
    <div>
      <div className="relative w-full h-32 lg:h-72 overflow-hidden ">
        <img src={person} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white">
          <h1 className="text-3xl lg:text-5xl font-medium lg:font-bold ">
            Layanan Kami
          </h1>
        </div>
      </div>

      {/* Services */}
      <section className="px-3 md:px-[5%] lg:px-[15%] py-10 lg:py-20 px flex flex-col justify-center items-center gap-5 lg:gap-10">
        <h1 className="px-5 py-3 lg:px-7 lg:py-3 text-secondary bg-buttonClr rounded-full font-bold text-xs lg:text-sm">
          Layanan Kami
        </h1>
        <p className="text-lg lg:text-4xl text-center">
          Konsultasi Profesional untuk Solusi Terbaik
        </p>

        <div className="w-full  flex flex-wrap justify-between items-center gap-10 ">
          {/* 1 */}
          <div className="flex-1 py-5 border-t-[1px] border-black ">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <div className="relative group ">
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-md hidden group-hover:flex justify-center items-center">
                  <Link to={"/services/konsultasiperpajakan"}>
                    <button className="text-white lg:text-lg underline text-xs ">
                      Selengkapnya
                    </button>
                  </Link>
                </div>
                <img
                  src={test1}
                  alt=""
                  className="w-72 rounded-lg object-cover"
                />
              </div>
              <h5 className="text-xl">Konsultasi Perpajakan</h5>
              <p className="text-sm text-gray-600">
                Membantu mengelola dan mengembangkan aset secara optimal
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex-1 py-5 border-t-[1px] border-black ">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <div className="relative group ">
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-md hidden group-hover:flex justify-center items-center">
                  <button className="text-white lg:text-lg underline text-xs ">
                    Selengkapnya
                  </button>
                </div>
                <img
                  src={test2}
                  alt=""
                  className="w-72 rounded-lg object-cover"
                />
              </div>
              <h5 className="text-xl">Pajak & Akuntan Profesional</h5>
              <p className="text-sm text-gray-600">
                Perencanaan dan pelapoan pajak sesuai peraturan berlaku
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex-1 py-5 border-t-[1px] border-black ">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <div className="relative group ">
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-md hidden group-hover:flex justify-center items-center">
                  <button className="text-white lg:text-lg underline text-xs ">
                    Selengkapnya
                  </button>
                </div>
                <img
                  src={test3}
                  alt=""
                  className="w-72 rounded-lg object-cover"
                />
              </div>
              <h5 className="text-xl">Perencanaan FInansial</h5>
              <p className="text-sm text-gray-600">
                Strategi efektif untuk mencapai tujuan jangka panjang
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex-1 py-5 border-t-[1px] border-black ">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <div className="relative group ">
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-md hidden group-hover:flex justify-center items-center">
                  <button className="text-white lg:text-lg underline text-xs ">
                    Selengkapnya
                  </button>
                </div>
                <img
                  src={test4}
                  alt=""
                  className="w-72 rounded-lg object-cover"
                />
              </div>
              <h5 className="text-xl">Strategi Bisnis Profesional</h5>
              <p className="text-sm text-gray-600">
                Mendukung keputusan bisnis melalui analisis keuangan akurat
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full px-3 md:px-[5%] lg:px-[15%] py-10 lg:py-20 flex flex-col justify-start items-start gap-10 bg-black text-white relative"
        style={{
          backgroundImage: `url(${business})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 "></div>

        <h3 className="px-5 py-3 lg:px-7 lg:py-3  bg-gray-400 bg-opacity-30 backdrop-blur-sm rounded-full font-bold text-xs lg:text-sm">
          Our Process
        </h3>
        <h3 className="text-2xl lg:text-5xl lg:w-1/2">
          Redefining Boundaries with Briliance
        </h3>

        <div className="flex  flex-col lg:flex-row justify-start items-center gap-5">
          <div className="flex-1">
            <div className="flex justify-start items-center gap-5">
              <h2 className="text-2xl lg:text-5xl">01</h2>
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <p className="text-lg lg:text-3xl">Discover</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              quisquam!
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-start items-center gap-5">
              <h2 className="text-2xl lg:text-5xl">02</h2>
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <p className="text-lg lg:text-3xl">Discover</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              quisquam!
            </p>
          </div>
          <div className="flex-1">
            <div className="flex justify-start items-center gap-5">
              <h2 className="text-2xl lg:text-5xl">03</h2>
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <p className="text-lg lg:text-3xl">Discover</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              quisquam!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-3 md:px-[5%] lg:px-[15%] py-10 lg:py-20 flex flex-col lg:flex-row justify-start items-start gap-5 lg:gap-10">
        <div className="flex flex-col justify-start gap-3 lg:gap-5 items-start">
          <h1 className="w-fit px-3 lg:px-5 py-2 text-white text-xl lg:text-3xl bg-choco ">FAQ's</h1>
          <p className="text-xl lg:text-2xl font-semibold lg:font-bold">Pertanyaan yang sering Diajukan</p>
        </div>
        <div className="flex-1 text-lg lg:text-2xl">
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              Apakah Fentax adalah konsultan pajak resmi ?
            </div>
            <div className="collapse-content text-sm">
              <p className="text-slate-500 text-xs">OVERVIEW</p>
              <p>Ya, kami adalah konsultan pajak resmi dan terdaftar di direktorat jenderal pajak, kementrian keuangan Republik Indonesia, dengan izin prakterk C, level tertinggi dalam konsultan pajak Indonesia. Kami dapat mengangani perorangan, perusahaan dalam negeri atau perusahaan modal asing.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Apakah biayanya mahal ?
            </div>
            <div className="collapse-content text-sm">
                <p className="text-slate-500 text-xs">OVERVIEW</p>
              <p>Mahal/murah itu relatif tetapi yang kami suguhkan adalah kualitas jasa kami yang handal dan menyeluruh dengan biaya yang sepadan</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              <p>How do I update my profile information?</p>
            </div>
            <div className="collapse-content text-sm">
                <p className="text-slate-500 text-xs">OVERVIEW</p>
              <p>Go to "My Account" settings and select "Edit Profile" to make
              changes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services2;
