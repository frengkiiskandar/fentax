// image
import financial from '../../assets/image/riskManagement.jpg'

// logo
import pattern from '../../assets/logo/pattern.jpg'
import HoverCards from "./HoverCards";

// icons
import { IoIosArrowForward } from "react-icons/io";


const Riskmanagement = () => {
    const reliable = "RELIABILITY"
    const text = 'Memastikan akurasi, reliabilitas dan layanan etik dengan staff berpengalaman dan profesional'
  return (
    <>
            <div className='flex flex-col justify-start items-start gap-5'>
                <figure className="w-full max-h-[400px] overflow-hidden rounded-lg shadow-lg"> 
                    <img src={financial} alt="" className="w-full"/>
                </figure>
                <div className="py-5 flex flex-col justify-start items-start gap-5">
                    <h2 className="text-xl lg:text-3xl font-medium lg:font-bold">Manajemen Resiko</h2>
                    <div className='lg:w-2/3 flex items-start justify-start gap-2'>
                        <IoIosArrowForward/>
                        <p>Memberikan saran dan masukan tentang perpajakan terbaik untuk Anda dan bisnis Anda, dengan mengacu pada Undang-Undang Perpajakan yang berlaku di Indonesia.</p>
                    </div>
                    <div className='lg:w-2/3 flex items-start justify-start gap-2'>
                        <IoIosArrowForward />
                        <p>Memberikan anda gambaran mendetail tentang solusi praktis dari masalah perpajakan yang anda hadapi.</p>
                    </div>
                    <div className='lg:w-2/3 flex items-start justify-start gap-2'>
                        <IoIosArrowForward />
                        <p>Memberikan anda gambaran mendetail tentang solusi praktis dari masalah perpajakan yang anda hadapi</p>
                    </div>
                    <figure className="w-40 h-5  overflow-hidden">
                        <img src={pattern} alt="" />
                    </figure>
                    <div className="w-full flex flex-wrap justify-start items-center ">
                        <HoverCards reliable={reliable} text={text}/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Riskmanagement
