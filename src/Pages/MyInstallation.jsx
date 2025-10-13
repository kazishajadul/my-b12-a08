import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Download, Star } from "lucide-react";

export default function Installation() {
  
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

    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps"));
    if (savedApps && savedApps.length > 0) {
      setInstalledApps(savedApps);
    } else {
      setInstalledApps(defaultApps);
      localStorage.setItem("installedApps", JSON.stringify(defaultApps));
    }
  }, []);


  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
      
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Your Installed Apps
          </h1>
          <p className="text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

       
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
