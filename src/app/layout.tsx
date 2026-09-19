import type { Metadata } from 'next';
import './globals.css';
import './scroll-overrides.css';
import './video-visibility.css';
import './hero-position.css';
import './hero-frame.css';
import './nav-alignment.css';
export const metadata:Metadata={title:'Yogesh Mane / Full-stack & AI Engineer',description:'The portfolio and systems archive of Yogesh Mane.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
