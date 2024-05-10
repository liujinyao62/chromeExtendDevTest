// 监控打开百度网站时，直接搜索固定内容
document.addEventListener('DOMContentLoaded', function() {
  var webUrl = window.location.href;
  if (webUrl == 'https://www.baidu.com/') {
    document.querySelector("#kw").value = 'chrome插件'
    document.querySelector("#su").click()
  }
})