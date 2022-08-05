import React from 'react'
import './footer.css';

export const Footer = () => {
  return (
    <footer className="container astro-2QLIZMEN">
        <img src="/images/logo_blvck.png" width="145" height="50" className="undefined astro-EY3R7A52" alt=''/>
        <a target="_blank" rel="noreferrer" className="link section-footer astro-NHSX5LZV" href="https://discord.gg/blvckparis">
            Join the discord
        </a>
        <div className="social astro-X5IW3DTJ">
            <a target="_blank" rel="noreferrer" className="link  astro-HFYL4P3C" href="https://instagram.com/black">
                <img src="/images/social_instagram.png" alt="icon" width="auto" height="40" className="undefined astro-EY3R7A52"/>
            </a>
            <a target="_blank" rel="noreferrer" className="link  astro-HFYL4P3C" href="https://twitter.com/blvckparis">
                <img src="/images/social_twitter.png" alt="icon" width="auto" height="40" className="undefined astro-EY3R7A52"/>
            </a>
            <a target="_blank" rel="noreferrer" className="link  astro-HFYL4P3C" href="https://opensea.io/collection/blvckgenesis">
                <img src="/images/social_opensea.png" alt="icon" width="auto" height="40" className="undefined astro-EY3R7A52"/>
            </a>
        </div>
        <div className="links astro-2QLIZMEN">
            <a target="_blank" rel="noreferrer" className="link footer-link astro-HFYL4P3C" href="https://blvck.com/pages/contact">
                Contact Us
            </a>
            <a target="_blank" rel="noreferrer" className="link footer-link astro-HFYL4P3C" href="https://blvck.com/pages/terms-of-service">
                Terms
            </a>
        </div>
    </footer>
  )
}
