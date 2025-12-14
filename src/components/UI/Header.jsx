import logos from '../../assets/logo/logos.png'
import { List  } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <HorseIcon />
      <HeartIcon color="#AE2983" weight="fill" size={32} />
      <CubeIcon color="teal" weight="duotone" />
    </main>
  );
};

const Header = () => {
  return (
    <>
    {/* <div className='w-screen px-3 md:px-[5%] lg:px-[15%] py-5 flex justify-between items-center bg-primary fixed top-0 left-0 z-50 '> */}
    <div className='max-w-screen px-3 md:px-[5%] lg:px-[15%] py-5 flex justify-between items-center bg-primary overflow-hidden '>
      <div className='w-16 lg:w-24 '>
        <img src={logos} alt="" className='w-fit'/>
      </div>

      <nav className='text-gray-300 hidden lg:block'>
        <ul className='flex justify-center items-center gap-8 text-sm'>
          <li><Link to={''}>Home</Link></li>
          <li><Link to={'about'}>About</Link></li>
          <li><Link to={'#'}>Services</Link></li>
          <li><Link to={'#'}>Pages</Link></li>
          <li><Link to={'#'}>Contact</Link></li>
        </ul>
      </nav>

      <button className='px-4 py-3 text-xs text-primary font-semibold bg-white rounded-sm hidden lg:block'>Get Started</button>
      <button className='lg:hidden'>
        <List size={30} color="#fafafa" weight="thin" />
      </button>
    </div>
    </>
  )
}

export default Header
