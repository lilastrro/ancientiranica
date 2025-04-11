import React from 'react'

import './Header.css'

export default function Header() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <img src='../../img/faravahar-logo.png' alt="Logo" className='navbar__logo-image' />
                    <h1 className='navbar__logo-text font-en'>Ancientiranica</h1>
                </div>
                <ul className='navbar__links'>
                    <li className='navbar__link'><a href="home">خانه</a></li>
                    <li className='navbar__link'><a href="about">درباره</a></li>
                    <li className='navbar__link'><a href="services">خدمات</a></li>
                    <li className='navbar__link'><a href="contact">ارتباط با ما</a></li>
                    <li className='navbar__link'><a href="calender">تقویم شاهنشاهی</a></li>
                </ul>
            </nav>
            <section className='hero'>
                <div className='hero__content'>
                    <img src="../../img/faravahar-logo.png" className='hero__logo' alt="Logo" />
                    <h1 className='hero__title'>ایرانیکای باستان</h1>
                    <p className='hero__description'>سفری به درون قلب ایران باستان</p>
                </div>
                <div className='hero__image-container'>
                    <img src='../../img/hero-img.jpg' alt="Hero" className='hero__image' />
                </div>
            </section>
        </>
    )
}
