import person from '../assets/image/person.jpg'

// image
import polygon from '../assets/image/polygon.jpg'

// icons
import { FaFacebookF,FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePhone,MdMailOutline } from "react-icons/md";

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
                    <div className='w-full lg:w-1/2 h-full flex flex-col justify-between items-start'>
                        <div>
                            <h3 className='text-3xl lg:text-5xl font-medium'>Let's Talk</h3>
                            <p>Anda dapa t menghubungi kami via telepon atau email atau taruh pesan anda dibawah ini. Kami akan dengan senang hati membalasnya</p>
                        </div>

                        <div className='mt-10  flex flex-col justify-start items-start gap-3'>
                            <h4 className='font-medium lg:font-semibold'>Kontak Kami</h4>
                            <div className='flex justify-start items-start gap-3 text-sm lg:text-base'>
                                <span className='p-2 rounded-full bg-green-600 bg-opacity-30'>
                                    <MdOutlinePhone />
                                </span>
                                <div >
                                    <p>Phone</p>
                                    <p className='text-gray-400'>+62 822 xxx xxx</p>
                                    <p className='text-gray-400'>+62 812 xxx xxx</p>

                                </div>
                            </div>
                            <div className='flex justify-start items-start gap-3 text-sm lg:text-base'>
                                <span className='p-2 rounded-full bg-green-600 bg-opacity-30'>
                                    <MdMailOutline />
                                </span>
                                <div>
                                    <p>Email</p>
                                    <p className='text-gray-400'>fentax@gmail.com</p>
                                    <p className='text-gray-400'>fentax2@gmail.com</p>

                                </div>
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
                        <h3 className='lg:w-2/3 text-center lg:text-3xl font-medium lg:font-semibold lg:leading-relaxed'>Kami siap membantu anda dalam kebutuhan <br /> <span className='bg-choco px-2 py-1 rounded-md'>perpajakan</span> anda</h3>
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

                 {/* iframe map */}
            <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1121339786469!2d110.36305153876788!3d-6.982840135938631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708acdd8b246a9%3A0x11c5a1133cebe666!2sJl.%20Sugriwo%20IX%2081%2C%20Krapyak%2C%20Kec.%20Semarang%20Barat%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050151!5e0!3m2!1sid!2sid!4v1764678485832!5m2!1sid!2sid" width="100%" height="450" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </>
  )
}

export default Contact
