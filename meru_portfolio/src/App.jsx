import './App.css'
import { site } from './data/site'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientStrip from './components/ClientStrip'
import Work from './components/Work'
import Services from './components/Services'
import Numbers from './components/Numbers'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <ClientStrip />
        <Work />
        <Services />
        <Numbers />
        <About />
      </main>
      <Contact />
    </>
  )
}

export { site }