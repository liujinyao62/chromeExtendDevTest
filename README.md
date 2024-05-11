# chromeExtendDevTest

####  chrome插件开发代码说明

开发说明:

1、manifest.json中icons配置的图片需指向【PNG格式】文件，否则图标不显示

2、browser_action中不设置default_icon，最新chrome浏览器将展示灰色的icons中的图片

3、manifest.json中配置background是版本manifest_version2中的属性，3中配置无效，使用getBackgroundPage()无法获取后台页DOM及属性

4、POPUP调用后台页逻辑方法，可直接拿getBackground()获取的bg，然后bg.backJs调用方法

5、"permissions"，配置权限功能，在权限配置中配置tabs，可以使用标签相关，配置"contextMenus",可以使用右键菜单相关功能

6、content_scripts是注入脚本，

              "content_scripts": [
                  {
                    <!-- 所有路径 -->
                    "matches": ["<all_urls>"],

                    <!-- 注入的脚本 举例：["/js/baidu.js"、"/js/baidu.js"] -->
                    "js": ["/js/baidu.js"],

                    <!-- 初始加载时 -->
                    "run_at": "document_start"
                  }
                ]

7、chrome.contextMenus.create配置事件中：
        documentUrlPatterns: ["https://*.baidu.com/*"]，表示只针对特定页面展示右键菜单；
        contexts: ["editable", "selection"]，表示只在编辑框及托选文本中右键展示菜单

8、chrome_url_overrides设置新标签路径页面 newtab: newTab.html


9、V2 => V3改动

  （1）插件背景页，background.page或者background.scripts都是2版本及以下适用的，3版本及以上改为服务 service_workers
  （2）browser_action 改为 action
  （3）V2中chromeAPI权限和主机权限是一起在permissions配置的，但是V3中是分离的，分别是permissions配置chromeAPI，host_permissions是配置主机权限
