
import test1 from '../../assets/image/test1.jpg'
import test2 from '../../assets/image/test2.jpg'
import test3 from '../../assets/image/test3.jpg'
const Tagline = () => {
  return (
    <>
      <section className="w-full p-10 bg-lightcoco flex flex-col lg:flex-row justify-between gap-10 items-center rounded-lg">
        {/* kiri */}
        <div className="flex-1">
          <div className="flex flex-col justify-start items-start gap-5">
            <button className="px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-sm">
              Mulai Sekarang
            </button>
            <p className="text-4xl font-semibold">
              Memupuk Pertumbuhan, Satu Ide Dalam Satu Waktu
            </p>
            <p className="text-xs md:text-sm lg:text-base">
              Memberikan layanan perpajakan dan konsultasi keuangan yang akurat,
              patuh terhadap regulasi, serta disesuaikan dengan kebutuhan
              individu dan bisnis
            </p>
            <button className="px-8 py-4 bg-choco text-white rounded-lg">
              Selengkapnya
            </button>
          </div>
        </div>
        {/* kanan */}
        <div className="flex-1 ">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <div className="w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden ">
              <img src={test1} alt="" className="object-cover" />
            </div>
            <div className="w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden ">
              <img src={test2} alt="" className="object-cover" />
            </div>
            <div className="w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden ">
              <img src={test3} alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tagline;
