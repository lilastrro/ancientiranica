import {React, useEffect} from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './BlogsWidget.css'

export default function BlogsWidget() {

    useEffect(() => {
        AOS.init({
            duration: 2000, // زمان انیمیشن
            once: false,     // فقط یک‌بار اجرا شه
        });
    }, []);

    return (
        <div className='blogs-widget'>
            <section className='newest-blogs'>
                <h2 data-aos="fade-left">جدیدترین مقالات</h2>
                <div className='blogs-list' data-aos="fade-left">
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                </div>
            </section>
            <section className='popular-blogs'>
                <h2 data-aos="fade-left">مقالات پرطرفدار</h2>
                <div className='blogs-list' data-aos="fade-right">
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                    <div className='blog-card'>
                        <img src='../../img/blog.jpg' alt='blog' />
                        <h3>عنوان مقاله</h3>
                        <p>توضیحات مختصر درباره مقاله</p>
                        <a href='#'>ادامه مطلب</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
