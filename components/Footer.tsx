import React from 'react'
import '@/public/styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <p>&copy; {new Date().getFullYear()} Shreepathi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer