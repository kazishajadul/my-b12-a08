import React, { useState, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppCard from '../components/AppCard'
import LoadingSpinner from '../components/LoadingSpinner'
import apps from '../data/apps.json'
import { sortByDownloads } from '../utils/sortUtils'
import Search from "../components/Search";



export default function AllApps() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [sort, setSort] = useState('none')


    const filtered = useMemo(() => {
        setLoading(true)
        const q = query.trim().toLowerCase()
        const result = apps.filter(a => a.title.toLowerCase().includes(q))
        const sorted = sortByDownloads(result, sort)
        // small artificial delay for UX (simulate search loading)
        setTimeout(() => setLoading(false), 200)
        return sorted
    }, [query, sort])


    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">All Apps</h1>
                        <p className="text-sm text-gray-600">Browse available apps</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-sm">Total: {apps.length}</div>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search apps..." className="border px-3 py-1 rounded" />
                        <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-3 py-1 rounded">
                            <option value="none">Sort</option>
                            <option value="high-low">Downloads: High → Low</option>
                            <option value="low-high">Downloads: Low → High</option>
                        </select>
                    </div>
                </div>


                <div className="mt-6">
                    {loading ? <LoadingSpinner /> : (
                        filtered.length === 0 ? (
                            <div className="p-6 bg-yellow-50 rounded">No App Found</div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {filtered.map(a => <AppCard key={a.id} app={a} />)}
                            </div>
                        )
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}
