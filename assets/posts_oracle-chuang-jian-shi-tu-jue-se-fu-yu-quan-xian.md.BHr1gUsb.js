import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Cv3JQ2Vj.js";const y=JSON.parse('{"title":"Oracle创建视图、角色，赋予权限","description":"","frontmatter":{"title":"Oracle创建视图、角色，赋予权限","date":"2022-03-07T00:00:00.000Z"},"headers":[],"relativePath":"posts/oracle-chuang-jian-shi-tu-jue-se-fu-yu-quan-xian.md","filePath":"posts/oracle-chuang-jian-shi-tu-jue-se-fu-yu-quan-xian.md"}'),h={name:"posts/oracle-chuang-jian-shi-tu-jue-se-fu-yu-quan-xian.md"},l=n(`<h1 id="oracle创建视图、角色-赋予权限" tabindex="-1">Oracle创建视图、角色，赋予权限 <a class="header-anchor" href="#oracle创建视图、角色-赋予权限" aria-label="Permalink to &quot;Oracle创建视图、角色，赋予权限&quot;">​</a></h1><h2 id="创建角色" tabindex="-1">创建角色 <a class="header-anchor" href="#创建角色" aria-label="Permalink to &quot;创建角色&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建HODRK角色;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> role</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HODRK;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 分配角色给OPS$SZ01, OPS$SZ02, OPS$SZ03, OPS$SZ04, OPS$SZ05用户</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HODRK </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OPS$SZ01, OPS$SZ02, OPS$SZ03, OPS$SZ04, OPS$SZ05;</span></span></code></pre></div><h2 id="创建视图" tabindex="-1">创建视图 <a class="header-anchor" href="#创建视图" aria-label="Permalink to &quot;创建视图&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 删除视图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DROP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> VIEW</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ADMIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student_V</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建视图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REPLACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FORCE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VIEW </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ADMIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student_V</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ID,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   AGE,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   SEX</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ID,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            AGE,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            SEX</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STUDENTS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   GROUP BY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ID;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建别名，让别的角色也能不带ADMIN前缀直接访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> REPLACE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBLIC </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SYNONYM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Student_V </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ADMIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student_V</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 授予delete,insert权限给SHUNZI角色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DELETE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ADMIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Student_V</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SHUNZI;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 授予select权限给所有角色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HODBA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">H110_DAILY_V</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PUBLIC;</span></span></code></pre></div>`,5),t=[l];function p(k,e,E,r,d,g){return a(),i("div",null,t)}const A=s(h,[["render",p]]);export{y as __pageData,A as default};