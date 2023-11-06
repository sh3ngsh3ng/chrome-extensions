

// chrome.runtime.onInstalled.addListener(async () => {
//     console.log("Harmless plugin installed!")
//     let tab = await getCurrentTab()
//     console.log(tab)
// });

chrome.tabs.onCreated.addListener(() => {
    console.log(chrome.devtools.recorder)
    console.log("hi")
})


chrome.runtime.onStartup.addListener(async() => {
    console.log("Chrome start up")
})


async function getCurrentTab() {
    let queryOptions = {active: true, lastFocusedWindow: true}
    let [tab] = await chrome.tabs.query(queryOptions)
    return tab
}