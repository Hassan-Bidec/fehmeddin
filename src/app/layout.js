import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from "../componenets/Navbar";
import Footer from "@/componenets/Footer";
import Header from "@/componenets/Header";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      {/* <Header/> */}
      <Header/>
      <Navbar/>
       {children}
       <ToastContainer position="top-right" autoClose={3000} />

      {/* <Footer/> */}
      <Footer/>
      </body>
    </html>
  );
}
