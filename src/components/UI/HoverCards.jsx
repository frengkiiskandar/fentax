import { FaAward } from "react-icons/fa"

const HoverCards = ({reliable, text}) => {

  return (
    <>
      <a className="hover-3d my-12 mx-2 cursor-pointer">
            {/* content */}
            <div className="card w-[22rem] lg:w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
                <div className="card-body">
                <div className="flex justify-between">
                    <div className="font-bold">{reliable} </div>
                    <div className="text-3xl opacity-10">❁</div>
                </div>
                <div className="text-xs mb-4 opacity-40">{text} </div>
                <FaAward size={50}/>
                <div className="flex justify-between">
                    <div>
                    <div className="text-xs opacity-20">FARAVRA</div>
                    <div>CEO OF FENTAX</div>
                    </div>
                    <div>
                    <div className="text-xs opacity-20">DATE</div>
                    <div>lOYALTY </div>
                    </div>
                </div>
                </div>
            </div>
            
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </a>
    </>
  )
}

export default HoverCards
