const config = require ('../../../config/project');
const { getKoaUrl } = require('../utils/get.js');
const { sleep } = require('../utils/async.js');
const puppeteer = require('puppeteer');


// const aliyun = 'https://account.aliyun.com/register/register.htm';
// const alipay = "https://memberprod.alipay.com/account/reg/index.htm";
// const taobao = "https://reg.taobao.com/member/reg/fill_mobile.htm";
// const tudou = "https://www.tudou.com";
// const zhihu = "https://www.zhihu.com/#signin"
// const design = "http://90sheji.com";
//超过次数要图片识别。。
// const ruanmei = "https://my.ruanmei.com";

//图片验证，我做不来
// const qiniu = "https://portal.qiniu.com/signup?type=1";
// const baidu = "https://www.baidu.com";

//ok
const kitchen = "http://m.haichufang.com/login.html";
const surong = "http://www.surong360.com/SR360/application/user/emailRegisterPage.do";
const youku = "https://www.youku.com";
const gitter = "https://gitter.im/FreeCodeCamp/chinese";
const gitterChinese = "https://gitter.im/FreeCodeCamp/chinese/~chat";
const gitterPeng = "https://gitter.im/pengliheng1992/Lobby";

const urls = [
	// {
	// 	name: "kitchen",
	// 	url: kitchen
	// },
	// {
	// 	name: "surong",
	// 	url: surong
	// },
	// {
	// 	name: "youku",
	// 	url: youku
	// },
	{
		name:"gitter",
		url: gitterPeng
	}
]
const {
	chromium,
	canary
} = config;

exports.getCode = async (ctx,next) => {
	let phone = getKoaUrl(ctx).query.split('=')[1] || config.phone
	const browser = await puppeteer.launch({
		//想要代码运的好，还得首选金丝雀
		executablePath: canary,
		timeout: 0,
		headless:false,
		slowMo: 50
	});
	const page = await browser.newPage();
	urls.map(async e => {
		await page.goto(e.url);
		// debug tools
		await page.evaluate(() => {
			window.addEventListener('mousemove', e => {
				try {
					const div = document.createElement('div');
					div.style.width = '5px';
					div.style.height = '5px';
					div.style.borderRadius = '50%';
					div.style.backgroundColor = 'red';
					div.style.position = 'absolute';
					div.style.left = e.x + 5 + 'px';
					div.style.top = e.y + 5 + 'px';
					div.style.zIndex = "99999";
					document.body.appendChild(div);
				} catch (err) {
					console.error(err);
				}
			});
		});
		if(e.name == 'gitter'){
			
			await page.setViewport({
				width :1600,
				height :0
			})

			// //gitter page
			const iframe = await page.frames().find(f => f.name() === 'content-frame');
			await iframe.evaluate(()=>{
				window.addEventListener('mousemove', e => {
					try {
						const div = document.createElement('div');
						div.style.width = '5px';
						div.style.height = '5px';
						div.style.borderRadius = '50%';
						div.style.backgroundColor = 'red';
						div.style.position = 'absolute';
						div.style.left = e.x + 5 + 'px';
						div.style.top = e.y + 5 + 'px';
						div.style.zIndex = "99999";
						document.body.appendChild(div);
					} catch (err) {
						console.error(err);
					}
				});
			})
			const button = await iframe.$('footer a')
			await button.click();
			let github = await iframe.$('.login-view__buttons > a.button-github--small')
			await github.click('top')

			// //github page
			await page.waitFor('input[name=login]')
			await page.waitFor('input[name=password]')
			let name = await page.$('input[name=login]')
			let password = await page.$('input[name=password]')
			await name.type('penglih');
			await password.type('ewqewq123');
			await page.keyboard.press('Enter');
			
			//back to gitter
			await page.setViewport({
				width :1600,
				height :0
			})

			// type puppeteer
			await page.waitFor('#content-frame')
			await sleep(1000)
			
			const frame = await page.frames().find(f => f.name() === 'content-frame');
			await frame.evaluate(()=>{
				window.addEventListener('mousemove', e => {
					try {
						const div = document.createElement('div');
						div.style.width = '5px';
						div.style.height = '5px';
						div.style.borderRadius = '50%';
						div.style.backgroundColor = 'red';
						div.style.position = 'absolute';
						div.style.left = e.x + 5 + 'px';
						div.style.top = e.y + 5 + 'px';
						div.style.zIndex = "99999";
						document.body.appendChild(div);
						setTimeout(() => {
							div.remove()
						}, 1000);
					} catch (err) {
						console.error(err);
					}
				});
			})
			
			await frame.waitFor('#chat-container .chat-item')

			//键入字母'r'
			// for (let i = 0; i < 20; i++) {
			let i = 0;
			while(true){
				i++
				// const frame = await page.frames().find(f => f.name() === 'content-frame');
				
				let textarea = await frame.$$('textarea');
				await textarea[0].type(`${i} (node:5368) UnhandledProm UnhandledProm`);
				await sleep(30)
				await page.keyboard.down('Control');
				await sleep(30)
				await page.keyboard.press('Enter');
				await sleep(10)
				await page.keyboard.up('Control');
				
				
				await sleep(1999)

				//获取可删除的按钮数组
				let reback = await frame.$$('#chat-container .isViewers .icon-ellipsis');
				await reback[0].click('middle')
				await sleep(2000)
				
				await frame.waitFor('.js-chat-action-delete');
				let deleteMsg = await frame.$$('.js-chat-action-delete');
				await deleteMsg[0].click('middle')
				
				await sleep(2001)
				
			}
		}



		if (e.name == 'kitchen') {
			let login = await page.$('input[name=phone]')
			await login.type(phone)
			let button = await page.$('.login-reg-right')
			await button.click()
		}

		if (e.name == "youku") {
			const login = await page.$("#qheader_login")
			await login.click()
			await page.waitFor('div[id=YT-loginFramePop]');
			const msg = await page.$("#YT-showMobileLogin-text")
			await msg.click()
			const phoneInput = await page.$("input[name=YT-mAccount]")
			await phoneInput.type(phone)
			const button = await page.$("button[id=YT-getMobileCode]")
			await button.click()
		}

		if (e.name == "surong") {
			const sms = await page.$('input[name=sms]');
			const verifyTap = await page.$('#verificationCodeSpanId')
			await sms.type(phone)
			await page.keyboard.press('Tab');
			await page.keyboard.type('ewqewq');
			await page.keyboard.press('Tab');
			await page.keyboard.type('ewqewq');
			await page.keyboard.press('Tab');
			await page.keyboard.type('我叫puppteer');
			await page.keyboard.press('Tab');
			await verifyTap.click()
		}
		await page.deleteCookie();
		await page.screenshot({ path: `${e.name}.png`, fullPage: true });
		await browser.close();
	})
	ctx.body = {
		phone,
		chromium,
		urls
	}

}
