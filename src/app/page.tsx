import CinematicVideo from '@/components/CinematicVideo';
import CustomCursor from '@/components/CustomCursor';
import LenisProvider from '@/components/LenisProvider';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
export default function Home(){return <LenisProvider><main><CinematicVideo/><CustomCursor/><div className="progress-bar"/><Navbar/><Hero/><About/><Experience/><Projects/><Skills/><Certifications/><Contact/></main></LenisProvider>}
