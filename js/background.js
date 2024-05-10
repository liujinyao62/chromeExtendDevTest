function backJs() {
  chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(null, {code:'javascript:alert("'+ tab.title +'")'})
  })
  // alert("background html")
}