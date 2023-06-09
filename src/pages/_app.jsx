import "@/styles/globals.css";
import "@/styles/second.css";
import "@/styles/commoncomp.scss";
import "@/styles/carousel.scss";
import "@/styles/arrivals.css";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../store";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const hideNavbar = pathname === "/signuppage";
  return (
    <div className="relative box-border overflow-hidden">
      <Provider store={store}>
        <div className="relative">
          {!hideNavbar && (
            <div>
              <div className="fixed top-0 z-[2] w-full">
                <Header />
              </div>
              <div className="relative mt-32"></div>
            </div>
          )}
          <Component {...pageProps} />
          {!hideNavbar && (
            <div className="relative mt-32">
              <Footer />
            </div>
          )}
        </div>
      </Provider>
    </div>
  );
}
