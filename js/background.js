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
    var webUrl = window.location.href;
    if (webUrl == 'https://www.baidu.com/') {
      chrome.tabs.executeScript(null, {code: 'javascript: var bdSeachId = document.querySelector("#kw"); bdSeachId.value="chrome插件"; document.querySelector("#su").click()'})
    } else {
      alert("百度页面点击查询")
    }
  })
}

// 浏览器内部新增右键菜单，并绑定点击事件
chrome.contextMenus.create({
  title: '点击自动搜索内容chrome浏览器',
  onclick: function() {
    chrome.tabs.executeScript(null, {code: 'javascript: var bdSeachId = document.querySelector("#kw"); bdSeachId.value="chrome浏览器"; document.querySelector("#su").click()'})
  }
})