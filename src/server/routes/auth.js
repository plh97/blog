const rp = require('request-promise');
const cookie = require('cookie');
const config = require('../../../config/project');

/**
 * 获取github code的方法
 * @param  {string} access_token
 * @return {async} 
 */

exports.getCode = async (ctx, next) => {
    let NODE_ENV = process.env.NODE_ENV

    let tokenResp = "728bfbb7bbf182639d82519e8add763c503ebd76";
    option = {
        uri: `https://api.github.com/user`,
        qs: {
            access_token: tokenResp.access_token
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }
    let userInfo = await rp(option);

}
