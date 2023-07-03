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



export default function App({ Component, pageProps }) {
  return (
    <div className="relative box-border overflow-hidden">
      <Provider store={store}>
        <div className="relative">
          <div className="fixed top-0 z-[2] w-full">
            <Header />
          </div>
          <div className="relative mt-32"></div>
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

