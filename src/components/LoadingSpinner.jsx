import React from 'react'
export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
        </div>
    )
}

