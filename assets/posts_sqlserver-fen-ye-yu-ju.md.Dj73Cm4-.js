import{_ as e,c as r,o as a,a3 as o}from"./chunks/framework.Cv3JQ2Vj.js";const u=JSON.parse('{"title":"Sql Server 分页语句","description":"","frontmatter":{"title":"Sql Server 分页语句","date":"2018-06-14T00:00:00.000Z"},"headers":[],"relativePath":"posts/sqlserver-fen-ye-yu-ju.md","filePath":"posts/sqlserver-fen-ye-yu-ju.md"}'),t={name:"posts/sqlserver-fen-ye-yu-ju.md"},s=o('<h1 id="sql-server-分页语句" tabindex="-1">Sql Server 分页语句 <a class="header-anchor" href="#sql-server-分页语句" aria-label="Permalink to &quot;Sql Server 分页语句&quot;">​</a></h1><p>前段时间写小说站的时候，搜索的时候就要用到分页，在我的记忆里好像没有相应的Sql语句，老师也没有讲过，自己也不会写，于是就想着用Mysql 来写，毕竟简单，但是毕竟不是搭配主流。以前看mysql LIMIT 关键字 也百度过 Sql Server 有没有类似的，结果是没有，虽然别人也写出了 sql 语句 但是感觉都好复杂，还要写子查询什么的，当时也用不到，所以就看了两眼也就放下了。这次需要了也就记下来</p><h1 id="_2005-2008-推荐使用" tabindex="-1">2005 - 2008 推荐使用 <a class="header-anchor" href="#_2005-2008-推荐使用" aria-label="Permalink to &quot;2005 - 2008 推荐使用&quot;">​</a></h1><p>SELECT * FROM(SELECT TOP 10 ROW_NUMBER() OVER(ORDER BY ID DESC) AS RowNumber ,* FROM bookinfo) AS TEMP1 WHERE RowNumber &gt;0</p><p>或者</p><p>SELECT * FROM (SELECT *,ROW_NUMBER() OVER (ORDER BY Id DESC) AS RowNumber FROM bookinfo) EmployeePage WHERE RowNumber &gt; 0 AND RowNumber &lt;= 10</p><p>或者</p><p>SELECT * FROM (SELECT *,ROW_NUMBER() OVER (ORDER BY Id DESC) AS RowNumber FROM bookinfo) as B WHERE RowNumber BETWEEN 0 AND 10</p><h1 id="_2012-以上-推荐使用" tabindex="-1">2012 - 以上 推荐使用 <a class="header-anchor" href="#_2012-以上-推荐使用" aria-label="Permalink to &quot;2012 - 以上 推荐使用&quot;">​</a></h1><p>SELECT * FROM bookinfo ORDER BY Id DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY;</p><h1 id="分页算法" tabindex="-1">分页算法 <a class="header-anchor" href="#分页算法" aria-label="Permalink to &quot;分页算法&quot;">​</a></h1><p>反正都写了，也就写下来吧。(当前页-1) * 每页显示多少条</p>',12),E=[s];function l(n,R,i,S,_,p){return a(),r("div",null,E)}const c=e(t,[["render",l]]);export{u as __pageData,c as default};