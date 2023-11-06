let changeColor = document.getElementById("changeColor")

// get the color from chrome.storage and set as the button color
chrome.storage.sync.get("color", ({color}) => {
    changeColor.style.backgroundColor = color;
})

// add event listener to the button
changeColor.addEventListener("click", async() => {
    // get current tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})

    // injects script
    chrome.scripting.executeScript({
        target: {tabId:tab.id},
        function: setPageBackgroundColor
    })
})

// body of this function executed as a content script in current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({color}) => {
        document.body.style.backgroundColor = color
    })
}









