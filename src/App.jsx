import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyPilotsStall from './components/WhyPilotsStall'
import Services from './components/Services'
import Clients from './components/Clients'
import Products from './components/Products'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CookieBanner from './components/CookieBanner'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'

export default function App() {
  
  // Set up the global scroll reveal engine using an IntersectionObserver hook
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealElements.forEach(el => el.classList.add('revealed'))
      return
    }

    const observerOptions = {
      root: null,
      threshold: 0.10,
      rootMargin: '0px 0px -40px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    revealElements.forEach(el => {
      observer.observe(el)
    })

    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="noviform-app">
      <ScrollProgress />

      {/* Dynamic Header */}
      <Header />
      <CookieBanner />

      <main id="main-content">
        {/* Hero Landing */}
        <Hero />

        {/* Why the pilots stall (added 18 Oct 2026) */}
        <WhyPilotsStall />

        {/* B2B Services (What you can buy) */}
        <Services />

        {/* Client logo strip */}
        <Clients />

        {/* How We Work Section */}
        <Products />

        {/* About / Brand Truths Section */}
        <Trust />

        {/* Frequently asked questions (AEO + buyer objections) */}
        <FAQ />

        {/* Contact engagement desk */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
