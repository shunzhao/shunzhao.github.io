import{_ as a,c as n,o as s,j as e,a as t}from"./chunks/framework.Cv3JQ2Vj.js";const D=JSON.parse('{"title":"C#(.net)连接Mysql","description":"","frontmatter":{"title":"C#(.net)连接Mysql","date":"2018-06-09T00:00:00.000Z"},"headers":[],"relativePath":"posts/csharp-he-dotnet-lian-jie-mysql.md","filePath":"posts/csharp-he-dotnet-lian-jie-mysql.md"}'),l={name:"posts/csharp-he-dotnet-lian-jie-mysql.md"},o=e("h1",{id:"c-net-连接mysql",tabindex:"-1"},[t("C#(.net)连接Mysql "),e("a",{class:"header-anchor",href:"#c-net-连接mysql","aria-label":'Permalink to "C#(.net)连接Mysql"'},"​")],-1),r=e("p",null,"自己写了个小说网站，其中需要用到分页，发现sqlServer的分页查询需要写好长好长，刚开始还不会写，想着还是用MySQL吧，LIMIT简单明了。遂百度查资料怎么连接Mysql。",-1),c=e("p",null,[t("方法如下： 首先到MySql 官网下载 连接库 "),e("a",{href:"https://dev.mysql.com/downloads/connector/net/",title:"转送门",target:"_blank",rel:"noreferrer"},"转送门"),t(" 我直接选择的就是 .NET & Mono，下载的时候需要特别注意版本，不同的版本对应不同的NET框架，这里我吃了很大的亏，注意注意注意！")],-1),i=e("p",null,"下载完后得到一个压缩包，将里面的 MySql.Data.dll 引用到你的项目工程里面去，引用完后，就可以开始写连接字符串了。",-1),d=e("p",null,"(经过上次连接ACCESS的 '经验' 这次自己猜出的写法， 其实还是会发现和连接ACCESS、SqlServer是差不多的，就是改了前面的关键字罢了。",-1),p=e("p",null,"demo：",-1),_=e("p",null,'using MySql.Data.MySqlClient; //需要引用 private string linkStr = "server=localhost;User Id=root;password=root;Database=book"; public DataTable getData(string sql) { DataTable dt = new DataTable(); MySqlConnection conn = new MySqlConnection(linkStr); conn.Open(); MySqlDataAdapter sda = new MySqlDataAdapter(sql, conn); sda.Fill(dt); return dt; }',-1),h=[o,r,c,i,d,p,_];function q(y,S,m,M,u,f){return s(),n("div",null,h)}const b=a(l,[["render",q]]);export{D as __pageData,b as default};