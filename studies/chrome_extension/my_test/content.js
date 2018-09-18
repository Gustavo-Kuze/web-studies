
let shouldActivateBackgroundColor = true
let originalBackgroundColor = "white"
// const btnToggle = document.createElement(`button`)
// btnToggle.innerHTML = 'Trocar'
// btnToggle.setAttribute('id', 'btn-toggle')

function toggle() {
    if (shouldActivateBackgroundColor) {
        window.document.body.style.backgroundColor = '#333';
        shouldActivateBackgroundColor = false
    } else {
        window.document.body.style.backgroundColor = originalBackgroundColor;
        shouldActivateBackgroundColor = true
    }
}

// btnToggle.addEventListener('click', function () {
//     toggle()
// })

// window.document.addEventListener('DOMContentLoaded', function () {
//     window.document.body.appendChild(btnToggle)
// })

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(message, sender, sendResponse){
    console.log(message.txt)
    toggle()
}



















