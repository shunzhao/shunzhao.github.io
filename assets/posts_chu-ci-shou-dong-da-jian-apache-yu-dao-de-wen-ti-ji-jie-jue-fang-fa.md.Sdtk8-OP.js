import{_ as e,c as a,o as p,a3 as t}from"./chunks/framework.Cv3JQ2Vj.js";const l=JSON.parse('{"title":"初次手动搭建Apache遇到的问题及解决方法","description":"","frontmatter":{"title":"初次手动搭建Apache遇到的问题及解决方法","date":"2017-01-18T00:00:00.000Z"},"headers":[],"relativePath":"posts/chu-ci-shou-dong-da-jian-apache-yu-dao-de-wen-ti-ji-jie-jue-fang-fa.md","filePath":"posts/chu-ci-shou-dong-da-jian-apache-yu-dao-de-wen-ti-ji-jie-jue-fang-fa.md"}'),o={name:"posts/chu-ci-shou-dong-da-jian-apache-yu-dao-de-wen-ti-ji-jie-jue-fang-fa.md"},c=t("<p>以前服务器环境基本上都是用的别人配置好的镜像，自己也就只会使用iis搭建环境，虽然在我知道iis的时候就知道Apache，也知道Apache是世界上最流行的web环境，但还是一直没有涉及，直到这几天想着自己动手搭建一次PHP环境才开始接触，这次是在win2012系统上搭建。</p><p>安装神马的一切顺利 所遇到的问题就是安装完了后吧 通过公网ip访问不了 只能使用127.0.0.1或者localhost访问</p><p>换个意思就是说 Apache 通过外网访问被拒绝了</p><p>就这个问题我百度了2-3天了，但是多半是什么本地外网映射啊神马的。我看了都觉得不靠谱，也就没照着操作。</p><p>今天还是搞不懂，于是就找了一个相对靠谱点了的照着做了</p><p>具体如下 首先开启Apache的虚拟主机 文件是httpd.conf</p><p>打开后搜索Include conf/extra/httpd-vhosts.conf 然后把前面的注释删掉 我的这个版本下载后 直接就被没注释 所以不用修改</p><p>完成后 打开Apache目录下的conf\\extra\\httpd-vhosts.conf文件 这是虚拟主机配制文件</p><p>在下面演示的虚拟主机中添加</p><p>Allow from all<br> Require all granted</p><p>如果有注释的话 也要删掉注释</p><p>添加完后重启Apache就可以了</p>",12),n=[c];function i(s,h,d,_,r,u){return p(),a("div",null,n)}const A=e(o,[["render",i]]);export{l as __pageData,A as default};