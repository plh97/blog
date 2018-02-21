const axios = require ('axios')
const path = require ('path')
exports.getCode = async(ctx,next) => {
	let query = ctx.request.body;
	let queryFunc = async data => {
		console.log(
			process.env.TOKEN,data
		);
		return new Promise((resolve,reject)=>{
			axios({
				url: `https://api.github.com/graphql`,
				method: 'post',
				headers: {
					'Authorization': `bearer ${process.env.TOKEN}`,
					'Content-Type': 'application/json'
				},
				data
			}).then(res => {
				resolve(res.data)
			}).catch(err => {
				reject(err)
			});
		})
	}
	ctx.body = await queryFunc(query)
}