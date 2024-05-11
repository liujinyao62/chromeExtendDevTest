# chromeExtendDevTest

####  chrome插件开发代码说明

开发说明:

1、manifest.json中icons配置的图片需指向【PNG格式】文件，否则图标不显示

2、browser_action中不设置default_icon，最新chrome浏览器将展示灰色的icons中的图片

3、manifest.json中配置background是版本manifest_version2中的属性，3中配置无效，使用getBackgroundPage()无法获取后台页DOM及属性

4、POPUP调用后台页逻辑方法，可直接拿getBackground()获取的bg，然后bg.backJs调用方法

5、content_scripts是注入脚本，

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

6、