import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Clients from './sections/Clients'
import Features from './sections/Features'
import FeatureHighlight from './sections/FeatureHighlight'
import Stats from './sections/Stats'
import HowTo from './sections/HowTo'
import Testimonial from './sections/Testimonial'
import Blog from './sections/Blog'
import CTABanner from './sections/CTABanner'
import Footer from './sections/Footer'
import './App.css'

export default function App() {
  return (
    <>
      {/* Skip-to-content: hanya terlihat saat keyboard focus, tidak mengganggu layout normal */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Clients />
        <Features />
        <FeatureHighlight />
        <Stats />
        <HowTo />
        <Testimonial />
        <Blog />
        <CTABanner />
      </main>

      <Footer />
    </>
  )
}
