export function getInstalledIds() {
    try { return JSON.parse(localStorage.getItem('installedApps') || '[]') }
    catch { return [] }
}
export function installApp(id) {
    const list = getInstalledIds()
    if (!list.includes(id)) {
        list.push(id)
        localStorage.setItem('installedApps', JSON.stringify(list))
    }
}
export function uninstallApp(id) {
    const list = getInstalledIds().filter(x => x !== id)
    localStorage.setItem('installedApps', JSON.stringify(list))
}
export function isInstalled(id) {
    return getInstalledIds().includes(id)
}

