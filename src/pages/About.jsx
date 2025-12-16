import person from '../assets/image/person.jpg'
import showing1 from '../assets/image/sthemeit-1.png'
import computerperson from '../assets/image/computerperson.jpg'
import { Check,
    ChatCenteredDots,
    ClipboardText,
    InstagramLogo,
    TwitterLogo,
    LinkedinLogo,
    Handshake,
    ShieldCheck, 
    ChatCentered,
    LightbulbFilament,
    Medal} from "@phosphor-icons/react";
import Testimonial from '../components/UI/Testimonial';

import team from '../assets/json/team.json'


const About = () => {

    const size = () => {
    const width = window.innerWidth;

  if (width < 768) { 
    // sm (HP)
    return 15;
  } else if (width < 1024) { 
    // md
    return 20;
  } else { 
    // lg
    return 25;
  }
};


  return (
    <>
      <main className='text-xs lg:text-base bg-white text-black'>
            {/* gradient start top page */}
        <div className='relative w-full h-32 lg:h-72 overflow-hidden '>
            <img src={person} alt="" className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white'>
                <h1 className='text-3xl lg:text-5xl font-medium lg:font-bold'>Tentang Kami</h1>
            </div>
        </div>
        {/* gradient stop */}

        {/* section start */}
        <section className='py-10 lg:py-20 px-3 md:px-[5%] lg:px-[15%]  flex flex-wrap justify-between items-center gap-5 lg:gap-20 '>
            <div className='lg:w-450px] lg:h-[500px] overflow-hidden rounded-lg flex flex-col justify-center items-center'>
                <img src={showing1} alt="" className='lg:w-full h-full object-fill w-3/4' />
            </div>
            <div className='flex-1 py-10 flex flex-col justify-start items-start gap-5'>
                <h3 className='tont-semibold'>Solusi Perpajakan Profesional & Terpercaya</h3>
                <h1 className='text-2xl font-medium lg:text-4xl'>Mitra Profesional untuk Kepatuhan Pajak Anda</h1>
                <p>Kami menyediakan layanan konsultasi perpajakan yang akurat, patuh regulasi, dan efisien untuk individu maupun perusahaan. Dengan tim konsultan berpengalaman, kami membantu Anda mengelola kewajiban pajak secara optimal dan tepat waktu</p>

                <div className='flex flex-col justify-start items-start gap-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Konsultasi Pajak Pribadi & Badan</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Pelaporan & Pengisian SPT</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Tax Planning & Tax Review</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Pendampingan Pemeriksaan Pajak</p>
                    </div>
                </div>
                <button className='text-white px-4 py-2 lg:px-7 lg:py-3 rounded-md font-medium lg:font-semibold bg-choco'>Selengkapnya</button>
            </div>
        </section>

        <section className='w-full  px-5 py-10 lg:py-20 flex flex-col justify-center items-center gap-10 bg-primary text-center text-white'>
            <div>
                <h1 className='mb-5 text-2xl lg:text-4xl font-medium lg:font-bold'>Kami Memiliki<span className='text-choco'> Dedikasi Tinggi</span> dalam Konsultasi Perpajakan</h1>
                <p className='px-0 lg:px-10'>Kami berkomitmen memberikan layanan konsultasi pajak yang akurat, patuh regulasi, dan berorientasi pada solusi. Dengan pengalaman dan pemahaman mendalam terhadap peraturan perpajakan Indonesia, kami membantu klien mengelola kewajiban pajak secara efektif dan berkelanjutan.</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-28'>
                <div className='w-32 md:w-48  h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <ChatCenteredDots size={40} />
                    <p className='text-2xl lg:text-4xl'>1.345+</p>
                    <p>Klien Puas</p>
                </div>
                <div className='w-32 md:w-48  h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <ClipboardText size={40} />
                    <p className='text-2xl lg:text-4xl'>1.000+</p>
                    <p>Proyek Selesai</p>
                </div>
                <div className='w-32 md:w-48  h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <Medal size={40} />
                    <p className='text-2xl lg:text-4xl'>1.345+</p>
                    <p>Berpengalaman</p>
                </div>
                <div className='w-32 md:w-48 h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <ShieldCheck size={40} />
                    <p className='text-2xl lg:text-4xl'>99%</p>
                    <p>Kepatuhan Pelaporan</p>
                </div>
            </div>
        </section>

        <section className='px-5 py-10 lg:py-20 flex flex-col justify-center items-center gap-5 text-center'>
            <h3 className='text-2xl lg:text-3xl'>ALUR KERJA KAMI</h3>
            <h1>Lihat Flow Kami</h1>
            <p className='lg:w-2/3'>Kami menerapkan proses kerja yang terstruktur, transparan, dan berorientasi pada solusi untuk memastikan setiap kebutuhan perpajakan klien ditangani secara tepat dan profesional.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 lg:flex lg:flex-row lg:justify-end text-white '>
                <div className="px-5 py-7 flex-1 flex-col justify-center items-center gap-5 bg-primary  ">
                    <div  className='flex justify-center items-center'>
                        <ChatCentered size={40}/>
                    </div>
                     <div className='flex flex-col justify-center items-center gap-3 mt-2'>
                        <p className='text-xl lg:text-2xl'>Sampaikan Kebutuhan Anda</p>
                        <p>Mendengarkan dan memahami kebutuhan perpajakan</p>
                    </div>
                  
                </div>
                <div className="px-5 py-7 flex-1 flex-col justify-center items-center gap-5 bg-primary ">
                    <div  className='flex justify-center items-center'>
                        <LightbulbFilament size={40}/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 mt-2'>
                        <p className='mt-2 text-xl lg:text-2xl'>Analisis & Solusi</p>
                        <p>Solusi disusun berdasarkan regulasi dan praktik terbaik.</p>
                    </div>
                </div>
                <div className="px-5 py-7 md:col-span-2 lg:col-span-1 flex-1 flex-col justify-center items-center gap-5 bg-primary ">
                    <div  className='flex justify-center items-center'>
                        <Handshake size={40}/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 mt-2'>
                        <p className='text-xl lg:text-2xl'>Hasil Optimal</p>
                        <p>Pelaksanaan tepat, patuh dan memberikan kepastian bagi klien</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='relative w-full h-56 lg:h-96 border border-blue-70 overflow-hidden text-white'>
                <img src={computerperson} alt="" className='object-cover w-full h-full'/>
    
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-5 text-center p-4 lg:p-8'>
                        <h2 className='text-xl lg:text-5xl font-medium lg:font-semibold '>
                            Masih Bingung Mengelola <span className='text-choco'>Pajak Anda?</span> Konsultasikan Sekarang
                        </h2>
                        <p>
                            Kami siap membantu Anda mengelola kewajiban perpajakan secara tepat, patuh regulasi, dan efisien. Dapatkan pendampingan profesional sesuai kebutuhan Anda.
                        </p>
                        <button className='px-5 py-3 lg:px-7 lg:py-3 bg-choco rounded-lg'>Kontak Kami</button>
                    </div>
                </div>
        </section>

        <section className='py-5 md:py-10 lg:py-20 flex flex-col justify-center items-center gap-10 lg:gap-20'>
            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-28 text-center'>
                <div className='w-60 min-h-36 flex flex-col justify-center items-center gap-1 lg:gap-3 rounded-lg '>
                    <div className='border p-2 lg:p-3 bg-choco text-white rounded-md'>
                        <ChatCenteredDots size={40} />
                    </div>
                    <p className='text-lg lg:text-xl'>Efisiensi & Optimalisasi Pajak</p>
                    <p>Membantu mengelola kewajiban pajak secara efisien untuk mengoptimalkan keuangan bisnis Anda.</p>
                </div>
                <div className='w-60 min-h-36 flex flex-col justify-center items-center gap-1 lg:gap-3 rounded-lg'>
                    <div className='border p-2 lg:p-3 bg-choco text-white rounded-md'>
                        <ClipboardText size={40} />
                    </div>
                    <p className='text-lg lg:text-xl'>Pendampingan Profesional</p>
                    <p>Didukung tim konsultan berpengalaman yang siap memberikan solusi perpajakan sesuai kebutuhan Anda.</p>
                </div>
                <div className='w-60 min-h-36 flex flex-col justify-center items-center gap-1 lg:gap-3 rounded-lg'>
                    <div className='border p-2 lg:p-3 bg-choco text-white rounded-md'>
                        <Handshake size={40} />
                    </div>
                    <p className='text-lg lg:text-xl'>Dukungan untuk Pertumbuhan Bisnis</p>
                    <p>Solusi perpajakan yang tepat membantu bisnis Anda tumbuh lebih stabil dan berkelanjutan.</p>
                </div>
            </div>

            {/* meet our team */}
            <section className='flex flex-col justify-center items-center gap-5 lg:gap-10 '>
                <h2 className='px-5 py-2 text-black text-xs lg:text-sm bg-accent w-fit rounded-full lg:font-medium'>Tima Kami</h2>
                <h1 className='text-lg lg:text-3xl'>Meet Our Professional Team</h1>
                <div className="flex flex-wrap justify-center items-center gap-7">
                    {team.map((item)=>{
                        return(
                        <div>
                            <div className='flex flex-col justify-center items-start gap-3 pb-3  border-b-[1px] border-gray-300'>
                                <figure className='w-40 md:w-72 h-[250px] md:h-[400px] border rounded-md overflow-hidden'>
                                    <img src={`${item.profile}`} alt="" className='w-full h-full object-cover'/>
                                </figure>
                                <h3>{item.name} </h3>
                            </div>
                        <div className='mt-3 flex justify-between items-center text-gray-400'>
                            <p>{item.role} </p>
                            <div className='flex items-center gap-2'>
                                <a href="#"><InstagramLogo size={size()} /></a>
                                <a href="#"><TwitterLogo size={size()} /></a>
                                <a href="#"><LinkedinLogo size={size()} /></a>
                            </div>
                        </div>
                        </div>
                        )
                    })}
                </div>

            </section>

            <section className='w-full py-10'>
                <Testimonial />
            </section>
        </section>


      </main>
    </>
  )
}

export default About
