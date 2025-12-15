import person from '../assets/image/person.jpg'

// image
import polygon from '../assets/image/polygon.jpg'

// icons
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {

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
        <section>
            <div className='relative w-full h-32 lg:h-72 overflow-hidden '>
                    <img src={person} alt="" className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white'>
                        <h1 className='text-3xl lg:text-5xl font-medium lg:font-bold tracking-wide lg:tracking-widest'>Kontak Kami</h1>
                    </div>
                </div>
                
                <section className='w-full px-5 lg:px-32 py-10 lg:py-20  flex flex-wrap justify-center items-start gap-10 lg:gap-32'>
                    <div className='h-full flex flex-col justify-between items-start'>
                        <div>
                            <h3 className='text-3xl lg:text-5xl font-medium'>Let's Talk</h3>
                            <p>Got a Project on your mind ? Mari Diskusikan lebih detail disini .</p>
                        </div>

                        <div className='mt-10 lg:mt-20 flex flex-col justify-start items-start gap-3'>
                            <h4 className='font-medium lg:font-semibold'>Kontak Kami</h4>
                            <p className='text-2xl lg:text-4xl font-bold -tracking-wider text-gray-600'>+62 812 xxx xxx</p>
                            <div className="flex items-end gap-3 text-gray-500">
                                <FaFacebookF size={20}/>
                                <FaInstagram size={20}/>
                                <FaYoutube size={20}/>
                                <FaTwitter size={20}/>
                            </div>
                        </div>
                    </div>

                    {/* kanan */}
                    <div className='flex-1 flex flex-col justify-center items-start gap-5 '>
                        <input type="text" className='w-full outline-none border border-gray-300 px-5 py-3 rounded-lg' placeholder='Nama'/>
                        <input type="email" className='w-full outline-none border border-gray-300 px-5 py-3 rounded-lg' placeholder='Email'/>
                        <textarea className='w-full min-h-32 outline-none border border-gray-300 px-5 py-3 rounded-lg' placeholder='Pesan'></textarea>
                        <button className='px-8 py-3 rounded-md bg-choco text-white'>Kirim</button>
                    </div>
                </section>

                {/* kami siap membantu anda */}
                <div className='px-5 text-white pb-10'>
                    <div className='w-full px-3 py-8 flex flex-col justify-center items-center gap-5 lg:gap-10 bg-gradient-to-tr from-gray-700 to-primary rounded-xl  relative'>
                        {/* gambar polygon start */}
                        <div className='absolute inset-0 w-full h-full  opacity-20 pointer-events-none'>
                            <img src={polygon} alt="" className='w-full h-full object-cover'/>
                        </div>
                        {/* gambar polygon end */}
                        <h3 className='lg:w-2/3 text-center lg:text-5xl font-medium lg:font-semibold'>Kami siap membantu anda dalam kebutuhan <span className='bg-choco px-2 py-1 rounded-md'>perpajakan</span> anda</h3>
                        <button className='px-7 py-3 rounded-lg text-sm lg:text-2xl bg-choco '>Hubungi kami</button>
                        {/* divider */}
                        {/* <div className=" w-full border-[1px] border-gray-600"></div> */}

                        <div className='w-full lg:px-[10%] flex flex-col lg:flex-row justify-between items-center gap-3'>
                            <div className='flex-1 text-center lg:text-left text-xs'>
                                <p className='font-medium lg:font-bold text-base lg:text-xl'>Fentax Indonesia</p>
                                <p>Jl. Garuda Jaya 2 Utara Jakarta</p>
                                <p>+62 812 xxx xxx</p>
                            </div>
                            <div className='flex-1  flex justify-center items-center gap-3 lg:gap-5'>
                                <FaFacebookF size={size()}/>
                                <FaInstagram size={size()}/>
                                <FaTwitter size={size()}/>
                            </div>
                            <div className='flex-1'>
                                <p>Navigationdddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Contact
