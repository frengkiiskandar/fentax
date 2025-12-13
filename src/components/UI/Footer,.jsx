import logo from '../../assets/logo/logos.png'

// logo
import location from '../../assets/logo/location.svg'
import wa from '../../assets/logo/wa.svg'
import message from '../../assets/logo/message.svg'

const Footer = () => {
  return (
    <>
      <div className='w-full px-10 py-10 lg:py-20 flex flex-col justify-center items-center gap-10 bg-primary'>
        <img src={logo} alt="" className='w-36'/>
        <p className='w-full lg:w-1/3 text-center text-sm text-white font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellat animi sapiente ex, voluptas rerum earum inventore laudantium provident aliquid?</p>
        
        <div className='flex-col flex lg:flex-row justify-center items-center gap-5 text-xs lg:text-sm'>
          <div className='w-80 lg:w-96 flex justify-start items-center gap-5 bg-choco text-white py-3 rounded-lg pl-10'>
              <img src={location} alt="" className='w-3'/>
              <p>08111 Jakarta Pusat, Indonesia</p>
          </div>

          <div className='w-80 lg:w-96 flex justify-start items-center gap-5 bg-choco text-white py-3 rounded-lg pl-10'>
              <img src={wa} alt="" className='w-3'/>
              <p>(+62) 822 xxxx xxxx</p>
          </div>

          <div className='w-80 lg:w-96 flex justify-start items-center gap-5 bg-choco text-white py-3 rounded-lg pl-10'>
              <img src={message} alt="" className='w-3'/>
              <p>youremail@gmail.com</p>
          </div>
      </div>  

      </div>
    </>
  )
}

export default Footer
