import { Outlet } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import person from '../assets/image/person.jpg'

const Services = () => {
  return (
    <div>
        <div className='relative w-full h-32 lg:h-72 overflow-hidden '>
            <img src={person} alt="" className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white'>
                <h1 className='text-3xl lg:text-5xl font-medium lg:font-bold tracking-wide lg:tracking-widest'>Layanan Kami</h1>
            </div>
        </div>

      {/* Services */}
        <main className='py-5 px-3 lg:px-20 lg:py-10 text-sm lg:text-base'>
                <section className='w-full flex flex-col lg:flex-row flex-wrap justify-start items-start gap-5 lg:10'>
                    <div className='w-full lg:w-1/3 '>
                        <div className='p-5 flex flex-col justify-start items-start gap-5 lg:gap-8 bg-primary text-white'>
                            <Link to={''}>Rencana Keuangan</Link>
                            <Link to={'projectFinance'}>Proyek Finansial</Link>
                            <Link to={'riskManagement'}>Manajemen Resiko</Link>
                            <Link to={'tax'}>Perpajakan</Link>
                            <Link to={'riskmanagement'}>Manajemen Starategi</Link>
                            <Link to={'riskmanagement'}>Proses Pertumbuhan</Link>
                        </div>
        
                        {/* submit form kontak number */}
                        <div className='w-full mt-10 px-5 lg:px-10 py-5 flex flex-col justify-center items-center shadow-2xl rounded-lg border'>
                            <h3 className='text-xl font-medium lg:font-semibold'>Tinggalkan Kontak Anda</h3>
                            <p>Kami akan menghubungi</p>
                            <form action="" className='w-full mt-5 flex flex-col justify-center items-center gap-5'>
                                <input type="text" className='w-full px-4 py-2 outline-none shadow-md border-b-[1px] border-choco' placeholder='Nama Lengkap'/>
                                <input type="text" className='w-full px-4 py-2 outline-none shadow-md border-b-[1px] border-choco' placeholder='Email'/>
                                <input type="text" className='w-full px-4 py-2 outline-none shadow-md border-b-[1px] border-choco' placeholder='No Telp/Wa'/>
                                <button className='w-full py-3 text-white flex justify-center items-center gap-3 rounded-sm bg-choco'>
                                    <p>Submit</p>
                                    <IoArrowForward />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* kanan outlet konten */}
                    <section className="flex-1">
                        <Outlet />
                    </section>        
                </section>
              </main>

    </div>
  )
}

export default Services
