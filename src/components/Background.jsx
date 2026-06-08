
import React from 'react'

const Background = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="bg-cloud cloud-1">
        <span className="emoji cloud-emoji">☁️   ☁️   ☁️   ☁️   ☁️   ☁️</span>
      </div>

     

     

      <div className="bg-birds z-20">
        <span className="emoji bird-emoji b1">🕊️</span>
        <span className="emoji bird-emoji b2">🕊️</span>
        <span className="emoji bird-emoji b3">🕊️</span>
        <span className="emoji bird-emoji b3">🕊️</span>
      </div>
    </div>
  )
}

export default Background
