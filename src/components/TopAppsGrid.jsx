import React from 'react'
import AppCard from './AppCard'


export default function TopAppsGrid({ apps }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {apps.map(a => <AppCard key={a.id} app={a} />)}
        </div>
    )
}
