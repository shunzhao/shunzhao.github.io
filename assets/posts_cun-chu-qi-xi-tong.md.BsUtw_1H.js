import{_ as t,c as a,o as e,a3 as s}from"./chunks/framework.Cv3JQ2Vj.js";const l=JSON.parse('{"title":"存储器系统","description":"","frontmatter":{"title":"存储器系统","date":"2020-02-19T00:00:00.000Z"},"headers":[],"relativePath":"posts/cun-chu-qi-xi-tong.md","filePath":"posts/cun-chu-qi-xi-tong.md"}'),i={name:"posts/cun-chu-qi-xi-tong.md"},o=s('<h1 id="存储器系统" tabindex="-1">存储器系统 <a class="header-anchor" href="#存储器系统" aria-label="Permalink to &quot;存储器系统&quot;">​</a></h1><p>想象一下，如果你每天起床后不记得以前发生的事情，不记得自己的名字，那会多么的痛苦，同样计算机处理数据的时候也需要‘记忆’。<br> 早期计算机的记忆媒介是纸条或卡片，就是在纸上钻孔，有孔的为1，无孔的为0。优点是便宜、可靠，缺点就是一次性的，数据写入后无法更改。如果我需要3+2+1的结果，那么我就必须先将3+2的结果写入到纸上，然后再来加1，这种大量临时的数据会造成浪费，于是有人发明了一种延迟线存储器，其存储原理可以概括为在一个管子里面装进水银，在管子的一头装上扬声器发出脉波，另一头装上麦克头接受脉波，脉波在水中从一头到另一头需要时间，这样就可以判断如果有脉波为1，无脉波为0。 <img src="http://images.zhaoshun.org/images/2022/02/28/1646059609.gif" alt="image"> 这类存储器虽然解决了可以重复写入的问题，但在读的时候必须要顺序读取，比如我想要读8位中的最后一位时，我就必须要等前面的7位走完才行。这类存储器统称为顺序型存储器。<br> 后来出现了磁芯存储器、磁鼓存储器、磁带存储器、磁盘存储器。这类存储器的存储原理是利用电改变磁化的方向，比如我要存储1101时，可能就是这样。 <img src="http://images.zhaoshun.org/images/2022/02/28/1646059625.png" alt="image"><br> 现在比较主流的存储器是磁盘存储器，所以主要讲磁盘存储器的工作原理。<br> 磁盘顾名思义，其存储体是圆形也叫盘片，在圆上可以划分出许多个同心圆，每个同心圆叫磁道，在每个同心圆上又可以按照自己的意愿平均划分区域，那么这划分出的区域也叫扇区，我们的数据就存储在这些扇区上面。 <img src="http://images.zhaoshun.org/images/2022/02/28/1646059635.png" alt="image"><br> 比如我每个扇区化为512字节（现在主流划分），一个磁道有4个扇区（我画的5个，为了方便计算就按4个算吧~），一面有5个磁道，一个盘片有正反两面，即这个盘片的存储容量为512<em>4</em>5*2=10KB，这对于现在动不动就上GB的存储容量来说肯定不算大，但没人限制我们只能用1个盘片，于是我们可以将盘片像垒高楼一样垒起来。 这样就形成了类似一个圆柱体一样的形状。 <img src="http://images.zhaoshun.org/images/2022/02/28/1646059644.png" alt="image"> 在每个盘片之间插入一个读写磁头来读写数据，我们可以将每个盘片的位置相同的同心圆（磁道）看成是一个整体形成一个圆柱，比如上图中红色标注的位置就是所有盘片中最外面的磁道构成的一个整体，是逻辑上幻想出来的。我们的数据就是在这个柱面上从上到下依次读写的，比如我要存储01010，那么有可能就是按照上图中的来存储的。这样我们就可以在构成的存储器中随机的进行读写（前提的这个位置没有被占用，不然的话会覆盖掉其他重要的数据)，这类存储器统称为随机访问存储器！</p>',2),r=[o];function n(c,g,m,h,_,p){return e(),a("div",null,r)}const d=t(i,[["render",n]]);export{l as __pageData,d as default};