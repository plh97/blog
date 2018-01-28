const rp = require('request-promise');
const cookie = require('cookie');
const User = require('../models/User.model');
const Token = require('../models/Token.model');
const Group = require('../models/Group.model');
const config = require('../../../config/project');

/**
 * 获取github code的方法
 * @param  {string} access_token
 * @return {async} 
 */

exports.getCode = async (ctx, next) => {
    let redirect_uri = ctx.cookies.get('redirect_uri')
    let code = ctx.request.query["code"];
    let NODE_ENV = process.env.NODE_ENV
    let option = {
        uri: `https://github.com/login/oauth/access_token`,
        qs: {
            client_id: config.githubClientID,
            client_secret: config.githubClientSecret,
            code: code
        },
        json: true
    }
    let tokenResp = await rp(option);
    // console.log('tokenize',tokenize);
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
    ctx.cookies.set('access_token', tokenResp.access_token, {
        'httpOnly': true
    })
    ctx.redirect(redirect_uri)
    await User.save({
        github:userInfo
    });
    await Token.register({
        access_token: tokenResp.access_token,
        user_id: userInfo.id
    })
}
