const axios = require('axios');

exports.getCode = async (ctx) => {
  const query = ctx.request.body;
  const queryFunc = async data => new Promise((resolve, reject) => {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      headers: {
        Authorization: `bearer ${process.env.access_token}`,
        'Content-Type': 'application/json',
      },
      data,
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
  ctx.body = await queryFunc(query);
};
