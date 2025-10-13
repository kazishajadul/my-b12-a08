import React from 'react'
import Header from '../components/Header'
import apps from '../data/apps.json'
import { Link } from 'react-router-dom'
import HeroImage from "../assets/hero.png"
import GoogleLogo from "../assets/google-play.png"
import AppleLogo from "../assets/app-store.png"
import Footer from '../components/Footer'

export default function Home() {
    const top8 = apps.slice(0, 8)

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 max-w-6xl mx-auto px-4 py-8">

                {/* Hero Section */}
                <section className="text-center bg-gradient-to-r from-indigo-50 to-white rounded-lg p-8">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        We Build<br />
                        <span className="text-purple-700">Productive</span> Apps
                    </h1>
                    <p className="mt-3 text-gray-700">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    </p>
                    <div className="flex justify-center flex-col sm:flex-row gap-3">
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                        >
                            <img src={GoogleLogo} alt="Google Play" className="w-6 h-6 mr-2" />
                            Google Play
                        </a>

                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 border rounded hover:bg-gray-100 transition"
                        >
                            <img src={AppleLogo} alt="App Store" className="w-6 h-6 mr-2" />
                            App Store
                        </a>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-6 items-center">
                        <img src={HeroImage} alt="Hero" className="w-64 md:w-96 rounded-lg mb-4 md:mb-0" />
                    </div>
                </section>

                {/* Trusted Section */}
                <section className="w-full max-w-[1600px] h-[410px] mx-auto rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white flex flex-col justify-center items-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        Trusted by Millions, Built for You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
                        <div>
                            <div className="text-lg font-medium">Total Downloads</div>
                            <div className="text-6xl md:text-5xl font-extrabold mt-2">29.06M</div>
                            <p className="mt-2 text-sm text-purple-100">21% more than last month</p>
                        </div>
                        <div>
                            <div className="text-lg font-medium">Active Users</div>
                            <div className="text-6xl md:text-5xl font-extrabold mt-2">906K</div>
                            <p className="mt-2 text-sm text-purple-100">46% More Than Last Month</p>
                        </div>
                        <div>
                            <div className="text-lg font-medium">Positive Reviews</div>
                            <div className="text-6xl md:text-5xl font-extrabold mt-2">132+</div>
                            <p className="mt-2 text-sm text-purple-100">31 More Will Launch</p>
                        </div>
                    </div>
                </section>

                {/* Top Apps Section */}
                <section className="mt-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Top Apps</h2>
                        <Link to="/apps" className="text-indigo-600">Show All</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {top8.map(a => (
                            <div key={a.id} className="border rounded p-3 hover:shadow">
                                <Link to={`/apps/${a.id}`}>
                                    <img src={a.image} alt={a.title} className="w-full h-36 object-cover rounded" />
                                    <h3 className="mt-2 font-medium">{a.title}</h3>
                                </Link>
                                <div className="text-sm text-gray-600">{a.downloads.toLocaleString()} downloads</div>
                                <div className="text-sm text-gray-600">{a.ratingAvg} ⭐</div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    )
}