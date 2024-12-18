// import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Hero from './component/Hero'
import ReadTogether from './component/ReadTogether'
import './App.css'
import NotAverage from './component/NotAverage'
import Membership from './component/Membership'

function App() {
  return (
    <div id="root">
      <section className="site-wrapper">
      <Header />
        <main>
        <Hero />
        <ReadTogether />
        <NotAverage />
        <Membership />
        </main>
        <Footer />
      </section>
    </>
  )
}

export default App
