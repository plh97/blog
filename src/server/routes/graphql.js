const axios = require ('axios')
const path = require ('path')
const config = require(path.resolve("./config/project.js"))
exports.getCode = async(ctx,next) => {
	let query = ctx.request.body;
	let queryFunc = async data =>{
		return new Promise((resolve,reject)=>{
			axios({
				url: `https://api.github.com/graphql`,
				method: 'post',
				headers: {
					'Authorization': `bearer ${config.githubToken}`,
					'Content-Type': 'application/json'
				},data
			}).then(res => {
				resolve(res.data)
			}).catch(err => {
				reject(err)
			});
		})
	}
	ctx.body = await queryFunc(query)
}