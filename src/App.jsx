import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Work from './components/Portfolio/Work'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const observeRevealItems = (root) => {
      if (root.matches?.('[data-reveal]')) observer.observe(root)
      root.querySelectorAll?.('[data-reveal]').forEach((item) => observer.observe(item))
    }

    revealItems.forEach((item) => observer.observe(item))
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) observeRevealItems(node)
        })
      })
    })
    mutationObserver.observe(document.querySelector('.main'), {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`app-shell theme-${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Qualification />
        {/* <Testimonials /> */}
      </main>

      <div id="contact">
        <Footer />
      </div>
      <ScrollUp />
    </div>
  )
}

export default App
