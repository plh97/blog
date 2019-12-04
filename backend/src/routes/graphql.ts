import axios from 'axios'

// 缓存
const cache = new Map()
const Graphql = async (ctx:any) => {
  try {
    const query = ctx.request.body;
    const queryFunc = async (data:any) => new Promise((resolve, reject) => {
      console.log(process.env.ACCESS_TOKEN)
      if (cache.has((JSON.stringify(data)))) {
        console.log('get data from cache')
        resolve(cache.get(JSON.stringify(data)));
      } else {
        console.log('get data from github')
        axios({
          url: 'https://api.github.com/graphql',
          method: 'post',
          headers: {
            Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          data,
        }).then( res => {
          cache.set(JSON.stringify(data),res.data);
          resolve(res.data);
        }).catch(error=>{
          reject(error);
        })
      }
    });
    ctx.body = await queryFunc(query);
  } catch (error) {
    ctx.body = {
      code: error.response.status,
      msg: error.response.statusText,
    };
  }
};

export default Graphql;
