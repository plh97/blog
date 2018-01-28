/**
 * Created by axetroy on 17-6-12.
 */


const axios = require ('axios')

exports.getCode = async(ctx,next) => {
	let query = ctx.request.body;
	let queryFunc = async query =>{
		return new Promise((resolve,reject)=>{
			axios.post(
				`https://api.github.com/graphql`,{ query },
			).then(res=>{
				console.log(res);
				resolve(res)
			})
		})
	}
	ctx.body = await queryFunc(query)
}
