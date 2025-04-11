import { React, useEffect } from 'react';

import AOS from 'aos';

import { FaTelegram, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdOutlinePayments } from "react-icons/md";

import './Footer.css';

export default function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 2000, // زمان انیمیشن
            once: true,     // فقط یک‌بار اجرا شه
        });
    }, []);

    return (
        <div class="footer-5-column" data-aos="fade-up">
            <div class="footer-container">
                <div class="footer-navbar-container">
                    <div class="footer-company-details">
                        <div class="footer-logo">
                            <span>Ancientiranica</span>
                            <img src='../../img/faravahar-logo-black.png' alt="logo" />
                        </div>
                        <div class="footer-content">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                            </p>
                        </div>
                    </div>
                    <div class="footer-navbar">
                        <div class="footer-navbar-col">
                            <h5>صفحات مجازی</h5>
                            <ul>
                                <li><a style={{ fontSize: '1.6rem' }} href="#" target='_blank'> <FaTelegram /> </a></li>
                                <li><a style={{ fontSize: '1.6rem' }} href="#" target='_blank'> <FaInstagram /> </a></li>
                                <li><a style={{ fontSize: '1.6rem' }} href="#" target='_blank'> <FaGithub /> </a></li>
                            </ul>
                        </div>
                        <div class="footer-navbar-col">
                            <h5>دسترسی سریع</h5>
                            <ul>
                                <li><a href="#"> خدمات </a></li>
                                <li><a href="#"> ارتباط با ما </a></li>
                                <li><a href="#"> تقویم شاهنشاهی </a></li>
                                <li><a href="#"> حمایت مالی <MdOutlinePayments /> </a></li>
                            </ul>
                        </div>
                        <div style={{ textAlign: 'center' }} class="footer-navbar-col">
                            <h5>منابع</h5>
                            <ul>
                                <li><a href="#"> ChatGPT </a></li>
                                <li><a href="#"> Persepolis on UNESCO </a></li>
                                <li><a href="#"> Encyclopaedia Iranica </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p>کلیه حقوق مادی و معنوی سایت برای ایرانیکای باستان محفوظ است</p>
                </div>
            </div>
        </div>
    );
}
