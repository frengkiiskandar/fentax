import bg from "../../assets/image/riskManagement.jpg";
const Experienced = () => {
  return (
    <>
      <div
        className="w-full px-3 md:px-[5%] lg:px-[15%] py-10 lg:py-20 text-white flex flex-col justify-center items-center gap-5 lg:gap-10 relative bg-black bg-opacity-50 text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <h2 className="text-2xl lg:text-5xl font-semibold lg:font-bold">
          20 Tahun Pengalaman dengan Banyak Permasalahan
        </h2>
        <p className="font-light">
          We're proud that our law firm offers top-notch legal services for a
          nationwide affordable pricing! With us you’ll never feel like the
          lawyers are just robbers in suits, besides, we win 98% of all cases.
          So with us, your chances of winning are as high as they possibly can
          be!
        </p>
        <div className="md:h-32 flex flex-col md:flex-row justify-center gap-2 items-center ">
          <div className="p-5 lg:p-10 md:border-r-[1px] border-gray-500">
            <p className="text-4xl font-semibold lg:font-bold">1920</p>
            <p>Tahun berdiri</p>
          </div>
          
          <div className="p-5 lg:p-10 md:border-r-[1px] border-gray-500">
            <p className="text-4xl font-semibold lg:font-bold">56+</p>
            <p>Case Selesai</p>
          </div>

          <div className="p-5 lg:p-10 md:border-r-[1px] border-gray-500">
            <p className="text-4xl font-semibold lg:font-bold">542</p>
            <p>Partner Bisnis</p>
          </div>

          <div className="p5 lg:p-10 ">
            <p className="text-4xl font-semibold lg:font-bold">1200</p>
            <p>Client Terpercaya</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experienced;
