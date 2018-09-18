console.log('running like a charm')

chrome.browserAction.onClicked.addListener(btnClicked)

function btnClicked(tab){

    let msg = {
        txt: "Message from background"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}