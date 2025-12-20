import { Outlet } from "react-router-dom";
import Header from "./UI/Header";
import Footer from "./UI/Footer,";
import { Suspense, useEffect, useState } from "react";

// image
import fentax from "../assets/image/profile.jpg";

// icon whatsapp
// import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "../utils/ScrollToTop";
import LoadingUI from "./UI/LoadingUI";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingUI />
      ) : (
        <div>
          <main className="relative">
            <ScrollToTop />

            <Header />
            <section>
              {/* <Suspense fallback={<LoadingUI />}> */}
              <Outlet />
              {/* </Suspense> */}
            </section>
            <Footer />
          </main>

          <figure className="w-10 h-10 fixed bottom-5 right-5 rounded-full overflow-hidden border-2 border-green-800 ">
            <img
              src={fentax}
              alt=""
              className="w-full h-full object-cover relative"
            />
          </figure>
        </div>
      )}
    </>
  );
};

export default Layout;
