import{_ as e,c as o,o as t,a3 as a}from"./chunks/framework.Cv3JQ2Vj.js";const E=JSON.parse('{"title":"Cookie的缺点","description":"","frontmatter":{"title":"Cookie的缺点","date":"2018-03-29T00:00:00.000Z"},"headers":[],"relativePath":"posts/cookie-de-que-dian.md","filePath":"posts/cookie-de-que-dian.md"}'),p={name:"posts/cookie-de-que-dian.md"},s=a('<h1 id="cookie的缺点" tabindex="-1">Cookie的缺点 <a class="header-anchor" href="#cookie的缺点" aria-label="Permalink to &quot;Cookie的缺点&quot;">​</a></h1><p>没想到这么快，.NET也开始学COOKIE了，SESSION则还没讲到，.NET 中设置COOKIE和获取COOKIE主要用到两个内置系统对象分别是 request和response。</p><p>另外今天也没想到，上课时老师竟然还会讲 GET和POST的这两个知识点，很让我意外。我以为学完了都不会讲的。没想到竟然还讲了，讲的还比较仔细。</p><p>自己则因为好久也没有写点什么了， 最后决定写一些我所知道的COOKIE的一些缺点和替代品，这些则是我原来学PHP中学到的知识点。</p><p>在COOKIE中，不要存储敏感数据，COOKIE不是很安全，截取COOKIE之后可以用来COOKIE欺骗，</p><p>不要把COOKIE当作客户端存储器来使用，每个域名允许COOKIE是有限制的，根据不同的浏览器这个限制也不同。并且COOKIE中保存数据的最大字节数一般是4K，</p><p>设置以后每次请求都会附着在HTTP请求头中一起发送，浪费带宽，带来性能问题。</p><p>COOKIE替代品 localstorage</p><p>设置 localstorage.setItem(&#39;key&#39;,&#39;value&#39;)</p><p>获取 localstorage.getItem(&#39;key&#39;)</p><p>删除指定 localstorage.removeItem(&#39;key&#39;)</p><p>删除所有 localstorage.clear()</p><p>获取键名 key(下标)</p>',13),c=[s];function r(i,O,_,l,n,d){return t(),o("div",null,c)}const I=e(p,[["render",r]]);export{E as __pageData,I as default};