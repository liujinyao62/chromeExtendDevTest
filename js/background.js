// POPUP调用方法，弹出当前页的标题
function backJs() {
  chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(null, {code:'javascript:alert("'+ tab.title +'")'})
  })
  // alert("background html")
}

// POPUP调用百度自动查询内容
function autoSeachValue() {
  chrome.tabs.getSelected(null, function(tab) {
    if (tab.title.indexOf('百度一下') != -1 || tab.title.indexOf('百度搜索') != -1) {
      chrome.tabs.executeScript(null, {code: 'javascript: var bdSeachId = document.querySelector("#kw"); bdSeachId.value="chrome插件"; var buttonId = document.querySelector("#su").click()'})
    } else {
      alert("百度页面点击查询")
    }
  })
}