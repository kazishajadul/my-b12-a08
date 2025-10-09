// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import apps from '../data/apps.json'
// import { getInstalledIds, uninstallApp } from '../utils/localStorage'
// import { Link } from 'react-router-dom'


// export default function MyInstallation() {
//     const [installed, setInstalled] = useState([])


//     const refresh = () => setInstalled(getInstalledIds())
//     useEffect(() => refresh(), [])


//     const handleUninstall = (id) => {
//         uninstallApp(id)
//         refresh()
//         toast('App removed')
//     }


//     const installedApps = apps.filter(a => installed.includes(a.id))


//     return (
//         <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
//                 <h1 className="text-2xl font-semibold">My Installation</h1>
//                 <p className="text-sm text-gray-600">Apps installed on this device (saved in localStorage)</p>


//                 <div className="mt-6">
//                     {installedApps.length === 0 ? (
//                         <div className="p-6 bg-yellow-50 rounded">No installed apps. <Link to="/apps" className="text-indigo-600">Browse apps</Link></div>
//                     ) : (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                             {installedApps.map(a => (
//                                 <div key={a.id} className="border rounded p-3">
//                                     <img src={a.image} alt={a.title} className="w-full h-36 object-cover rounded" />
//                                     <h3 className="mt-2 font-medium">{a.title}</h3>
//                                     <div className="text-sm text-gray-600">{a.downloads.toLocaleString()} downloads</div>
//                                     <div className="mt-3 flex gap-2">
//                                         <Link to={`/apps/${a.id}`} className="px-3 py-1 rounded border">Details</Link>
//                                         <button onClick={() => handleUninstall(a.id)} className="px-3 py-1 rounded bg-red-100">Uninstall</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </main>
//             <Footer />
//         </div>
//     )
// }


// function toast(msg) {
//     const el = document.createElement('div')
//     el.textContent = msg
//     el.className = 'fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded'
//     document.body.appendChild(el)
//     setTimeout(() => el.remove(), 1400)
// }


import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Download, Star } from "lucide-react";

export default function Installation() {
  // Default apps list (for demo)
  const defaultApps = [
    {
      id: 1,
      title: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: "258 MB",
      image: "https://via.placeholder.com/80?text=App1",
    },
    {
      id: 2,
      title: "Notion: All-in-One Workspace",
      downloads: "12M",
      rating: 4.8,
      size: "310 MB",
      image: "https://via.placeholder.com/80?text=App2",
    },
    {
      id: 3,
      title: "Spotify: Music & Podcasts",
      downloads: "50M",
      rating: 4.7,
      size: "175 MB",
      image: "https://via.placeholder.com/80?text=App3",
    },
  ];

  // State for installed apps
  const [installedApps, setInstalledApps] = useState([]);

  // Load apps from localStorage or set defaults
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps"));
    if (savedApps && savedApps.length > 0) {
      setInstalledApps(savedApps);
    } else {
      setInstalledApps(defaultApps);
      localStorage.setItem("installedApps", JSON.stringify(defaultApps));
    }
  }, []);

  // Handle uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Apps Count + Sort Button */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 font-medium">
            {installedApps.length} Apps Found
          </p>
          <button className="flex items-center border px-4 py-2 rounded hover:bg-gray-100 transition">
            Sort By Size
            <svg
              className="w-4 h-4 ml-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Installed Apps List */}
        {installedApps.length > 0 ? (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 rounded bg-gray-200"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {app.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span className="flex items-center gap-1 text-green-600">
                        <Download size={14} /> {app.downloads}
                      </span>
                      <span className="flex items-center gap-1 text-orange-500">
                        <Star size={14} /> {app.rating}
                      </span>
                      <span>{app.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            You have no installed apps.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
