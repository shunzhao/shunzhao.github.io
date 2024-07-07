import{_ as e,c as t,o as n,a3 as o}from"./chunks/framework.Cv3JQ2Vj.js";const h=JSON.parse('{"title":"C#连接SQL Server实现增删改查","description":"","frontmatter":{"title":"C#连接SQL Server实现增删改查","date":"2017-04-06T00:00:00.000Z"},"headers":[],"relativePath":"posts/csharp-lian-jie-sqlserver-shi-xian-zeng-shan-gai-cha.md","filePath":"posts/csharp-lian-jie-sqlserver-shi-xian-zeng-shan-gai-cha.md"}'),a={name:"posts/csharp-lian-jie-sqlserver-shi-xian-zeng-shan-gai-cha.md"},s=o(`<h1 id="c-连接sql-server实现增删改查" tabindex="-1">C#连接SQL Server实现增删改查 <a class="header-anchor" href="#c-连接sql-server实现增删改查" aria-label="Permalink to &quot;C#连接SQL Server实现增删改查&quot;">​</a></h1><p>最好是创建一个类，把方法写到类里面来调用。</p><p>别忘了添加引用</p><p>using System.Data;//提供给DataTable using System.Data.SqlClient;//提供给SqlConnection</p><p>类名：DBhelper （听老师说这个名字很重要，以后工作必会）</p><p>写一个返回表格的方法：</p><p>//创建连接字符串 string con=&quot;server=.;uid=sa;pwd=123;database=jiekou&quot;； public DataTable 方法名(string sqler) //一个参数是string类型的变量，第二个参数是sql执行语句 { //创建一个空表格 DataTable dt=new DataTable ()； //创建连接对象 SqlConnection conn=new SqlConnection()； //制定连接对象 conn.Connectionstring=con； //创建适配器，从数据库中拿数据(sql语句，连接对象) SqlDataAdapter sda = new SqlDataAdapter(sqlStr, conn); //保存数据 sda.Fill(dt); //返回数据 return dt; }</p><p>写一个返回影响行数的方法：</p><p>public int 方法名(string sqler) { //创建连接对象SqlConnection conn=new SqlConnection()；<a href="//xn--conn-kn9fl11c9sa540csp0gckh.Connectionstring=con" target="_blank" rel="noreferrer">//制定连接对象conn.Connectionstring=con</a>； //打开连接 conn.Open(); //创建操作数据库的对象(sql语句，连接对象) SqlCommand cmd = new SqlCommand(sqlStr, conn); //获取受影响行数 int count= cmd.ExecuteNonQuery(); //返回受影响行数 return count; }</p><p>返回增加或修改，或删除数据结果是否成功：</p><pre><code>    public bool GetResult(string sqlStr)
    {
        bool result = false;
        //创建连接数据库对象
        SqlConnection conn = new SqlConnection(connStr);
        //打开连接
        conn.Open();
        //创建操作数据库对象（操作的sql语句，连接对象）
        SqlCommand cmd = new SqlCommand(sqlStr, conn);
        //ExecuteNonQuery返回操作数据库的受影响行数
        int roll = cmd.ExecuteNonQuery();
        conn.Close();//关闭连接对象
        if (roll&gt;0)
        {
            result = true;
        }
        else
        {
            result = false;
        } 
        return result;
    }
</code></pre><p>调用类：</p><p>// 创建类的对象用来访问类的成员 类方法名 dbh = new类方法名();</p><p>记录选中的行的原始商品编号：</p><p>string selectNo = &quot;&quot;;</p><p>用一个事件获取用户点击的表格，并且将数据显示在textBox上</p><p>private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e) { selectNo = dataGridView1.SelectedRows[0].Cells[0].Value.ToString(); textBox1.Text = dataGridView1.SelectedRows[0].Cells[1].Value.ToString(); textBox2.Text = dataGridView1.SelectedRows[0].Cells[2].Value.ToString(); }</p><p>增：</p><p>//sqler 不解释了 需要注意的是@ string sqler = @&quot;insert into api(jiekou,api)values(&#39;&quot;+textBox1.Text+&quot;&#39;,&#39;&quot;+textBox2.Text+&quot;&#39;)&quot;; //获取返回的行数 int count = db.GR(sqler); //用于判断行数 if (count&gt;0) { MessageBox.Show(&quot;增加成功&quot;); chaxun(); } else { MessageBox.Show(&quot;增加失败&quot;); }</p><p>删：</p><p>string no = dataGridView1.SelectedRows[0].Cells[0].Value.ToString(); string sqler = &quot;delete api where No=&#39;&quot; + no + &quot;&#39;&quot;; int conut = db.GR(sqler); if (conut&gt;0) { MessageBox.Show(&quot;删除成功&quot;); chaxun(); } else { MessageBox.Show(&quot;删除失败&quot;); }</p><p>改：</p><p>string sqler = &quot;update api set jiekou=&#39;&quot;+textBox1.Text+&quot;&#39;,api=&#39;&quot;+textBox2.Text+&quot;&#39;where No=&#39;&quot;+selectNo+&quot;&#39;&quot;; int count = db.GR(sqler); if (count&gt;0) { MessageBox.Show(&quot;修改成功&quot;); chaxun(); } else { MessageBox.Show(&quot;修改失败&quot;); }</p><p>查：</p><p>//写SQL执行语句 string sqlStr = &quot;select * from api&quot;; // DataTable dt = dbh.GetDataTable(sqlStr); //将获取到的数据显示在dataGridView1中 dataGridView1.DataSource = dt;</p>`,25),r=[s];function l(i,c,u,p,q,d){return n(),t("div",null,r)}const g=e(a,[["render",l]]);export{h as __pageData,g as default};
