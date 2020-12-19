import React from 'react'
import './Footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className="footer-inner">
                <p>Ocin Lite designed by <span>Quema Labs</span></p>
                <p>Developed by <span>Nikita Sennikov</span></p>
                <div className="footer-nav">
                    <a href="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt="social-icons" /></a>
                    <a href="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111398.svg" alt="social-icons" /></a>
                    <a href="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111688.svg" alt="social-icons" /></a>
                    <a href="/"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111748.svg" alt="social-icons" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer