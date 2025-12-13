import React from 'react'
import Header from '../components/UI/Header'
import hero from '../assets/image/hero1.jpg'
import clients from '../assets/json/client.json'
import sun from '../assets/logo/sun.svg'
import book from '../assets/logo/book.svg'
import chart from '../assets/logo/chart.svg'

// image anf logos
import visimisi from '../assets/image/visimisi.jpg'
import starbust from '../assets/logo/starbust.png'
import test1 from '../assets/image/test1.jpg'
import test2 from '../assets/image/test2.jpg'
import test3 from '../assets/image/test3.jpg'
import test4 from '../assets/image/test4.jpg'
import Footer from '../components/UI/Footer,'

const Homepage = () => {
  return (
    <>
    <section className=' bg-primary px-3 md:px-[5%] lg:px-[15%] '>
            <div className='min-h-screen '>
                {/* <section className='pt-28 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap  '> */}
                <section className='pt-8 flex flex-col md:flex-row justify-between items-center gap-10 flex-wrap  '>
                    {/* kiri */}
                    <div className='h-full w-full lg:w-[45%] flex flex-col justify-center items-start gap-7  '>
                        <h1 className='px-5 py-3 text-accent bg-semiLight rounded-full font-bold text-sm'>Selamat Datang</h1>
                        <h2 className='text-2xl lg:text-[60px] leading-normal text-white font-medium'>Pendamping Pajak Profesional Untuk Bisnis yang Tumbuh Aman.</h2>
                        <p className='text-gray-300 text-sm lg:text-base'>Dukungan profesionan untuk UMKM, karyawan, freelancer, dan perusahaan yang butuh kepastian dan efisiensi pajak.</p>
                        <div className='flex justify-start items-center gap-5 lg:gap-10'>
                            <button className='text-white px-4 py-2 lg:px-7 lg:py-3 rounded-md font-medium lg:font-semibold bg-choco'>Hubungi Kami</button>
                            <button className='text-choco px-4 py-2 lg:px-7 lg:py-3 rounded-md font-medium lg:font-semibold bg-white'>Selengkapnya</button>
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
            <section className='px-0 md:px-10 lg:px-[10%] py-10'>
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
        <section className='py-24 px-10 md:px-[5%] lg:px-[15%] flex flex-col justify-center items-center gap-10 bg-[#F3F4F2] text-center'>
            <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary bg-buttonClr rounded-full font-bold text-sm'>What We Do</h3>
            <h1 className='text-3xl'>Transform, Transcend, Triumph</h1>
            <div className=' flex flex-wrap justify-center items-center gap-7'>
                <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                    <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                        <img src={sun} alt="" />
                    </div>
                    <p className='text-xl'>Operational Consulting</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptas?</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                    <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                        <img src={book} alt="" />
                    </div>
                    <p className='text-xl'>Strategy Consulting</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptas?</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 max-w-96 text-center'>
                    <div className=' w-20 p-5 rounded-full bg-buttonClr'>
                        <img src={chart} alt="" />
                    </div>
                    <p className='text-xl'>Financial Consulting</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, voluptas?</p>
                </div>
            </div>
        </section>

        <div className='flex flex-col px-3 md:px-[5%] lg:px-[15%] justify-center items-center gap-10 py-10 lg:py-20 '>
            {/* about us */}
            <section className='lg:w-1/2 flex flex-col justify-start items-start gap-3 md:gap-10 '>
                <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-sm'>About Us</h3>
                <h2 className='text-2xl md:text-4xl tracking-normal'>Solution Today <br />For Tomorrow's Success</h2>
                <div className='font-light text-gray-600 text-justify text-sm lg:text-base'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa tenetur minima error quae accusantium, velit quia assumenda obcaecati excepturi.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, fugiat?</p>
                </div>
            </section>
            <div className='w-full'>
                <button className='text-white px-4 py-2 lg:px-8 lg:py-4 rounded-md font-semibold bg-choco'>Learn More</button>
            </div>

            <section className='w-full flex flex-col md:flex-row justify-between items-center gap-10 px-10 md:px-0'>
                <div className="w-full flex-1 border-t-[1px] border-black py-10  ">
                    <div class="relative inline-block">
                        <span class="text-4xl">25</span>
                        <span class="absolute -top-5 -right-5 text-4xl ">+</span>
                    </div>
                    <p className='text-gray-600 text-sm mt-2'>Years experience in consulting</p>
                </div>

                <div className="w-full flex-1 border-t-[1px] border-black py-10">
                    <div class="relative inline-block">
                        <span class="text-4xl">$ 40 m</span>
                        <span class="absolute -top-5 -right-5 text-4xl ">+</span>
                    </div>
                    <p className='text-gray-600 text-sm mt-2'>In pure profits for our clients</p>
                </div>

                <div className="w-full flex-1 border-t-[1px] border-black py-10">
                    <div class="relative inline-block">
                        <span class="text-4xl">870</span>
                        <span class="absolute -top-5 -right-5 text-4xl ">+</span>
                    </div>
                    <p className='text-gray-600 text-sm mt-2'>Completed projects this year</p>
                </div>

                <div className="w-full flex-1 border-t-[1px] border-black py-10">
                    <div class="relative inline-block">
                        <span class="text-4xl">99.9</span>
                        <span class="absolute -top-5 -right-5 text-4xl ">%</span>
                    </div>
                    <p className='text-gray-600 text-sm mt-2'>Completed projects this year</p>
                </div>
               
            </section>

            {/* our mission and vision */}
            <section className='flex flex-wrap justify-center items-center gap-10 w-full '>
                <div className='w-full lg:basis-2/3 h-72 rounded-md overflow-hidden relative'>
                    <img src={visimisi} alt="" className='w-full h-full object-cover'/>
                    <div className='w-full px-5 absolute bottom-5 right-1/2 translate-x-1/2  flex justify-center items-center gap-5 text-white '>
                        <div className='flex-1'>
                            <h2 className='text-2xl'>Our Vison</h2>
                            <p className='text-gray-300 text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, tempora.</p>
                        </div>
                        <div className='flex-1'>
                            <h2 className='text-2xl'>Our Mission</h2>
                            <p className='text-gray-300 text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, tempora.</p>
                        </div>
                    </div>
                </div>
                <div className='flex-grow h-72 rounded-md bg-lightcoco overflow-hidden'>
                    <img src={starbust} alt="" className='w-full h-full object-cover'/>
                </div>
            </section>  

            <section className='flex flex-wrap justify-center items-center gap-10 w-full'>
                <div className='flex-grow h-72 bg-lightcoco rounded-md overflow-hidden relative'>
                    {/* <img src={visimisi} alt="" className='w-full h-full object-cover'/> */}
                </div>
                <div className='w-full lg:basis-2/3  h-72 bg-lightcoco rounded-md overflow-hidden'>
                    {/* <img src={visimisi} alt="" className='w-full h-full object-cover'/> */}
                </div>
            </section>  

            <section className='py-10 w-full'>
                <div className='flex flex-col justify-center items-center gap-10 '>
                    <h3 className='px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-sm'>Our Services</h3>
                    <p>Consulting as Straightforward as It Gets</p>
                    <div className="w-full  flex flex-wrap justify-between items-center gap-10">
                        <div className='flex-1 py-5 border-t-[1px] border-black'>
                            <div className='flex flex-col justify-start items-start gap-3'>
                                <img src={test1} alt="" className='w-72 rounded-lg object-cover'/>
                                <h5 className='text-xl'>Wealth Management</h5>
                                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi.</p>
                            </div>
                        </div>
                        <div className='flex-1 py-5 border-t-[1px] border-black  '>
                            <div className='flex flex-col justify-start items-start gap-3'>
                                <img src={test2} alt="" className='w-72 rounded-lg object-cover'/>
                                <h5 className='text-xl'>Taxes & Accounting</h5>
                                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi.</p>
                            </div>
                        </div>
                        <div className='flex-1 py-5 border-t-[1px] border-black  '>
                            <div className='flex flex-col justify-start items-start gap-3'>
                                <img src={test3} alt="" className='w-72 rounded-lg object-cover'/>
                                <h5 className='text-xl'>Finance Planning</h5>
                                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi.</p>
                            </div>
                        </div>
                        <div className='flex-1 py-5 border-t-[1px] border-black  '>
                            <div className='flex flex-col justify-start items-start gap-3'>
                                <img src={test4} alt="" className='w-72 rounded-lg object-cover'/>
                                <h5 className='text-xl'>Business Strategy</h5>
                                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full p-10 bg-lightcoco flex flex-col lg:flex-row justify-between gap-10 items-center rounded-lg'>
                        {/* kiri */}
                        <div className='flex-1'>
                            <div className='flex flex-col justify-start items-start gap-5'>
                                <button className='px-5 py-3 lg:px-7 lg:py-3 text-secondary w-fit bg-buttonClr rounded-full font-bold text-sm'>Get Started</button>
                                <p className='text-4xl font-semibold'>Nurturing Growth, One Idea at a Time</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda!</p>
                                <button className='px-8 py-4 bg-choco text-white rounded-lg'>Learn More</button>
                            </div>
                        </div>
                        {/* kanan */}
                        <div className='flex-1 '>
                            <div className='flex flex-wrap justify-center items-center gap-5'>
                                <div className='w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden '>
                                    <img src={test1} alt="" className='object-cover'/> 
                                </div>
                                <div className='w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden '>
                                    <img src={test2} alt="" className='object-cover'/> 
                                </div>
                                <div className='w-full h-40 lg:h-full lg:w-40 rounded-xl overflow-hidden '>
                                    <img src={test3} alt="" className='object-cover'/> 
                                </div>
                               
                            </div>
                        </div>
                    </div>
                

                </div>
            </section>
        </div>

        {/* iframe map */}
        <div >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1121339786469!2d110.36305153876788!3d-6.982840135938631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708acdd8b246a9%3A0x11c5a1133cebe666!2sJl.%20Sugriwo%20IX%2081%2C%20Krapyak%2C%20Kec.%20Semarang%20Barat%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050151!5e0!3m2!1sid!2sid!4v1764678485832!5m2!1sid!2sid" width="100%" height="450" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
  )
}

export default Homepage
