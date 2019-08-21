var DELAY = 0.1;
var api = "https://songwhip.com/api/";
var convert = "https://songwhip.com/convert?url="

/*
On page action click, redirect to songwhip
*/
browser.pageAction.onClicked.addListener(async () => {
    var activeTab = await browser.tabs.query({active: true, currentWindow: true});
    var currentUrl = activeTab[0].url
    chrome.tabs.update(activeTab[0].id, {url: convert+currentUrl, active:true});  
});