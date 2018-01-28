/**
 * Created by axetroy on 17-6-12.
 */


const axios = require ('axios')

exports.getCode = function (query = '') {
	console.log(query);
	
	return function () {
		return axios.post(
			`https://api.github.com/graphql`,
			{ query },
			{headers: {
				Accept: 'application/json;charset=utf-8',
				Authorization: `bearer ${atob(
					'M2ZkYmU2ZmY1NjlhYTlmMzNhYzVhYjJmODRjZWUxY2Q1YzdkNjE5Zg=='
				)}`
			}}
		);
	};
}
