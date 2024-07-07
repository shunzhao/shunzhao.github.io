import{_ as a,c as n,o as t,a3 as r}from"./chunks/framework.Cv3JQ2Vj.js";const l=JSON.parse('{"title":"C# WinForm中窗体与窗体间传值","description":"","frontmatter":{"title":"C# WinForm中窗体与窗体间传值","date":"2017-06-14T00:00:00.000Z"},"headers":[],"relativePath":"posts/csharpwinform-zhong-chuang-ti-yu-chuang-ti-jian-chuan-zhi.md","filePath":"posts/csharpwinform-zhong-chuang-ti-yu-chuang-ti-jian-chuan-zhi.md"}'),e={name:"posts/csharpwinform-zhong-chuang-ti-yu-chuang-ti-jian-chuan-zhi.md"},o=r(`<h1 id="c-winform中窗体与窗体间传值" tabindex="-1">C# WinForm中窗体与窗体间传值 <a class="header-anchor" href="#c-winform中窗体与窗体间传值" aria-label="Permalink to &quot;C# WinForm中窗体与窗体间传值&quot;">​</a></h1><p>今天在复习WinForm的增删改查中谈到了窗体与窗体间的传值，听说这个还是大一校企共建班的结业考试，老师也顺便给我们讲了讲，教的呢是如何在窗体的构造函数中传值。还记得当初在写VIP视频解析项目的时候，需要实现主窗体得到登录窗体的用户类型来判断是否显示管理页面，当时就是需要窗体间的传值，自己没写出来，后来百度得到一个方法，就是创建全局变量来实现传值。看了看别人介绍的方法，也就写出来了。感觉没老师说的那么难，之所以很多人理解不了，是因为讲得比较复杂，而不是窗体间的传值难，因为今天是配合着增删改查来讲的，而很多人连增删改查都理解不了、写不出来。配合着搞不懂的东西去理解另一个新知识，理解不了应该很正常。(同时吐槽一下，我明明举手了，看来我的存在感还不是一般的低)，屁话说了这么多还是记下笔记</p><p>三种方法的deom：<a href="http://download.zhaoshun.org/WinForm_ChuanZhi.rar" title="本地下载" target="_blank" rel="noreferrer">本地下载</a> (如果看了下面写的还不懂，可以下载deom来一步步运行仔细看，同时注释的也更加详细)</p><p>第一种方法：</p><p>创建一个全局变量a</p><p>public static string a;</p><p>第一个窗体中给a赋值</p><p>a = &quot;shunzi&quot;;</p><p>第二个窗体中通过第一个窗体得名.变量名取到a的值</p><p>TextBox1.Text=Form1.a;//将取到得a的值赋值给TextBox1控件上</p><p>第二种方法：</p><p>创建一个公共类 需要提示的是 这种传值是双向的</p><pre><code>class Class1
{
    public static string a;//定义完全公开、静态、string的变量a
}
</code></pre><p>第一个窗体中给变量a赋值</p><p>Class1.a = &quot;shunzi&quot;;</p><p>第二个窗体中取值</p><p>TextBox1.Text = Class1.a;//将取到得a的值赋值给TextBox1控件上</p><p>第三种方法：</p><p>窗体的构造函数传值</p><p>例如在第二个窗体的构造函数中放一个数组变量string[] arr来接收第一个窗体传过来的数组</p><p>//创建一个全局新数组 string[] aaa = new string[3]; //窗体2的构造函数 public Form2(string[] arr) { InitializeComponent(); //将接收到的数组，赋值给全局新数组 aaa = arr; }</p><p>在第一个窗体中</p><pre><code>    //定义一个数组
    string\\[\\] arr = new string\\[3\\];
    //按钮被按下时
    private void Cz\\_Button\\_Click(object sender, EventArgs e)
    {
        arr\\[0\\] = No1\\_TextBox.Text;//将需要传的第一个值赋值给数组
        arr\\[1\\] = No2\\_TextBox.Text;//将需要传的第二个值赋值给数组
        arr\\[2\\] = No3\\_TextBox.Text;//将需要传的第三个值赋值给数组
        Form2 f2 = new Form2(arr);//在new新窗体的时候将数组传过去
        f2.Show();
    }
</code></pre>`,23),i=[o];function p(s,c,h,u,_,m){return t(),n("div",null,i)}const g=a(e,[["render",p]]);export{l as __pageData,g as default};
