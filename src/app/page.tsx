import Image from 'next/image'

import NavBar from './components/NavBar';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
        <NavBar />
        <About /> 
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
        
        <SocialLinks />
    </main>
    )
}
