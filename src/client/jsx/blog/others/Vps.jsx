import React from "react";
import PrismCode from '../../feature/Prism.js'

export default class Vps extends React.Component {
  render() {
    return (
      <div>
        <h3>动手租了一个香港Vps服务器</h3>
        <h4>relize the features : config my blog&chatroom and my ss to against GFW.</h4>
        <PrismCode lang='vim'>{`
          /root> ping penlh.com

          正在 Ping penlh.com [43.239.158.182] 具有 32 字节的数据:
          来自 43.239.158.182 的回复: 字节=32 时间=19ms TTL=54
          来自 43.239.158.182 的回复: 字节=32 时间=20ms TTL=54
          来自 43.239.158.182 的回复: 字节=32 时间=22ms TTL=54
          来自 43.239.158.182 的回复: 字节=32 时间=17ms TTL=54

          43.239.158.182 的 Ping 统计信息:
              数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
          往返行程的估计时间(以毫秒为单位):
              最短 = 17ms，最长 = 22ms，平均 = 19ms
        `}</PrismCode>
        <p>average of 20ms. tha's great.it cost me 6.8$/mo to render this vps server.only with this server details. <a target="_blank" href="https://www.gigsgigscloud.com/">gigsgigscloud</a></p>
        <p>my Server you can refer or buy as same as me.~!</p>
        <PrismCode lang='json'>{`
          {
            "Bandwidth"   :     "300GB",
            "Disk Space"  :     "20GB",
            "Memory"      :     "512MB",
            "CPU Cores"   :     "1 CPU(s)",
            "OS Template" :     "Ubuntu 14.04 (64bit)"
          }
        `}</PrismCode>
        <p>above step your can got a vps server.then. first open your CMD <code>ping yourIp</code>,to check whether this server good or bad,just saw the **ms .with this lower and better. okay,if this is less than 100ms.it got better .and then your can reader the below article.found that how to improve your ss.</p>
        <p>okay ! thats ok .</p>
        <p>oh yeah~</p>
        <p>suggest your to set the Ubuntu system. your should install the socket.ok iam so lazy so that your can google how to install ShadowSocks. oh i copy to here. <a target="_blank" href="https://www.diycode.cc/topics/738">键盘男</a></p>
        <p>run that in your xshell*,if your can use putty or xshell to connect your vps server</p>
        <p>run below words</p>
        <PrismCode lang='nginx'>{`
          wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
          chmod +x shadowsocks-all.sh
          ./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
        `}</PrismCode>
        <p>choose one of (Python、R、Go、libev),i choose Go</p>
        <PrismCode lang='vim'>{`
          Which Shadowsocks server you'd select:
          1.Shadowsocks-Python
          2.ShadowsocksR
          3.Shadowsocks-Go
          4.Shadowsocks-libev
          Please enter a number (default 1):
        `}</PrismCode>
        <p>if successful install ,you'll got it below.</p>
        <PrismCode lang='vim'>{`
          Congratulations, Shadowsocks-Go server install completed!
          Your Server IP        :  45.32.73.59
          Your Server Port      :  8989
          Your Password         :  teddysun.com
          Your Encryption Method:  aes-256-cfb

          Welcome to visit: https://teddysun.com/486.html
          Enjoy it!
        `}</PrismCode>
        <p>above here ,your success install shadowsocks-server, below page i will tell your how to install shadowsocks-client. <a target="_blank" href="https://github.com/shadowsocks/shadowsocks-windows/releases">shadowsocks</a>.Just downloads it.</p>
        <img src="https://upload-images.jianshu.io/upload_images/1359048-953d8d293c71f2ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="shadowsocks setting example"/>
        <p>if your use android download it <a target="_blank" href="https://github.com/shadowsocks/shadowsocks-android/releases">shadowsocks-android</a>,with the same settings of windows client.</p>
        <h4>to be Advancer</h4>
        <p>use Google BBR algorithm to improve your speeds of ss.</p>
        <PrismCode lang='nginx'>{`
          wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
          chmod +x bbr.sh
          ./bbr.sh
          # copy && run it;
          lsmod | grep bbr
          # if you got tcp_bbr modules if successful get it.
        `}</PrismCode>
        <p>TCP BBR want you have Linux cure4.1 or upper.if it told you your core is lowwer. run below.</p>
        <PrismCode lang='nginx'>{`
          # 使用root用户登录，运行以下命令：
          wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
          chmod +x bbr.sh
          ./bbr.sh

          uname -r
          # if it is 4.13 your got it

          # if your is Centos
          yum --enablerepo=elrepo-kernel -y install kernel-ml kernel-ml-devel
          # if Centos6
          sed -i 's/^default=.*/default=0/g' /boot/grub/grub.conf
          # if Centos7
          grub2-set-default 0
          # if Debian/Ubuntu system
          dpkg -i linux-image-4.12.4-041204-generic_4.12.4-041204.201707271932_amd64.deb
          /usr/sbin/update-grub
          # ok then your can up level your system to 4.13+   ,if not Google with how to upper linux core to 4.13
        `}</PrismCode>
        <p>ok ,your can found that you can open Youtube with 4K Video or FaceBook with fast speed!</p>
        <p>run <code>vim /etc/shadowsocks-go/config.json</code>, refer to my config. or just copy it .</p>
        <PrismCode lang='json'>{`
          {
            "server":"0.0.0.0",
            "local_port":1080,
            "port_password": {
              "8989":"8989",
              "8990":"8990"
            },
            "method":"aes-256-cfb",
            "timeout":300
          }
        `}</PrismCode>
        <p>run <code>/etc/init.d/shadowsocks-go restart</code> to restart your shadowsocks.</p>
        <p>you can use 8989 port and your friend can use 8990 port.try it.</p>
        <h3>how to setting your personal blog && production in vps.</h3>
        <h4>nginx~V13.6</h4>
        <p>read this page i'm too lazy to write&&copy it <a href="https://sb.sb/centos-install-nginx/">CentOS 7.x / RHEL 7.x 下编译安装最新版 Nginx</a>,so do Ubuntu&&CentOS.</p>
        <p>use node V8.8.1 i'm too lazy to write&&copy it <a target="_blank" href="nvm.sh">nvm</a></p>
        <PrismCode lang='vim'>{`
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
              ||
              \\\/
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
              ||
              \\\/
        nvm install node
              ||
              \\\/
            node -v
            //v8.8.1
              ||
              \\\/
        npm install yarn
             yarn
         yarn add pm2
        pm2 start app.js
        `}</PrismCode>
        <p>throw <code>ip.ip.ip.ip:yourport</code> to your browser url. if your open your page your got it.</p>
        <p>then buy a domain (if your in china your should Domain name filing). and set DNS <code>www::::your ip::::default setting</code>,then the domain <code>www.domain.com</code> is point to your server</p>
        <p>just setting nginx ,let <code>www</code>Subdomain point to your personal port.</p>
        <p>just refer my article <a target="_blank" href="/others">nginx setting</a></p>
      </div>
    )
  }
}
