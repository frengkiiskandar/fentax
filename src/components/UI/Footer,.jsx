import logo from '../../assets/logo/logos.png'

// images
import worldmap from '../../assets/image/worldmap.svg'

// logo
import location from '../../assets/logo/location.svg'
import wa from '../../assets/logo/wa.svg'
import message from '../../assets/logo/message.svg'

// icons
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaLinkedin,FaFacebookF } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollTopPage =()=>{
    window.scrollTo({
      top:0,
      left: 0,
      behavior:'smooth'
    })
  }

  // size untuk icons
   const size = () => {
    const width = window.innerWidth;

  if (width < 768) { 
    // sm (HP)
    return 20;
  } else if (width < 1024) { 
    // md
    return 25;
  } else { 
    // lg
    return 30;
  }
};
  return (
    <>
      <footer className='w-full px-10 lg:px-20 py-10 lg:py-20 flex flex-wrap justify-start items-start gap-20 lg:gap-0 bg-primary text-gray-400 text-xs lg:text-base relative'>
        <div className='absolute inset-0 opacity-15 pointer-events-none'>
          <img src={worldmap} alt="" className='w-full h-full object-fill'/>
        </div>

        {/* 1 */}
        <div className='w-full lg:w-2/3 flex flex-col justify-start items-start gap-10  '>
          <figure>
            <img src={logo} alt="" className='w-20 lg:w-32'/>
          </figure>
          <p className='lg:w-1/2'>Solusi Perpajakan Terpercaya untuk Individu dan Bisnis
          Membantu Anda memenuhi kewajiban pajak secara tepat, patuh, dan efisien sesuai peraturan yang berlaku.</p>
          <div className="flex gap-4 lg:gap-10">
            <a href="#"><FaXTwitter size={size()}/></a>
            <a href="#"><FaLinkedin size={size()}/></a>
            <a href="#"><FaInstagram size={size()}/></a>
            <a href="#"><FaFacebookF size={size()}/></a>
            
            
            
          </div>
          <button className='px-5 py-2 flex items-center gap-3 border hover:bg-choco hover:border-none' onClick={scrollTopPage}>
            <MdKeyboardDoubleArrowUp size={size()}/>
            <p>Back to Top</p>
          </button>
        </div>

        {/* 2 */}
        <div className='w-full flex flex-1 flex-wrap justify-start items-start gap-10 '>
          <div className="w-full lg:w-1/2 flex-col justify-start items-start gap-5 ">
              <h4 className='w-1/2 lg:w-full font-medium lg:font-bold text-lg lg:text-xl pb-5 border-b-[1px] border-white'>Services</h4>
              <div className='flex flex-col justify-start items-start gap-5 mt-5'>
                <button className='hover:text-secondary'>Rencana Finansial</button>
                <button className='hover:text-secondary'>Projek Keuangan</button>
                <button className='hover:text-secondary'>Manajemen Resiko</button>
                <button className='hover:text-secondary' >Perpajakan</button>
                <button className='hover:text-secondary'>Manajemen Strategi</button>
                <button className='hover:text-secondary'>Proses Pertumbuhan</button>
              </div>
          </div>
          <div className="flex-1  flex-col justify-self-start items-start gap-5 ">
              <h4 className='w-1/2 lg:w-full font-medium lg:font-bold text-lg lg:text-xl  pb-5 border-b-[1px] border-white'>Menu</h4>
                <div className='flex flex-col justify-start items-start gap-5 mt-5'>
                <button className='hover:text-secondary'>Beranda</button>
                <button className='hover:text-secondary'>Tentang Kami</button>
                <button className='hover:text-secondary'>Blog</button>
                <button className='hover:text-secondary'>Semua Layanan</button>
                <button className='hover:text-secondary'>Kontak</button>
              </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center gap-5'>
              <div className='w-full flex justify-center items-center gap-3 py-3 bg-choco rounded-md'>
                <img src={location} alt="" className='w-3'/>
                <p>0811 Jakarta, Indonesia</p>
              </div>
              <div className='w-full flex justify-center items-center gap-3 py-3 bg-choco rounded-md'>
                <img src={wa} alt="" className='w-3'/>
                <p>(62)8 22 xxx xxx</p>
              </div>
              <div className='w-full flex justify-center items-center gap-3 py-3 bg-choco rounded-md'>
                <img src={message} alt="" className='w-3'/>
                <p>youremail@gmail.com</p>
              </div>
          </div>
        </div>

              {/* copyright */}
      </footer>
              <div className="w-full px-20 py-5 lg:py-10 border-t-[1px] text-[10px] lg:text-sm flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-2 border-gray-600  bg-primary text-white
              ">
                <p>Copyright &copy; 2025 </p>
                <div className='flex gap-5'>
                  <p>Privacy Police</p>
                  <p>Term & Services</p>

                </div>
              </div>
    </>
  )
}

export default Footer
