import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorImage from '../assets/error-404.png'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <img
          src={ErrorImage}
          alt="404 Not Found"
          className="w-72 md:w-96 mb-8"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 mt-2">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Go Back!
        </Link>
      </main>

      <Footer />
    </div>
  )
}

