import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import apps from '../data/apps.json'
import InstallButton from '../components/InstallButton' // NOTE: Assumed to be updated separately

// -----------------------------------------------------------------
// METRIC BOX (No changes needed)
// -----------------------------------------------------------------
const MetricBox = ({ value, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="text-3xl text-primary mb-1">
      <span role="img" aria-label={label}>
        {label === 'Downloads' ? '⬇️' : label.includes('Rating') ? '⭐' : '📄'}
      </span>
    </div>
    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
  </div>
)

// -----------------------------------------------------------------
// RATING BAR (UPDATED: All bars now use bg-red-700)
// -----------------------------------------------------------------
const RatingBar = ({ starsName, count, maxCount }) => {
  const widthPercentage = (count / maxCount) * 100
  // const stars = starsName.split(' ')[0] // No longer needed for color logic

  // *** UPDATED: Using a fixed red color for all ratings ***
  const colorClass = 'bg-red-700' 

  return (
    <div className="flex items-center space-x-2 my-1">
      <span className="w-12 text-sm text-right text-gray-600 dark:text-gray-300">{starsName}</span>

      <div className="flex-1 h-3 bg-gray-300 rounded-full dark:bg-gray-700">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${widthPercentage}%` }}
          aria-label={`${starsName} rating bar`}
        ></div>
      </div>

      <span className="w-12 text-sm text-left font-medium text-gray-800 dark:text-gray-100">{count}</span>
    </div>
  )
}

// -----------------------------------------------------------------
// APP DETAILS MAIN COMPONENT (Install Button logic updated)
// -----------------------------------------------------------------
export default function AppDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const app = apps.find(a => String(a.id) === String(id))

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
          <div className="p-8 bg-red-100 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-500">App not found</h2>
            <p className="mt-3 text-gray-700">We couldn't find the app you were looking for with ID: {id}.</p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/')}
                className="btn btn-primary bg-green-700 hover:bg-green-800 text-white" // Updated to bg-green-700
              >
                Go to Home Page
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const maxRatingCount = Math.max(...app.ratings.map(r => r.count))
  const ratingValue = `${app.ratingAvg} / 5`

  const metrics = [
    {
      value: app.downloads.toLocaleString(),
      label: 'Downloads',
    },
    {
      value: ratingValue,
      label: 'Average Rating',
    },
    {
      value: app.reviews.toLocaleString(),
      label: 'Total Reviews',
    },
  ]

  const reversedRatings = app.ratings.slice().reverse()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto p-6 w-full">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 md:p-8">

          {/* 1. Header/Title Section */}
          <div className="flex items-center space-x-6 mb-8 border-b pb-6 border-gray-100 dark:border-gray-700">
            <div className="w-24 h-24 rounded-2xl bg-gray-200 flex items-center justify-center p-1 shadow-lg overflow-hidden">
              <img
                src={app.image}
                alt={`${app.title} icon`}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{app.title}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Developed by <a href="#developer" className="text-primary hover:underline">{app.companyName}</a>
              </p>
              
           
              <button 
                className="btn btn-lg bg-green-500 hover:bg-green-600 text-white border-none shadow-lg w-60" 
                onClick={() => alert(`Installing ${app.title}`)}
              >
                Install Now ({app.size} MB)
              </button>
            </div>
          </div>

          {/* 2. Metrics Section */}
          <div className="flex justify-around items-center border-y border-gray-200 dark:border-gray-700 py-4 mb-8">
            {metrics.map((metric, index) => (
              <React.Fragment key={index}>
                <MetricBox value={metric.value} label={metric.label} />
                {index < metrics.length - 1 && (
                  <div className="border-l border-gray-200 dark:border-gray-700 h-16"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 3. Ratings Graph Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Ratings Breakdown</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              {reversedRatings.map((rating) => (
                <RatingBar
                  key={rating.name}
                  starsName={rating.name}
                  count={rating.count}
                  maxCount={maxRatingCount}
                />
              ))}
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>0</span>
                <span>{Math.round(maxRatingCount / 2).toLocaleString()}</span>
                <span>{maxRatingCount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* 4. Description Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Description</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{app.description}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

