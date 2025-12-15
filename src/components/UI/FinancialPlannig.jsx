// image
import financial from '../../assets/image/financialplanning2.jpg'

// logo
import pattern from '../../assets/logo/pattern.jpg'
import HoverCards from "./HoverCards";


const FinancialPlannig = () => {
    const reliable = "RELIABILITY"
    const text = 'Memastikan akurasi, reliabilitas dan layanan etik dengan staff berpengalaman dan profesional'
  return (
    <>
            <div className='flex flex-col justify-start items-start gap-5'>
                <figure className="w-full max-h-[400px] overflow-hidden rounded-lg shadow-lg"> 
                    <img src={financial} alt="" className="w-full"/>
                </figure>
                <div className="flex flex-col justify-start items-start gap-5">
                    <h2 className="text-xl lg:text-3xl font-medium lg:font-bold">Perencanaan Finansial</h2>
                    <p>Perencanaan finansial adalah strategi terintegrasi untuk mengelola keuangan dan pajak secara optimal, membantu individu dan bisnis mencapai efisiensi, kepatuhan perpajakan, serta pertumbuhan finansial yang berkelanjutan</p>
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

export default FinancialPlannig
