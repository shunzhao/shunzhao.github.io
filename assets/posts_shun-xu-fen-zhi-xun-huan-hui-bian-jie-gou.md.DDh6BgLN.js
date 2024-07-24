import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.Cv3JQ2Vj.js";const g=JSON.parse('{"title":"分支|循环汇编结构","description":"","frontmatter":{"title":"分支|循环汇编结构","date":"2021-03-01T00:00:00.000Z"},"headers":[],"relativePath":"posts/shun-xu-fen-zhi-xun-huan-hui-bian-jie-gou.md","filePath":"posts/shun-xu-fen-zhi-xun-huan-hui-bian-jie-gou.md"}'),p={name:"posts/shun-xu-fen-zhi-xun-huan-hui-bian-jie-gou.md"},t=e(`<h1 id="分支-循环汇编结构" tabindex="-1">分支|循环汇编结构 <a class="header-anchor" href="#分支-循环汇编结构" aria-label="Permalink to &quot;分支|循环汇编结构&quot;">​</a></h1><p>目前所有的程序都是这三种结构组合而成的，顺序结构没啥好讲的，就是一条条接着往下执行。</p><p>分支结构例如：IF的汇编实现</p><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  test、cmp</span></span></code></pre></div><p>循环结构汇编实现：</p><p>do-while</p><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>p:</span></span>
<span class="line"><span>	body-segment</span></span>
<span class="line"><span>test %ax, %bx</span></span>
<span class="line"><span>jg p</span></span></code></pre></div><p>while:</p><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jmp zz</span></span>
<span class="line"><span>p:</span></span>
<span class="line"><span>	body-segment</span></span>
<span class="line"><span>zz: test %ax, %bx</span></span>
<span class="line"><span>jp p</span></span></code></pre></div><div class="language-assembly vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">assembly</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>zz: test %ax, %bx</span></span>
<span class="line"><span>jle done</span></span>
<span class="line"><span>p:</span></span>
<span class="line"><span>	body-segment</span></span>
<span class="line"><span>test %ax, %bx</span></span>
<span class="line"><span>jp p</span></span>
<span class="line"><span>done: rep ret</span></span></code></pre></div>`,10),i=[t];function l(c,o,d,h,u,b){return n(),a("div",null,i)}const m=s(p,[["render",l]]);export{g as __pageData,m as default};
