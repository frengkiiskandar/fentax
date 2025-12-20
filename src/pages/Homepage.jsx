import hero from '../assets/image/hero1.jpg'
import clients from '../assets/json/client.json'
import sun from '../assets/logo/sun.svg'
import book from '../assets/logo/book.svg'
import chart from '../assets/logo/chart.svg'

// image anf logos
import logo from '../assets/logo/logos.png'
import visimisi from '../assets/image/visimisi.jpg'
import test1 from '../assets/image/test1.jpg'
import test2 from '../assets/image/test2.jpg'
import test3 from '../assets/image/test3.jpg'
import test4 from '../assets/image/test4.jpg'
import Rating from '../components/UI/Rating'
import business from '../assets/image/business.jpg'
import triangle from '../assets/logo/triangle.png'


// blog
import blog from '../assets/json/blog.json'
import Tagline from '../components/UI/Tagline'
import {  useLayoutEffect, useRef } from 'react'

// gsap
import gsap from 'gsap'


const Homepage = () => {

    const welcomeRef = useRef([])
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.fromTo(welcomeRef.current,
                {x:-30, opacity:0},
                {x:1, opacity:1, duration:1, stagger:0.3,ease:'power3.inOut'}
            )
        })

        return()=> ctx.revert()
    },[])

  return (
    <>
    <main className='bg-white text-black'>
        <section className=' bg-primary px-3 md:px-[5%] lg:px-[15%] overflow-hidden '>
                <div className='min-h-screen '>
                    {/* <section className='pt-28 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap  '> */}
                    <section className='pt-10 lg:pt-20 flex flex-col md:flex-row justify-between items-center gap-1 flex-wrap  '>
                        {/* kiri */}
                        <div className='h-full w-full lg:w-1/2 flex flex-col justify-center items-start gap-7  '>
                            <div>
                                <h1 ref={(element)=>welcomeRef.current[0]= element} className='px-3 py-2 text-accent text-xs lg:text-sm bg-choco w-fit rounded-full font-medium lg:font-semibold mb-5 '>Selamat Datang</h1>
                                <h2 ref={(element)=>welcomeRef.current[1]= element} className='text-2xl lg:text-[60px] leading-normal text-white font-medium '>Pendamping Pajak Profesional Untuk Bisnis yang Tumbuh
                                    <span className="text-rotate">
                                        <span className="justify-items-start">
                                            <span>Aman</span>
                                            <span>Profesional</span>
                                            <span>Selalu</span>
                                        </span>
                                        </span>
                                </h2>
                            </div>
                            <p ref={(element)=>welcomeRef.current[2]=element} className='text-gray-300 text-xs lg:text-base'>Dukungan profesionan untuk UMKM, karyawan, freelancer, dan perusahaan yang butuh kepastian dan efisiensi pajak.</p>
                            <div className='flex justify-start items-center gap-5 lg:gap-10'>
                                <button className='text-white px-4 py-2 lg:px-7 lg:py-3 rounded-md text-xs lg:text-sm font-medium lg:font-semibold bg-choco'>Hubungi Kami</button>
                                <button className='text-choco px-4 py-2 lg:px-7 lg:py-3 rounded-md text-xs lg:text-sm font-medium lg:font-semibold bg-white'>Selengkapnya</button>
                            </div>
                            <div className='w-full flex justify-start items-center gap-10 lg:gap-20  border-gray-500 text-white mt-5 text-xs lg:text-sm'>
                                <div className='flex-1 flex-col justify-start items-start gap-3 py-5 md:py-10 border-t-[1px] border-gray-600 '>
                                    <div className="flex">
                                        <Rating rating={4.5}/>
                                    </div>
                                    <p className='mt-3'>4.5/5</p>
                                    <p>Dari lebih 1000 review</p>
                                </div>
                                <div className='flex-1 flex-col justify-start items-start gap-3 py-5 md:py-10 border-t-[1px] border-gray-600'>
                                    <div className="flex">
                                        <Rating rating={4.5}/>
                                    </div>
                                    <p className='mt-3'>4.5/5</p>
                                    <p>Dari leih 1000 review</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* kanan */}
                        <div className='bg-primary h-[250px] w-full lg:w-[500px] lg:h-[750px] p-5 rounded-lg relative' style={{backgroundImage:`url(${hero})`, backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundColor:'#1f1b1c'}}>
                        <div className='flex flex-wrap justify-start items-end gap-2 lg:gap-5 absolute bottom-5'>
                            <p className='bg-gray-500/40 text-white p-2 text-xs lg:text-base lg:px-3 lg:py-2 backdrop-blur-xs rounded-xl'>Finance Planning</p>
                            <p className='bg-gray-500/40 text-white p-2 text-xs lg:text-base lg:px-3 lg:py-2 backdrop-blur-xs rounded-xl'>Investor Management</p>
                            <p className='bg-gray-500/40 text-white p-2 text-xs lg:text-base lg:px-3 lg:py-2 backdrop-blur-xs rounded-xl'>Business Plan</p>
                            <p className='bg-gray-500/40 text-white p-2 text-xs lg:text-base lg:px-3 lg:py-2 backdrop-blur-xs rounded-xl'>Test & Accounting</p>
                        </div>
                        </div>
                    </section>
                </div>

                {/* CLIENT */}
                <section className='px-0 md:px-10 lg:px-[10%] pb-10 lg:pb-40 '>
                    <h2 className='py-5 text-center text-white text-3xl'>Our Beloved Client</h2>
                    <div className='flex flex-wrap justify-center items-center gap-3 md:gap-10 '>
                    {clients.map((client)=>(
                    <div className='p-5 border border-choco rounded-md'>
                        <img src={client.img} alt="" className='w-[50px] md:w-[120px]'/>
                    </div>
                    ))}
                    </div>
                </section>
        </section>

            {/* what we do */}
            <section className='py-24 px-10 md:px-[5%] lg:px-[15%] flex flex-col justify-center items-center gap-10 bg-[#F3F4F2] text-center text-black'>
                <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary bg-buttonClr rounded-full font-bold text-xs lg:text-sm'>What We Do</h3>
                            <h1 className='text-3xl '>Transformasi , Inovasi, Keberhasilan</h1>

                <div className=' flex flex-wrap justify-center items-center gap-7'>
                    <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                        <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                            <img src={sun} alt="" />
                        </div>
                        <p className='text-xl'>Konsultasi Operasional</p>
                        <p className='text-sm lg:text-base'>Optimalkan proses bisnis dan kepatuhan pajak perusahaan.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                        <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                            <img src={book} alt="" />
                        </div>
                        <p className='text-xl'>Konsultasi Strategi</p>
                        <p className='text-sm lg:text-base'>Rancang strategi pajak tepat untuk pertumbuhan bisnis.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                        <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                            <img src={chart} alt="" />
                        </div>
                        <p className='text-xl'>Konsultasi Keuangan</p>
                        <p className='text-sm lg:text-base'>Solusi keuangan lengkap untuk manajemen pajak yang efektif</p>
                    </div>
                </div>
            </section>

            <div className='flex flex-col px-3 md:px-[5%] lg:px-[15%] justify-center items-center gap-10 py-10 lg:py-20 '>
                {/* about us */}
                <section className='lg:w-1/2 flex flex-col justify-start items-start gap-3 md:gap-10 '>
                    <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-xs md:text-sm'>Tentang Kami</h3>
                    <h2 className='text-2xl md:text-4xl tracking-normal'>Solusi Hari Ini <br />Untuk Keberhasilan Esok</h2>
                    <div className='font-light text-gray-600 text-justify text-sm lg:text-base'>
                        <p className='indent-5 md:indent-0'>Kami menyediakan layanan konsultasi pajak dan keuangan yang tepat, efisien, dan sesuai regulasi, membantu bisnis Anda berkembang dengan aman.</p>
                        <p className='indent-5 md:indent-0'>Dapatkan panduan dan strategi perpajakan yang praktis serta mudah diterapkan untuk mencapai kepatuhan penuh dan pertumbuhan yang berkelanjutan.</p>
                    </div>
                </section>
                <div className='w-full'>
                    <button className='text-white px-4 py-3 lg:px-8 lg:py-4 text-xs md:text-base rounded-md font-semibold bg-choco'>Selengkapnnya</button>
                </div>

                <section className='w-full flex flex-col md:flex-row justify-between items-center gap-10 px-10 md:px-0'>
                    <div className="w-full flex-1 border-t-[1px] border-black py-10  ">
                        <div className="relative inline-block">
                            <span className="text-3xl lg:text-4xl">25</span>
                            <span className="absolute -top-5 -right-5 text-4xl ">+</span>
                        </div>
                        <p className='text-gray-600 text-sm mt-2'>Pengalaman Konsultasi Pajak</p>
                    </div>

                    <div className="w-full flex-1 border-t-[1px] border-black py-10">
                        <div className="relative inline-block">
                        <span className="text-3xl lg:text-4xl">$ 40 m</span>
                            <span className="absolute -top-5 -right-5 text-4xl ">+</span>
                        </div>
                        <p className='text-gray-600 text-sm mt-2'>Manfaat optimal untuk klien </p>
                    </div>

                    <div className="w-full flex-1 border-t-[1px] border-black py-10">
                        <div className="relative inline-block">
                        <span className="text-3xl lg:text-4xl">870</span>
                            <span className="absolute -top-5 -right-5 text-4xl ">+</span>
                        </div>
                        <p className='text-gray-600 text-sm mt-2'>Proyek perpajakan dan konsultasi selesai</p>
                    </div>

                    <div className="w-full flex-1 border-t-[1px] border-black py-10">
                        <div className="relative inline-block">
                        <span className="text-3xl lg:text-4xl">99.9</span>
                            <span className="absolute -top-5 -right-5 text-4xl ">%</span>
                        </div>
                        <p className='text-gray-600 text-sm mt-2'>Tingkat kepatuhan klien</p>
                    </div>
                
                </section>

                {/* our mission and vision */}
                <section className='flex flex-wrap justify-center items-center gap-10 w-full '>
                    <div className='w-full lg:basis-2/3 h-72 rounded-md overflow-hidden relative'>
                        <img src={visimisi} alt="" className='w-full h-full object-cover'/>
                        <div className='w-full p-5 absolute inset-0 bg-blue-950 bg-opacity-55 flex justify-end items-end gap-5 text-white '>
                            <div className='flex-1 '>
                                <h2 className='text-2xl'>Visi Kami</h2>
                                <p className='text-gray-300 text-xs md:text-sm'>Menjadi mitra konsultasi pajak terpercaya untuk pertumbuhan klien</p>
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-2xl'>Misi Kami</h2>
                                <p className='text-gray-300 text-xs md:text-sm'>Memberikan solusi pajak praktis, efisien, dan aman.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 h-72 rounded-md bg-lightcoco overflow-hidden'>
                        <img src={business} alt="" className='w-full h-full object-cover'/>
                    </div>
                </section>  

                <section className='flex flex-wrap justify-center items-center gap-10 w-full'>
                    <div className='flex-1 h-52 lg:h-96 bg-lightcoco rounded-md overflow-hidden relative'>
                        {/* <img src={business} alt="" className='w-full h-full object-cover'/> */}
                    </div>
                    <div className='w-full bg-black lg:basis-2/3 h-52 lg:h-96 rounded-md overflow-hidden relative'>
                        <img src={logo} alt="" className='w-40 lg:w-96 absolute top-3 right-3' />
                        <div className='absolute inset-0 bg-green-950 bg-opacity-50 flex flex-col justify-between items-start p-5 text-white'>
                            <figure className='p-2 bg-white rounded-xl'>
                                <img src={triangle} alt="" className='w-5 md:w-10'/>
                            </figure>
                            
                            <div className='flex flex-col justify-start gap-2'>
                                <h2 className='text-sm lg:text-xl'>"Keunggulan adalah Standar Kami, Kepuasan Pelanggan adalah Tujuan Kam</h2>
                                <p className='text-xs lg:text-sm'>Faravra, CEO </p>
                            </div>
                        </div>
                    </div>
                </section>  

                <section className='py-10 w-full'>
                    <div className='flex flex-col justify-center items-center gap-10 '>
                        <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-sm'>Layanan Kami</h3>
                        <p>Konsultasi Profesional dan Terpercaya</p>
                        <div className="w-full  flex flex-wrap justify-between items-center gap-10">
                            <div className='flex-1 py-5 border-t-[1px] border-black'>
                                <div className='flex flex-col justify-start items-start gap-3'>
                                    <img src={test1} alt="" className='w-72 rounded-lg object-cover'/>
                                    <h5 className='text-xl'>Manajemen Kekayaan</h5>
                                    <p className='text-sm text-gray-600'>Membantu mengelola dan mengembangkan aset secara optimal</p>
                                </div>
                            </div>
                            <div className='flex-1 py-5 border-t-[1px] border-black  '>
                                <div className='flex flex-col justify-start items-start gap-3'>
                                    <img src={test2} alt="" className='w-72 rounded-lg object-cover'/>
                                    <h5 className='text-xl'>Pajak & Akuntan Profesional</h5>
                                    <p className='text-sm text-gray-600'>Perencanaan dan pelapoan pajak sesuai peraturan berlaku</p>
                                </div>
                            </div>
                            <div className='flex-1 py-5 border-t-[1px] border-black  '>
                                <div className='flex flex-col justify-start items-start gap-3'>
                                    <img src={test3} alt="" className='w-72 rounded-lg object-cover'/>
                                    <h5 className='text-xl'>Perencanaan FInansial</h5>
                                    <p className='text-sm text-gray-600'>Strategi efektif untuk mencapai tujuan jangka panjang</p>
                                </div>
                            </div>
                            <div className='flex-1 py-5 border-t-[1px] border-black  '>
                                <div className='flex flex-col justify-start items-start gap-3'>
                                    <img src={test4} alt="" className='w-72 rounded-lg object-cover'/>
                                    <h5 className='text-xl'>Strategi Bisnis Profesional</h5>
                                    <p className='text-sm text-gray-600'>Mendukung keputusan bisnis melalui analisis keuangan akurat</p>
                                </div>
                            </div>
                        </div>

                        <Tagline />

                        <article className='lg:mt-10 px-5 '>
                            <h1 className='text-xl lg:text-3xl text-center mb-5'>BLog Post</h1>
                            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-12'>
                                {blog.slice(0,4).map((item)=>{
                                    return(
                                           <div className='w-full lg:w-[30rem] overflow-hidden flex flex-col justify-start items-start gap-2'>
                                                <figure className='w-full h-40 lg:h-60 border overflow-hidden'>
                                                    <img src={item.image} alt="" className='w-full h-full object-cover hover:scale-110 ease-in-out duration-500' />
                                                </figure>
                                                <div>
                                                    <h2 className='text-blue-500'>{item.heading} </h2>
                                                    <p className='text-[12px] text-slate-500'>{item.date} </p>
                                                </div>
                                                <p className='line-clamp-3 text-sm text-slate-700'>{item.text} </p>
                                           </div>
                                    )
                                })}
                            </div>
                            <button className='my-5 px-3 py-2 lg:px-5 lg:py-3 border border-primary hover:bg-choco hover:text-white ease-in-out duration-500'>Lihat Semua - BLog</button>
                        </article>  
                    

                    </div>
                </section>
            </div>

            {/* iframe map */}
            <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1121339786469!2d110.36305153876788!3d-6.982840135938631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708acdd8b246a9%3A0x11c5a1133cebe666!2sJl.%20Sugriwo%20IX%2081%2C%20Krapyak%2C%20Kec.%20Semarang%20Barat%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050151!5e0!3m2!1sid!2sid!4v1764678485832!5m2!1sid!2sid" width="100%" height="450" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </main>
    </>
  )
}

export default Homepage
