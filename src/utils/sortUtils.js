export function sortByDownloads(list, mode) {
    if (mode === 'high-low') return list.slice().sort((a, b) => b.downloads - a.downloads)
    if (mode === 'low-high') return list.slice().sort((a, b) => a.downloads - b.downloads)
    return list
}

