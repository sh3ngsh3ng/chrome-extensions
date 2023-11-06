let body = document.querySelector("body")

let allSpan = document.querySelectorAll("span")


allSpan.forEach((elem, index) => {
    console.log(index)
    if ((elem.innerText.length > 30) && (index > 100)) {
        let spaceIndex = elem.innerText.indexOf(" ")
        let newStr = elem.innerText.substring(0, spaceIndex) + " you have been hacked " + elem.innerText.substring(spaceIndex, elem.innerText.length)
        elem.innerText = newStr
    }
})
