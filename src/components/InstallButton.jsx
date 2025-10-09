import React, { useEffect, useState } from 'react'
import { isInstalled, installApp, uninstallApp } from '../utils/localStorage'


export default function InstallButton({ appId, small }) {
    const [installed, setInstalled] = useState(isInstalled(appId))
    useEffect(() => setInstalled(isInstalled(appId)), [appId])


    const handleInstall = () => {
        installApp(appId)
        setInstalled(true)
        // simple toast
        toast('Installed successfully')
    }


    const handleUninstall = () => {
        uninstallApp(appId)
        setInstalled(false)
        toast('Uninstalled successfully')
    }


    return (
        <div>
            {installed ? (
                <button onClick={handleUninstall} className={`px-3 py-1 rounded ${small ? 'text-sm' : ''} bg-gray-200`}>Installed — Uninstall</button>
            ) : (
                <button onClick={handleInstall} className={`px-3 py-1 rounded ${small ? 'text-sm' : ''} bg-indigo-600 text-white`}>Install</button>
            )}
        </div>
    )
}


function toast(msg) {
    // minimal toast implementation
    const el = document.createElement('div')
    el.textContent = msg
    el.className = 'fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded'
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1800)
}


