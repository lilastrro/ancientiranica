import React from 'react'

import Header from './components/Header/Header'
import Features from './components/Features/Features'
import BlogsWidget from './components/BlogsWidget/BlogsWidget'
import Footer from './components/Footer/Footer'

import './App.css'

export default function App() {
	return (
		<div className='container'>
			<Header />
			<Features />
			<BlogsWidget />
            <Footer />
		</div>
	)
}
