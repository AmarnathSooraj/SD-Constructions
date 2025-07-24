import Image from "next/image";
import Navbar from '../components/Navbar'
import Hero from "@/components/Hero";
import About from "@/components/About"
import Footer from "@/components/Footer"
import Contact from "@/components/contact";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Gallery/>
    <Footer/>
    </>
  );
}
