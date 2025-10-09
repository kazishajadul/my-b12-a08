import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import apps from '../data/apps.json'
import InstallButton from '../components/InstallButton'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AppDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const app = apps.find(a => String(a.id) === String(id))

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
          <div className="p-8 bg-red-50 rounded text-center">
            <h2 className="text-xl font-semibold">App not found</h2>
            <p className="mt-3">We couldn't find the app you were looking for.</p>
            <div className="mt-4">
              <button
                onClick={() => navigate('/apps')}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Back to All Apps
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const chartData = app.ratings.map(r => ({ name: r.name, value: r.count }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-64 object-cover rounded"
            />
            <div className="mt-4">
              <InstallButton appId={app.id} />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold">{app.title}</h1>
            <div className="mt-2 text-gray-600">
              {app.companyName} • {app.size} MB
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold">Rating</div>
                <div>{app.ratingAvg} ⭐</div>
              </div>
              <div>
                <div className="font-semibold">Downloads</div>
                <div>{app.downloads.toLocaleString()}</div>
              </div>
              <div>
                <div className="font-semibold">Reviews</div>
                <div>{app.reviews}</div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Ratings Overview</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Description Section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{app.description}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
