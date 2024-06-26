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

  // POPUP调用后台页backJs方法
  $("#callBakcJs").click( e => {
    var bg = chrome.extension.getBackgroundPage()
    bg.backJs();
  })

  // POPUP调用后台页 百度自动搜索内容 方法
  $("#baiduSeachValueAuto").click( e => {
    var bg = chrome.extension.getBackgroundPage()
    bg.autoSeachValue();
  })

  // 显示插件状态
  $("#showBadge").click( e => {
    chrome.action.setBadgeText({
      "text": '在线'
    })
    chrome.action.setBadgeBackgroundColor({
      "color": [0, 255, 0, 100]
    })
  })

  // 隐藏插件状态
  $("#hideBadge").click( e => {
    chrome.action.setBadgeText({
      "text": ''
    })
    chrome.action.setBadgeBackgroundColor({
      "color": [0, 255, 0, 0]
    })
  })

  // 浏览器桌面通知
  $("#popNotify").click( e => {
    chrome.notifications.create({
      title: "插件通知",
      type: 'image',
      iconUrl: 'imgs/profilePicture16.png',
      message: '此处为通知内容',
      imageUrl: 'imgs/dektopWall.png'
    })
  })
})