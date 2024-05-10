$(function() {
  // 打开后台页
  $("#toExtendBg").click( e => {
    window.open(chrome.extension.getURL('background.html'))
  })
  // 弹出后台页标题
  $("#getBgTitle").click( e => {
    var bg = chrome.extension.getBackgroundPage()
    alert(bg.document.title)
  })
  // 设置后台页标题并弹出
  $("#setBgTitle").click( e => {
    var newTitle = prompt("设置新的后台也标题", "新标题")
    var bg = chrome.extension.getBackgroundPage()
    bg.document.title = newTitle
    alert(bg.document.title)
  })
})