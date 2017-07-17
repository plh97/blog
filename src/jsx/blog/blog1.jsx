import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/styles";
import { Grid, Row, Col } from "react-bootstrap";

export default class Blog1 extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "",
      style: androidstudio,
      showLineNumbers: true
    };
  }
  render() {
    return (
        <Grid className="container-context">
          <Col sm={12} id="16">
            <h3>关于货币贬值</h3>
            <p>很感慨，根据本人粗浅短显的认知</p>
            <p>为什么这么多人炒房。从最开始的盈利目的，到现在，仅仅是为了防止手头上的钱贬值而买房。</p>
            <p>现在房子涨价这么快速，还是很多人买，国家各种政策限购，限卖，可能手头上的房买了以后再也无法卖出去，但还是很多人去买(ru)房(keng)</p>
            <h5><b>出于对货币的不信任</b></h5>
            <p>货币贬值已经成为大家公认的事实。为了将手头上的金钱贬值风险转移出去，不得不投资，</p>
            <p>国家大量发行货币导致货币贬值，中国为什么大量发行货币，因为美国在不停发行货币，中国如果不发行更多的人名币，那就是傻子，财富被美国掠夺过去了。国家与国家之前处于竞争关系！</p>
            <p>这种情况下遭殃的首先便是手头上有大量现金存银行的老百姓了，这种中心化的货币，权利掌握在国家手上</p>
            <p>房屋，某种程度上，土地资源是有限的，所以不是国家向发行多少套房就能发行的，所以大家注入资金到房屋上面，房屋也成了资金的蓄水池，但是国家干预日益严重，限买限卖，于是比特币开始火了，以及其他各种附加币，狗狗币莱特币，元宝币等等等...</p>
            <h5><b>先说说比特币</b></h5>
            <p>国家无法操控比特币发行量，但是这种国家无法掌控的东西，一开始是拒绝的，几年前，国家开始承认他的存在了，因为他的力量日益强大，现在2w一个比特币，从最早的现金交易，到银行转账汇款，到支付宝微信付款，但是这些都需要进过银行，那么比特币诞生了，人与人之间的金钱交易不用经过银行，我觉得这是必然趋势，中间省略了一个过程，进化的必然产物，炒股，中心化的东西，受到国家控制，所以，股票其实就是国家在吸收闲散资金，偏远山区一直是只收现金，二线城市支持支付宝，微信支付，数字货币，那么在网络上出现了一个厉害的黑客，永恒之蓝，只接受比特币付款，因为网络永远比现实之中要先进，网络的进化速度远大于现实之中，为什么要比特币付款，因为他利用黑客技术盗窃他人资料，违法，所以不能支持银行付款，因为银行是实名制的，会暴露他的身份，比特币不一样，这个不会暴露他的身份，所以要用比特币，总之一句话，财富的总量是稳定随着人类的进步缓慢增长，但财富不再等于现金，因为现金受到国家的干预，大批量发行，但是它暂时可以是一线城市房产，因为虽然建造技术在进步，成本在降低，但是一线城市的土地资源永远是短缺的，二线城市一下就算了，土地资源无限大，建筑成本无限降低。二线城市房产将进一步贬值，太空空间资源就算了，地球内部土地资源都没用完，不用说外太空了</p>
            <p>还是避避嫌，如果比特币失败了，那么类似比特币的东西一定会火起来。完了！</p>
          </Col>
          <Col sm={12} id="15">
            <h3>关于买二手房</h3>
            <p>最近买房真的是操心！</p>
            <p>首先我觉得还是有必要普及一下新知识，买房分为4中情况，</p>
            <ul>
              <li>你全款买，业主贷款已还清或者没有贷款</li>
              <li>你贷款，业主贷款已还清</li>
              <li>你全款买，业主在银行贷款有贷款</li>
              <li>你贷款买，业主在银行贷款有贷款</li>
            </ul>
            <p>当然了，还有最重要一件事情没做，<b>查档</b>，查看业主房子有没有被法院查封，第二，<b>查看房屋所有人姓名</b>，房产证上面有几个人，就要有几个人在购房合同上面签字，这个很重要，因为如果业主是房屋共有人的话，他是没有权利处理不属于他那一部分的财产，不然<b>合同无效</b>。</p>
            <p>那么先说一下第一种情况，最简单，资金交给<b>银行监管</b>，或者房管局监管，或者先公证，到时候可以不需要业主到现场，自己一个人去房管局都可以过户，几百元而已，不是按照房屋价值百分比收费的，只要一过户，银行自动将监管账户中的钱划扣给业主，切忌先打钱后过户，因为过户会遇到很多因素导致无法过户，比如说业主房子被查封导致无法过户，或者国家政策改了，今天无法过户，等等..,如果一套房子全款100w，那么业主当时可能是愿意过户，但是过了一个晚上就很难说了，20w人家可能还会怕担法律责任，100w他就敢冒杀头的风险。</p>
            <p>第二种情况，也是和第一种，业主风险稍稍大一点，因为只给了首付就要过户给你，先去银行办理贷款手续，银行同贷书下来后给业主看，买家把首付30w给业主，业主过户给你，你拿房产证到银行办理抵押贷款</p>
            <p>第三种情况，比较复杂，业主自己赎楼就好办，等消息，担保公司帮忙赎楼也好办，坐等流程，一般是3000元，最差的情况，业主或者中介提议你的首付款先给业主，业主拿首付款去赎楼，银行走流程1个月后解除抵押，再去房管局办理过户手续，这是对卖家最不利的一种情况，首付款给了，但是房子没有过户到你名下，也没有公证，只是在中介公司见证下办理的手续，这也是笔者现在经历的一种情况，还好找的是一个大的中介公司Q房网，和业主签订了一个购房垫子协议，其中最重要一条，如果违约，业主承担房价30%的赔偿金，有了这一条重算能睡好觉了，要知道中国法律对于我这样的法盲来说，很陌生！诉讼费，律师费，流程，证据收集，很麻烦，而且还要要求中介配合出席证人，中介会不会趁机要你先给中介费还很难说，毕竟是求人。不过有钱任性哈哈！</p>
            <p>第四种情况，和第三种差不多，买房人穷一点，业主没那么早拿到钱，这个是中国大多数人买房所经历的流程，毕竟现在房价这么高，谁特么这么有钱全款买房，只有老人家才全款买，年纪大银行不批贷款吧。。。现在银行也穷。这也是笔者现在经历的买房流程，哎没钱不能任性，<b>不爽！</b></p>
            <p>综上所述</p>
            <ul>
              <li>如果第一次买房还是找中介吧，找家大公（q房网，家家顺，链家，自己去网上查查，开了100+分店差不多了），给点钱别人赚，虽然中间经常吃差价，中介费3%太高（其实可以讲价），但毕竟一分钱一分货，</li>
              <li>签合同尽量看清楚条款，不要以为是标准模板合同就不看，一样很多坑，中介费过户时候给，事情没办完收什么钱</li>
              <li>切忌首付款帮业主赎楼，房管局明确禁止这种交易流程的，当然中介不会告诉你，中介只需要成交！成交！成交！</li>
              <li>现在房价疯涨，各种限购政策，业主频频反价，不要被利益冲昏了眼，房子是拿来住的！！！！！！！！！！</li>
              <li>明确规定中介责任义务，一般模板合同里面所有条文都是对中介有利的，给钱尽量通过中介给钱，这样打官司中介很难摆脱嫌疑，如果房子不是因为买家原因无法成交，买家拒绝给中介费，开玩笑，几万块钱这么容易捞？</li>
              <li>赔偿金的问题，可以和业主约定为房价20%，这样很多胆小的业主不敢冒风险违约的，</li>
              <li>业主夫妇最好两个人一起到现场签字，因为房子可能是业主一个人的名字，但是！婚后购买的财产属于夫妻共同财产，你觉得他老婆有没有问题？</li>
              <li>看房要多看，至少看100套，看准了以后下定金要下的快，这里笔者就是因为看房看得少，被利益冲昏了头脑，当天看房当天签合同...呜呜呜呜呜</li>
            </ul>
            <p>最后说一句，能买还是早点买，卖房是为了把手上的房子套现，不然不用卖，尽量多贷款，拉上银行和你一起承当买房风险，好一些</p>
            <p>前几天听到房管局有人跳楼，100w买房款给了业主，结果在房管局过户的时候，发现房子被查封，卖房的跑路了，买房人跳楼</p>
            <p>注意了，房管局严令禁止首付款帮业主赎楼，不要用别人的错误，不道德来伤害自己。</p>
            <p>仔细分析，100w买房，肯定是全款买房，全款买房还不走银行监督流程，这不是胡闹，买房人是有问题的，什么都不懂买个西瓜洗洗睡去吧，然后大批看热闹人看热闹，然后大批中介发朋友圈，这就是绕开中介的后果！很多中介素质超低</p>
            <p>像我这没买过房子的，还去了家家顺，创二地产混了一个月，培训了3天才弄懂买房基本流程，中介是如何怂恿业主成交，只说好消息，不说差消息，先看最好的房，再看最差的房子，然后再看适合的房子，形成价格心理落差，达成交易，鼓励多和盘方合作，公司抽成50%，剩下的合作人分！</p>
            <h5>好了8:27了。我要去上班！</h5>
          </Col>
          <Col sm={12} id="14">
            <h3>配置本地后端环境wamp(PHP+Apache+MySQL)+memcache+rewrite vhost（我的机子是win7_64位系统）</h3>
            <p>首先，第一步下载一个<a href="http://sourceforge.net/projects/wampserver/files/WampServer%202/WampServer%202.2/wampserver2.2e/wampserver2.2e-php5.4.3-httpd2.2.22-mysql5.5.24-x64.exe/download">wampserver2.2</a>(不要下载2.4或者2.5这些高版本,不然以后你想用手机端调试用速度会超慢的)，下载好以后安装在如下路径:D:\Program Files (x86),然后下载我已经配置好的<a href="any-soft/wamp.zip">文件</a>，打开，进入到如下画面。</p>
            <img src="./images/wampzip.png" />
            <p>后两个文件放在：D:\Program Files (x86)\wamp\bin\php\php5.4.3\ext的路径，然后查看你的本机ip</p>
            <img src="./images/benjiip.jpg" />
            <p>然后重启wampserver，直到显示 <img style={{ display: "inline"}} src="./images/lvsewampserver.jpg"/>,如果你的图标是黄色或者红色，就是说名Apache或者MySQL没有成功开启，如果是Apache没成功开启，可能是80端口被占用，打开控制面板，服务，里面关闭那个占用80端口的服务，然后在开启Apache就可以了，还剩下最后两个步骤，一个是打开你刚才复制进去的httpd-vhosts.conf文件，</p>
            <img src="./images/httpd-vhost.jpg"/>
          </Col>
          <Col sm={12}>
            <p>the last step,我勾上的那些全部要勾上。最上面还有一个php_curl要勾上。</p>
            <img src="./images/php_extend.jpg" />
            <p>最后打开C:\Windows\System32\drivers\etc的hosts文件，在里面加上一句话127.0.0.1 www.zunar.com.cn，就大功告成啦。本地环境已经配置好了。，如果你是32位的系统，请下载32位的wampserver，然后php_memcache.dll文件也要下载对应的32位文件。</p>
          </Col>
          <Col sm={12} id="13">
            <h3>检测是手机端访问本页面还是pc端<i className="icon-mobile-phone"></i></h3>
            <p>先来一首安静的音乐</p>
            <p>然而我暂时还不会写，先放一放</p>
          </Col>
          <Col sm={12} id="12">
            <h3>为什么有的人觉得很懂他（她）2015/10/24</h3>
            <p>用你的心去体会对方的心，多聆听，关于动作模仿，当然不是指的真的去做一模一样的动作，心里暗自模范，去体会着别人的心境</p>
            <p>为什么有的人不会聊天，很多时候我们陷入一个误区，认为不会聊天，肯定是话的内容说错了，我想说的是，语言只能表达10%的意思，语气表达出40%的意思，肢体语言表达出50%的意思，说话时候，注意自己的语气是否过于冷淡，为什么你说话的语气总是那么的生硬，说话要带有丰富的情感，这样别人才能喜欢听你说话，关于肢体语言的训练，这个比较难，我还不懂。</p>
          </Col>
          <Col sm={12} id="11">
            <h3>如何去写一个侧边栏滚动动态监听 2015/10/24</h3>
            <p>先来一首安静的音乐</p>
            <p>首先，demo已经写出来了，就在左边，然后就是第一步了，你需要先写静态的html+css代码，用position：fixed将他固定在屏幕左边，然后引入jquery。将下面这段复制到你的代码title的下面，</p>
            <p>&lt;script src="http://1.pengliheng.sinaapp.com/mywy/jQuery-1.10.2/jquery-1.10.2.min.js" type="text/javascript">&lt;/script></p>
            <p>然后你就可以开始写jquery代码了，第一步，固定在屏幕上的那个添加一排有规律的class，用来动态监听你点击的到底是第几个class，</p>
            <img src="./images/slidenavHTML.jpg" />
            <p>然后给你的每一篇内容，也就是那个需要跳转到的div元素，添加一排有规律的id属性，如1到15，总之就是与侧边栏的class属性相对于，之所以弄成1~15是为了将来用for循环更加方便。</p>
            <p>那么接下来就可以写jquery代码了，首先写如何让点击侧边栏，自动跳转到某个div元素</p>
            <img src="./images/QQ截图20151025030302.jpg" />
            <img src="./images/slidenav1.jpg" />
            <SyntaxHighlighter showLineNumbers={this.state.showLineNumbers} language={this.state.language} style={this.state.style}>{`
//获取当前选中的div元素到页面顶部的距离，
$("#"+number_context).offset().top;
//在1秒时间内，让屏幕滚动到指定的高度，用这段代码，很巧妙的获取的当前点击的div元素的属性，从而动态获取某篇文章的高度
$('body,html').animate({scrollTop:context_top-100},1000);
            `}</SyntaxHighlighter>
          </Col>
          <Col sm={12}>
            <img src="./images/slidenav1.jpg" />
            12
          </Col>
          <Col sm={12} id="10">
            <h3>sublime text 3快捷键 2015/10/23</h3>
            <p>首先安装插件，按住ctrl+~，粘贴下面这一段<br/>import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())</p>
            <p>然后按确定，等待几分钟，安装好以后，按住ctrl+shift+p,出现如下图片</p>
            <img src="./images/sdfsdf.jpg" />
            <p>输入Emmet,安装Emmet插件</p>
            <img src="./images/QQ截图20151023200832.jpg" />
            <p>接下来出现按照下面的步骤进行</p>
            <img src="./images/sublime.jpg" />
            <p>输入ul>li*5,,,然后按crtl+e，自动转化成 <img src="./images/sublimedf.jpg" /></p>
            <p>框选一段代码按ctrl+shift+/，便可以更具当前文件自动注释掉当前代码</p>
            <p>将一个文件夹，里面装着各种代码的文件拉入sublime text选择框内，则可出现如下图片，十分方便！</p>
            <img src="./images/QQ截图20151023201455.jpg" />
          </Col>
          <Col sm={12} id="9">
            <h3>plupload图片上传插件如何使用</h3>
            <p>首先下载<a href="https://codeload.github.com/moxiecode/plupload/zip/v2.1.8">plupload</a>插件,将其放入你的项目文件里面。首先引入然后引入<br/>jquery插件<br/>&lt;script src="http://1.pengliheng.sinaapp.com/mywy/jQuery-1.10.2/jquery-1.10.2.min.js" type="text/javascript">&lt;/script></p>
            <p>plupload插件<br/>&lt;script src="/assets/js/modules/plupload/plupload.full.min.min.js?v=20150722">&lt;/script></p>
            <img src="./images/plupload.jpg" />
            <p>红色部分需要添加属于你自己的函数,首先这个插件会将图片上传到后端，然后通过后端传回图片，你通过js调用该图片地址</p>
            <img src="./images/plupload_html.jpg" />
          </Col>
          <Col sm={12} id="8">
            <h3>百度分享如何使用，为你导入更多流量</h3>
            <p>首先打开<a href="http://http://share.baidu.com/code">百度分享</a>，点击直接复制代码，然后打开你的编辑器，直接粘贴，即可在网页中见到效果，步骤如下图：</p>
            <div className="bdsharebuttonbox" style={{ display: "inline" }}>
              <a href="#" className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
              <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
              <a href="#" className="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
              <a href="#" className="bds_renren" data-cmd="renren" title="分享到人人网"></a>
              <a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
            </div>
            <img src="./images/baidu_share.jpg" />
            <img src="./images/baidushare.png" />
            <p>bdtext指的就是所需要分享的文字内容，默认的是title里面的内容</p>
            <p>bdPic指的就是所需要分享的图片，默认的是当前页面的图片，当然也可以指定图片地址。</p>
            <p>bdUrl指的是分享的页面，默认指定当前页面，当然也可以指定其他页面。</p>
            <p>bdSize指的是分享图标的大小，3种尺寸，16,24,32。分别对应大中小尺寸。</p>
          </Col>
          <Col sm={12}>
            <img src="./images/bd-shage.jpg" />
            <p>bdPic，，，导入流量，百度封装好的函数租，任意调用，虽然说，with不是很好！</p>
          </Col>
          <Col sm={12} id="7">
            <h3>关于CoffeeScript使用方法&nbsp;&nbsp;2015/10/23 1:00</h3>
            <p>首先打开<a href="http://coffee-script.org/">coffeescript</a>点击上面的试一试,进入到页面如下图所示</p>
            <img src="./images/coffeescript-try.jpg" />
            <p>首先如何封装一个函数， 只需要输入如下代码 func = ->,将会自动编译成func = function(){}</p>
            <p>如何写for循环， 如图所示，coffeescript将会自动编译成js的代码，至于如何编译可以去下载一个<a href="http://dl1.cr173.com/soft1/koala_setup.zip">koala</a>,里面自带编译coffeescript，以及scss</p>
            <p>关于delegate,(jquery)函数，用delegate绑定click事件，有一个好处就是，当你使用js动态加载出的div，或者其他元素，你想给他们增加绑定事件，这个时候就需要用到delegate了，delegate可以将新添加的div元素也让他们绑定click事件，最好不要使用live，因为在更高版本的jquery中，取消了live。同样道理，coffeescirpt编译成的js代码进过了压缩及优化，大大减小了代码所占内存，大大优化了js加载速度</p>
            <h4>关于学习coffeescript</h4>
            <p>同样道理，js也可以编译成coffeescript，虽然没什么实际意义，但是通过这种方法来学习还是不错滴，网站：<a href="http://js2coffee.thomaskalka.de/#coffee2js">js转coffeescript</a></p>
          </Col>
          <Col sm={12} id="6">
            <h3>关于SCSS使用方法&nbsp;&nbsp;2015/10/23 1:00</h3>
            <p>和css的使用方法几乎一模一样，不过有一个嵌套功能，是的其结构关系更加清晰。下图给出实例，同样可以使用<a href="http://dl1.cr173.com/soft1/koala_setup.zip">koala</a>来进行编译，使其成为压缩的css代码，更加节省内存，更加优化加载速度。</p>
            <img src="./images/scss.jpg" />
            <p>怎么样，看完这么简介优秀的代码，是不是心动了，赶紧使用scss吧，css实在是太繁琐了，下面展示两种代码的对比图，怎么样，是不是觉得css弱爆了，而且很难看懂！</p>
            <img src="./images/scss_css.jpg" />
          </Col>
          <Col sm={12} id="5">
            <h3>关于git 如何连接 github篇</h3>
            <p>$ cd ~/.ssh//检查计算机ssh密钥</p>
            <p>如果没有提示:No such file or directory 说明你不是第一次使用git,执行下面的操作,清理原有ssh密钥</p>
            <p>$ ssh-keygen -t rsa -C "your_email@youremail.com"</p>
            <p>创建一个新的ssh key</p>
            <p>然后会在 .ssh 目录生产两个文件：id_rsa和id_rsa.pub,打开id_rsa.pub，将里面内容复制到github的key里面，具体步骤如下图</p>
            <img src="./images/github goto settings.jpg" />
          </Col>
          <Col sm={12}>
            <img src="./images/github add key.jpg" />
            <p>当即可成功用git链接github了，并且可以成功push你的代码到github上面了！</p>
          </Col>
          <Col sm={12} id="4">
            <h3>git 基本命令使用篇</h3>
            <p>首先，下载<a href="http://dlsw.baidu.com/sw-search-sp/soft/4e/30195/Git_V2.5.1_64_bit_setup.1441791170.exe">git</a>，接着安装,然后新建你的项目文件，进入文件里面，鼠标右键“Git Bash Here”,接着出现以下画面</p>
            <img src="./images/git_init.jpg" />
            <p>输入git init，新建仓库，也可以clone本地仓库，或者远程仓库</p>
            <img src="./images/git_clone.jpg" />
          </Col>
          <Col sm={12}>
            <p>当然，大多数情况是白纸一张，什么也没有，这时候在本地创建好文件</p>
            <p>然后输入以下命令</p>
            <p>git add .</p>
            <p>git commit -am "10/22"</p>
            <p>git push https://github.com/pengliheng/username.github.io.git master。</p>
            <p>这里的地址照着复制，由下图说明，master的话照着输入</p>
            <p>然后输入你的用户名，密码即可成功push上你的github仓库</p>
            <img src="./images/git_address.jpg" />
          </Col>
          <Col sm={12} id="3">
            <h3>github-pages 个人博客篇</h3>
            <p>首先说明，为什么要用github，这个上面的源码全部是公开的，源码一目了然，其二，牛逼的人都在这个网站上开发自己的源码。那么闲话也不多说了，第一步，打开<a href="https://github.com/">github</a>注册一个帐号，建议用谷歌邮箱注册</p>
            <img src="./images/github_first.jpg" />
            <img src="./images/github_create_repository.jpg" />
          </Col>
          <Col sm={12}>
            <p>Repository name的命名方式必须按照：usernamne.github.io的形式来命名，username用你自己喜欢的网址</p>
            <img src="./images/my_github.jpg" />
            <p>接下来就可以进入到一个这样的页面，点击+进入</p>
            <img src="./images/create_index.jpg" />
          </Col>
          <Col sm={12}>
            <p>最后在浏览器输入username.github.io,即可访问你的github个人博客，看到helloworld！</p>
          </Col>
          <Col sm={12} id="2">
            <h3>10月21日，星期三的一个晚上</h3>
            <h4>关于github-pages的个人博客的如何上线</h4>
            <p>经历了几天晚上的奋斗终于成功上线了我的个人博客，闲话不多说<br/>下面放上我的<br/><a href="https://github.com/pengliheng/pengliheng.github.io" target="_blank">源码地址</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://pengliheng.xyz" target="_blank">个人域名</a></p>
            <p>首先要有自己的个人域名，在阿里云服务器上购买一个个人域名<br/><a href="http://wanwang.aliyun.com/domain/searchresult/?keyword=pengliheng&suffix=.com" target="_blank">阿里云域名购买</a></p>
            <img src="./images/yumingbuy.jpg" />
            <p>类似一排排域名购买，花一个8元足够买一个pengliheng.xyz的域名，当你购买以后,可以点击<br/><a href="http://netcn.console.aliyun.com/core/domain/list" target="_blank">域名管理</a><br/>进入下面的页面。</p>
          </Col>
          <Col sm={12}>
            <img src="./images/yuming_manage.jpg" />
            <img src="./images/dns_change.jpg" />
            <p>记得一定要修改成一样的内容。接下来，首先打开<a href="https://www.dnspod.cn/Domain" target="_blank">DNSPOD</a>，接着注册一个帐号</p>
            <img src="./images/dnspod_add.jpg" />
          </Col>
          <Col sm={12}>
            <p>点击你的域名进入到下面的图片</p>
            <img src="./images/dnspod_change.jpg" />
            <p>看到下面有四条记录，中间两条是自带的，前篇内容在aliyun弄过了，就是为了让aliyun的域名管理转到DNSPOD里面</p>
            <p>第一条：记录值里面的ip值是通过cmd获取的，这首先需要你用注册一个github个人帐号，然后获取你的github个人二级域名，<a href="https://pengliheng.github.io" target="_blank">pengliheng.github.io</a>类似于我这种(在后面篇幅会详细介绍如何弄自己的github-pages，github二级域名)，下面打开你本定的cmd文件</p>
            <img src="./images/cmd.jpg" />
            <p>
              将输入后获取的红色框内的ip地址放到dnspod里面的第一条的记录值里面，第二条，第三条是自带的，不需要弄，第四条需要设置，记录值是自己github个人博客的网址，接下来需要在自己的项目里面放入一个CNAME的文件，不带后缀的，然后记事本打开文件，在里面输入你的个人域名
            </p>
            <img src="./images/cname.png" />
          </Col>
          <Col sm={12}>
            <p>CNAME文件放在项目的根目录上面</p>
            <img src="./images/my_production.jpg" />
            <p>就这样，个人域名的指向终于搞成了，</p>
          </Col>
          <a id="1" href="Thinkphp.html">
            <div className="col-sm-12">
              <h3>Thinkphp分享会</h3>
              <ol>
                <li>think安装</li>
                <li>think目录下的文件及文件夹分别代表的含义</li>
                <li>Volist循环标签使用方法</li>
                <li>Foreach循环标签使用方法</li>
                <li>IF标签使用方法</li>
              </ol>
            </div>
          </a>
          <Col sm={12}>
            <h3>github-pages</h3>
            <ol>
              <li>个人博客的必要性</li>
              <li>github帐号注册</li>
              <li>git的使用方法及代码上传</li>
              <li>github-pages的优点及缺点</li>
              <li>个人域名及博客的上线</li>
            </ol>
          </Col>
        </Grid>
    );
  }
}
