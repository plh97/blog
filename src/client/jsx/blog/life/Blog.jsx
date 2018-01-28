import React, { Component } from "react";
import { Row, Col } from 'antd';

export default class realEstate extends Component {
	render() {
		return (
			<Col span={24}>
				<h3>10月21日，星期三的一个晚上</h3>
				<h4>关于github-pages的个人博客的如何上线</h4>
				<p>经历了几天晚上的奋斗终于成功上线了我的个人博客，闲话不多说<br />下面放上我的<br /><a href="https://github.com/pengliheng/pengliheng.github.io" target="_blank">源码地址</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://pengliheng.xyz" target="_blank">个人域名</a></p>
				<p>首先要有自己的个人域名，在阿里云服务器上购买一个个人域名<br /><a href="http://wanwang.aliyun.com/domain/searchresult/?keyword=pengliheng&suffix=.com" target="_blank">阿里云域名购买</a></p>
				<p>类似一排排域名购买，花一个8元足够买一个pengliheng.xyz的域名，当你购买以后,可以点击<br /><a href="http://netcn.console.aliyun.com/core/domain/list" target="_blank">域名管理</a><br />进入下面的页面。</p>
				<p>记得一定要修改成一样的内容。接下来，首先打开<a href="https://www.dnspod.cn/Domain" target="_blank">DNSPOD</a>，接着注册一个帐号</p>
				<p>点击你的域名进入到下面的图片</p>
				<p>看到下面有四条记录，中间两条是自带的，前篇内容在aliyun弄过了，就是为了让aliyun的域名管理转到DNSPOD里面</p>
				<p>第一条：记录值里面的ip值是通过cmd获取的，这首先需要你用注册一个github个人帐号，然后获取你的github个人二级域名，<a href="https://pengliheng.github.io" target="_blank">pengliheng.github.io</a>类似于我这种(在后面篇幅会详细介绍如何弄自己的github-pages，github二级域名)，下面打开你本定的cmd文件</p>
				<p>将输入后获取的红色框内的ip地址放到dnspod里面的第一条的记录值里面，第二条，第三条是自带的，不需要弄，第四条需要设置，记录值是自己github个人博客的网址，接下来需要在自己的项目里面放入一个CNAME的文件，不带后缀的，然后记事本打开文件，在里面输入你的个人域名</p>
				<p>CNAME文件放在项目的根目录上面</p>
				<p>就这样，个人域名的指向终于搞成了，</p>
			</Col>
		)
	}
}
