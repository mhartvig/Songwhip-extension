var DELAY = 0.1;
var api = "https://songwhip.com/";
var songwhip = "https://songwhip.com/convert?url="

/*
On page action click, redirect to songwhip
*/
browser.pageAction.onClicked.addListener(async () => {
 await redirect();
});

browser.commands.onCommand.addListener(async (command) => {
    if (command == "shortcut-pressed") {
      await redirect();
    }
});

async function redirect(){
    var activeTab = await browser.tabs.query({active: true, currentWindow: true});
    var currentUrl = activeTab[0].url
    var redirectUrl = songwhip + currentUrl;
    //var response = await fetchData(currentUrl);
    chrome.tabs.update(activeTab[0].id, {url: redirectUrl, active:true}); 
}

async function fetchData(url) {
  return window.fetch(api, {
    method: 'post',
    body: url
  }).then(function(response) {
      return response.json();
  });
}