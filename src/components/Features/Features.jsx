import { React, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import Typewriter from 'typewriter-effect';
import Chart from '../Chart/Chart';
import { historicalInterestRate, farvardinEvents } from '../../data'

import './Features.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';


export default function Features() {
    // const today = new Date().toLocaleDateString('fa-IR', {
    //     month: 'long',
    //     day: 'numeric',
    // });
    const today = '۱۳ فروردین';

    const todayEvent = farvardinEvents[today]; // مثلاً: "فروردینگان"

    useEffect(() => {
        AOS.init({
            duration: 2000, // زمان انیمیشن
            once: false,     // فقط یک‌بار اجرا شه
        });
    }, []);

    return (
        <>
            <div className="features" data-aos="zoom-in">
                <h2>مناسبت های امروز {today}</h2>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="date-card">
                        {todayEvent ? (
                            <p>{todayEvent}</p>
                        ) : (
                            <p>امروز مناسبتی ثبت نشده است</p>
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="why-important">
                <h2 data-aos="fade-left">چرا تاریخ ایران مهم است؟</h2>
                <span data-aos="zoom-in" className='typewriter'>
                    <Typewriter
                        options={{
                            deleteSpeed: 90,
                            loop: true,
                            delay: 60,
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('هویت ما <br /> تاریخ ایران به ما یادآوری می‌کند که چه کسانی هستیم و از کجا آمده‌ایم')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('درس‌هایی از گذشته <br /> تاریخ ایران به ما می‌آموزد که چگونه از تجربیات گذشته استفاده کنیم')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('شناخت ریشه‌های ملی <br /> تاریخ ایران به ما کمک می‌کند تا هویت ملی خود را بشناسیم')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('عبرت‌هایی از تاریخ <br /> تاریخ ایران به ما یادآوری می‌کند که چه درس‌هایی از گذشته باید بیاموزیم')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('سفر تمدنی <br /> تاریخ ایران به ما نشان می‌دهد که چگونه فرهنگ و تمدن ما شکل گرفته است')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('قهرمانان آزادی <br /> تاریخ ایران به ما یادآوری می‌کند که چه کسانی برای آزادی و استقلال کشورمان جنگیده‌اند')
                                .pauseFor(500)
                                .deleteAll()
                            typewriter.typeString('استقامت در برابر سختی‌ها <br /> تاریخ ایران به ما می‌آموزد که چگونه در برابر چالش‌ها ایستادگی کنیم')
                                .start();
                        }}
                    />
                </span>
                <div className='chart-container' data-aos="fade-up">
                    <Chart title="نمودار علاقه به ایران باستان از سال 1375 - 1405" data={historicalInterestRate} dataKey='interestRate' />
                </div>
            </div>
        </>
    )
}
