//apk
const fs = require('fs-extra')
const rp = require('request-promise');
const path = require('path')
const cookie = require('cookie');
const promise = require('bluebird');
const streamBuffers = require('stream-buffers');

// local
const User = require('../models/User.model');
const Token = require('../models/Token.model');
const Group = require('../models/Group.model');
const config = require('../../../config/project');
const uploadFile = require('../utils/qiniu.js');
const {
	getType
} = require('../utils/mimes.js');

/**
 * 获取github code的方法
 * @param  {string} upload file
 * @return {async} 
 */

exports.getCode = async (ctx, next) => {
	if ('POST' != ctx.method) return await next();
	let { images } = ctx.request.body.files;
	if(!images.length){
		images = [images]
	}
	ctx.body = await new promise.all(await images.map(async(image,i) => {
		let ext = getType(image.type)
		let name = `${Math.random().toString().replace(/0./,'')}.${ext}`
		let newpath = path.resolve(`./public/${name}`);
		let topath = fs.createWriteStream(newpath);
		let stream = await fs.createReadStream(image.path).pipe(topath)
		return await new promise((resolve, reject) => {
			stream.on('finish',async()=>{
				let callback = await uploadFile(name, newpath)
				resolve({
					name: callback.key,
					url: callback.url
				})
			})
		})
	}))
}
