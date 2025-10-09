import React from 'react'
import { Link } from 'react-router-dom'
import InstallButton from './InstallButton'
// import apps from "../data/apps.json"



export default function AppCard({ app }) {
    return (
        <div className="border rounded-lg p-3 hover:shadow-md transition">
            <Link to={`/apps/${app.id}`} className="block">
                <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-3 font-semibold">{app.title}</h3>
            </Link>
            <div className="text-sm text-gray-600 mt-2">Downloads: {app.downloads.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Rating: {app.ratingAvg} ⭐</div>
            <div className="mt-3">
                <InstallButton appId={app.id} />
            </div>
        </div>
    )
}


// // AppCard.jsx - CORRECTED VERSION
// import React from 'react'
// import { Link } from 'react-router-dom'
// import InstallButton from './InstallButton'
// // ❌ REMOVE: import apps from "../data/apps.json" 

// export default function AppCard({ app }) { // This 'app' prop is all you need
//     return (
//         <div className="border rounded-lg p-3 hover:shadow-md transition">
//             <Link to={`/apps/${app.id}`} className="block">
//                 {/* Image and Title show data correctly */}
//                 <img 
//                     src={app.image} 
//                     alt={app.title} 
//                     className="w-full h-40 object-cover rounded" 
//                 />
//                 <h3 className="mt-3 font-semibold">{app.title}</h3>
//             </Link>
//             <div className="text-sm text-gray-600 mt-2">Downloads: {app.downloads.toLocaleString()}</div>
//             <div className="text-sm text-gray-600">Rating: {app.ratingAvg} ⭐</div>
//             <div className="mt-3">
//                 <InstallButton appId={app.id} />
//             </div>
//         </div>
//     )
// }

