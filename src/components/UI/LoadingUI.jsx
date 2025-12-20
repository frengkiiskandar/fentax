import { BlinkBlur } from "react-loading-indicators";

const LoadingUI = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BlinkBlur color="#434034" size="medium" text="FENTAX-STRATEGY" textColor="" />
    </div>
  )
}

export default LoadingUI
