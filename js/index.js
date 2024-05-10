$(function() {
  $("#toExtendBg").click( e => {
    window.open(chrome.extension.getURL('background.html'))
  })
  $("#getBgTitle").click( e => {
    var bg = chrome.extension.getBackgroundPage()
    alert(bg.document.title)
  })
})