import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

export default function ExLayout() {
  return (
    <div>
        <Header />
        <div className='flex'>
            <Navigation />
            <Content />
        </div>
        <Footer />
    </div>
  )
}
