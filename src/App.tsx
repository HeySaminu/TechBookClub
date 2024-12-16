// import { useState } from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import './App.css'

function App() {
  return (
    <>
      <section className="site-wrapper">
      <Header/>
        <main>
        <Hero />
        </main>
      </section>
    </>
  )
}

export default App
