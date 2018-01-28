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
    let users = await User.find({});
    users.map((user,i)=>{
        console.log(
            user.github
        );
    })
    ctx.body = users;
}
