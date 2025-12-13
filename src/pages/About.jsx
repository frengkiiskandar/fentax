import person from '../assets/image/person.jpg'
import person2 from '../assets/image/person2.jpg'
import showing1 from '../assets/image/showing2.jpg'
import { Check, ChatCenteredDots, ClipboardText,UsersFour,Handshake, ChatCentered, LightbulbFilament} from "@phosphor-icons/react";


const About = () => {
  return (
    <>
      <main className='text-xs lg:text-base'>
            {/* gradient start top page */}
        <div className='relative w-full h-32 lg:h-72 overflow-hidden'>
            <img src={person} alt="" className='w-full h-full object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white'>
                <h1 className='text-3xl lg:text-5xl font-medium lg:font-bold tracking-wide lg:tracking-widest'>About Us</h1>
            </div>
        </div>
        {/* gradient stop */}

        {/* section start */}
        <section className='py-10 px-3 md:px-[5%] lg:px-[15%]  flex flex-wrap justify-between items-center gap-5 lg:gap-20'>
            <div className='w-[400px] h-[200px] lg:h-[300px] overflow-hidden rounded-lg'>
                <img src={showing1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex-1 py-10 flex flex-col justify-start items-start gap-5'>
                <h3 className='tont-semibold'>Tax Finance Consultant</h3>
                <h1 className='text-2xl font-medium lg:text-4xl'>We Provide The Best Service For Your Conveeince</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium iure at velit nisi laboriosam voluptatum, optio, repellendus fuga, sint saepe odit itaque nesciunt est distinctio dolore! Pariatur ipsa quia enim!</p>

                <div className='flex flex-col justify-start items-start gap-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Suspendisse molestie</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Vivamus vel Lectus</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Phasellus pulvinar</p>
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <Check size={20} />
                        <p>Arigatou</p>
                    </div>
                </div>
                <button className='text-white px-4 py-2 lg:px-7 lg:py-3 rounded-md font-medium lg:font-semibold bg-choco'>Selengkapnya</button>
            </div>
        </section>

        <section className='w-full  px-5 py-10 lg:py-20 flex flex-col justify-center items-center gap-10 bg-primary text-center text-white'>
            <div>
                <h1 className='mb-5 text-2xl lg:text-4xl font-medium lg:font-bold'>We Have  High <span className='text-choco'>Dedication</span> In The Field of Tax Advisory</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quis nemo quod! Vero illum quod libero facilis, odit magnam tempore?</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-28'>
                <div className='w-32 h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <ChatCenteredDots size={40} />
                    <p className='text-2xl lg:text-4xl'>1.345+</p>
                    <p>Happy CLient</p>
                </div>
                <div className='w-32 h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <ClipboardText size={40} />
                    <p className='text-2xl lg:text-4xl'>1.000+</p>
                    <p>Project Complete</p>
                </div>
                <div className='w-32 h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <Handshake size={40} />
                    <p className='text-2xl lg:text-4xl'>1.345+</p>
                    <p>Happy CLient</p>
                </div>
                <div className='w-32 h-36 flex flex-col justify-center items-center gap-2 rounded-lg'>
                    <UsersFour size={40} />
                    <p className='text-2xl lg:text-4xl'>1.345+</p>
                    <p>Happy CLient</p>
                </div>
            </div>
        </section>

        <section className='px-5 py-10 lg:py-20 flex flex-col justify-center items-center gap-5 text-center'>
            <h3 className='text-2xl lg:text-3xl'>WORK PROCESS</h3>
            <h1>See Our Workflow</h1>
            <p className='lg:w-2/3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quibusdam officia, numquam aliquam libero rerum cumque sit incidunt minima vitae perspiciatis exercitationem culpa at in?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 lg:flex lg:flex-row lg:justify-end text-white '>
                <div className="px-5 py-7 flex-1 flex-col justify-center items-center gap-5 bg-primary  ">
                    <div  className='flex justify-center items-center'>
                        <ChatCentered size={40}/>
                    </div>
                    <p className='text-xl lg:text-2xl'>Tell Us Your Problem</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, facilis.</p>
                </div>
                <div className="px-5 py-7 flex-1 flex-col justify-center items-center gap-5 bg-primary ">
                    <div  className='flex justify-center items-center'>
                        <LightbulbFilament size={40}/>
                    </div>
                    <p className='mt-2 text-xl lg:text-2xl'>We're Looking for a Solution</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, facilis.</p>
                </div>
                <div className="px-5 py-7 md:col-span-2 lg:col-span-1 flex-1 flex-col justify-center items-center gap-5 bg-primary ">
                    <div  className='flex justify-center items-center'>
                        <Handshake size={40}/>
                    </div>
                    <p className='text-xl lg:text-2xl'>See The Result of Our Work</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, facilis.</p>
                </div>
            </div>
        </section>

        <section>
            <div className='relative w-full h-56 lg:h-96 border border-blue-70 overflow-hidden text-white'>
                <img src={person2} alt="" className='object-cover w-full h-full'/>
    
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-5 text-center p-4 lg:p-8'>
                        <h2 className='text-xl lg:text-5xl font-medium lg:font-semibold '>
                            Still Confused With Your <span className='text-choco'>Tax Managing?</span> Get A Consultation
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore voluptatem aliquam quibusdam in totam blanditiis asperiores excepturi quas deleniti.
                        </p>
                        <button className='px-5 py-3 lg:px-7 lg:py-3 bg-choco rounded-lg'>Call Us Now</button>
                    </div>
                </div>

        </section>


      </main>
    </>
  )
}

export default About
