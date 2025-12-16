import showing1 from '../assets/image/sthemeit-1.png'
import {Check, Certificate, Scales, Gavel} from "@phosphor-icons/react";

// image
import polygon from '../assets/image/polygonBg.jpg'

const WhyUs = () => {

    const size = () => {
    const width = window.innerWidth;

  if (width < 768) { 
    // sm (HP)
    return 50;
  } else if (width < 1024) { 
    // md
    return 60;
  } else { 
    // lg
    return 70;
  }
};

  return (
    <>
      <section className='py-10 lg:py-20 px-3 md:px-[5%] lg:px-[10%]  flex flex-wrap justify-between items-center gap-5 lg:gap-20 relative'>
        <div className='absolute inset-0 w-full h-full pointer-events-none -z-10'>
            <img src={polygon} alt="" className='w-full h-full opacity-20 object-cover'/>
        </div>
        
        <div className='flex-1 py-10 flex flex-col justify-start items-start gap-5'>
            <div className='flex justify-start items-center bg-buttonClr rounded-full'>
                <span className='text-white w-12 h-10 rounded-full flex justify-center items-center bg-primary'>?</span>
                <h3 className='px-2 py-3 lg:px-7 lg:py-3 text-secondary  font-bold text-xs lg:text-sm'>Mengapa Memilih Kami ?</h3>
            </div>
            <h1 className='text-2xl font-medium lg:text-4xl'>Kami memberikan keahlian yang dapat anda percaya pada layanan kami</h1>
            <p className='text-sm lg:text-base indent-10'>Kami membentu anda dalam proses pengembangan bisnis, perbaikan skema pajak dan alur bisnis, mencari solusi dan perencanaan pajak terbaik. Kami telah terbukti membantu banyak pengusaha di Indonesia dalam pengelolaan pajak yang efektif dan memenuhi kewajiban pajak dengan tidak menlanggar aturan yang berlaku</p>

            <div className='flex flex-col justify-start items-start gap-2'>
                {/* 1 */}
                <div className='flex flex-wrap justify-start items-start gap-2 '>
                    <Certificate size={size()} color="#69573b" weight="fill" />
                    <div className='flex flex-col items-start'>
                        <h2 className='text-xl lg:text-3xl font-semibold'>Berpengalaman </h2>
                        <p className='text-sm lg:text-base text-gray-700'>Dengan pengalaman sejak 2011 sebagai konsultan pajak, kami memiliki pengalaman di lapangan yang sangat berguna bagi anda dalam mengatasi berbagai masalah perpajakan anda</p>
                    </div>
                </div>

                {/* 2 */}
                <div className='flex flex-wrap justify-start items-start gap-2 '>
                    <Scales size={size()} color="#69573b" weight="fill" />
                    <div className='flex flex-col items-start'>
                        <h2 className='text-xl lg:text-3xl font-semibold'>Wawasan Regulasi </h2>
                        <p className='text-sm lg:text-base text-gray-700'>Kami selalu mengikuti perkembangan regulasi pajak terbaru untuk memastikan setiap informasi yang kami sampaikan akurat dan dapat diandalkan. Dengan wawasan regulasi yang kami miliki, kami membantu Anda memahami perubahan aturan, meminimalkan risiko, dan mengambil keputusan pajak yang tepat dengan percaya diri</p>
                    </div>
                </div>

                {/* 3 */}
                <div className='flex flex-wrap justify-start items-start gap-2 '>
                    <Gavel size={size()} color="#69573b" weight="fill" />
                    <div className='flex flex-col items-start'>
                        <h2 className='text-xl lg:text-3xl font-semibold'>Referensi Hukum Resmi </h2>
                        <p className='text-sm lg:text-base text-gray-700'>Kami mendasarkan setiap rekomendasi dan informasi pajak pada putusan hukum yang berlaku dan sah. Dengan berpegang pada sumber hukum resmi, kami memastikan saran yang kami berikan tidak hanya akurat, tetapi juga dapat dipertanggungjawabkan secara hukum, sehingga Anda selalu aman dan terlindungi</p>
                    </div>
                </div>

            </div>
        </div>

        {/* gambar */}
        <div className='lg:w-[650px] lg:h-[700px] overflow-hidden rounded-lg flex flex-col justify-center items-center'>
            <img src={showing1} alt="" className='lg:w-full h-full object-fill w-3/4' />
        </div>
    </section>

    </>
  )
}

export default WhyUs
