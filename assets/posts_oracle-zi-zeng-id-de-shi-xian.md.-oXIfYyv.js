import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Cv3JQ2Vj.js";const F=JSON.parse('{"title":"Oracle自增ID的实现","description":"","frontmatter":{"title":"Oracle自增ID的实现","date":"2022-05-20T00:00:00.000Z"},"headers":[],"relativePath":"posts/oracle-zi-zeng-id-de-shi-xian.md","filePath":"posts/oracle-zi-zeng-id-de-shi-xian.md"}'),h={name:"posts/oracle-zi-zeng-id-de-shi-xian.md"},t=n(`<h1 id="oracle-自增id的实现" tabindex="-1">Oracle 自增ID的实现 <a class="header-anchor" href="#oracle-自增id的实现" aria-label="Permalink to &quot;Oracle 自增ID的实现&quot;">​</a></h1><p>Oracle 竟然没有像 MySQL 那样主键可以自增，后面了解了一些其他方式来达到同样的效果，比如 Sequence：</p><p>首先创建一个 Sequence</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sequence</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SEQ_ID</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">minvalue </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">maxvalue </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">99999999</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> with</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">increment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nocache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">order;</span></span></code></pre></div><p>然后创建一个 trigger，用trigger再新增之前插入到id中。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE OR REPLACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> trigger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> auto_increment_id_trigger</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">before</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> insert</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ITEMS_POOL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> each </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ROW</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">when</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uuid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">begin</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	select</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> auto_increment_id_items_pool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nextval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> into</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">uuid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dual;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">topic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot; (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;id&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;forum_id&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> integer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;subject&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> varchar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NOT NULL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ALTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TABLE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;topic&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ADD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CONSTRAINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> forum_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FOREIGN KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;forum_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">REFERENCES</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;forum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Initials</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">insert into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;topic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;forum_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;D&#39;&#39;artagnian&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,7),l=[t];function k(p,e,r,d,E,g){return a(),i("div",null,l)}const o=s(h,[["render",k]]);export{F as __pageData,o as default};