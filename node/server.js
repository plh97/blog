// 一些依赖库
let http = require("http"),
    url = require("url"),
    fs = require("fs"),
    request = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
 
let ep = new eventproxy(),
    urlsArray = [], //存放爬取网址
    pageUrls = [],  //存放收集文章页面网站
    count = 1,  	//计数器
    html = '',  	//save html
    pageNum = 10;  	//要爬取文章的页数
 
for(let i=1 ; i<= pageNum ; i++){
	pageUrls.push('https://cnodejs.org/?tab=all&page='+i);
}
// 主start程序
function start(){
	http.createServer(function (req, res){
		res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
		res.write("<center><h1> CNode 社区（国内最专业的 Node.js 开源技术社区）</h1></center>")
		for (let i = 0; i < pageUrls.length; i++) {
			// 触发结果事件
			console.log('第'+i+'页')
			fs.writeFile('input.html', '<center><h1> CNode 社区（国内最专业的 Node.js 开源技术社区）</h1></center>\n', {'flag':'w'} , function(err,data){
				//读取文件失败/错误
				if(err){
					throw err
				}
				console.log('Saved.')
			})
			request
				.get(pageUrls[i])
				.end(function(err,pres){
					if(pres.ok){
						let $ = cheerio.load(pres.text)
						let curPageUrls = $('.cell .topic_title')
						let imgUrls = $('.cell .pull-left img')
						for (let j=0;j<=curPageUrls.length-1;j++) {
							let articleTitles = curPageUrls.eq(j).attr('title');
							let articleUrls = "https://cnodejs.org"+curPageUrls.eq(j).attr('href');
							urlsArray.push({
								title:articleTitles,
								url:articleUrls,
								imgUrl:''
							});
						}
						for (let j=0;j<=imgUrls.length-1;j++) {
							urlsArray[j].imgUrl = imgUrls.eq(j).attr('src');
						}
					}
					// console.log(urlsArray)
					res.write("<h1>第"+(i+1)+"页</h1>")
					html+="\n<h1>第"+(i+1)+"页</h1>\n"
					count=count+1
					for (let j = 0; j <= urlsArray.length - 1; j++) {
						res.write('标题：<img width="30px" src="'+urlsArray[j].imgUrl+'"/>')
						html += '\n标题：<img width="30px" src="'+urlsArray[j].imgUrl+'"/>\n'
						res.write('<a target="_blank" href="'+urlsArray[j].url+'">'+urlsArray[j].title+'</a><br/><br/>')
						html += '\n<a target="_blank" href="'+urlsArray[j].url+'">'+urlsArray[j].title+'</a><br/><br/>\n'
					}
					urlsArray=[]

					fs.writeFile('input.html', html, {'flag':'a'} , function(err,data){
						//读取文件失败/错误
						if(err){
							throw err
						}
						console.log('Saved.')
					})
					html = ''
				})
		}
	}).listen(3000);
	console.log("localhost:3000");

	// fs.readFile('input.html', 'utf-8', function(err,data){
	// 	//读取文件失败/错误
	// 	if(err){
	// 		throw err
	// 	}
	// 	console.log(data.toString())
	// })
}
exports.start = start;