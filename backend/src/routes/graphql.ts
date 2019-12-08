import axios from "axios";

export default async (ctx: any) => {
  try {
    const data = ctx.request.body;
    ctx.body = await new Promise((resolve, reject) => {
      axios({
        url: "https://api.github.com/graphql",
        method: "post",
        headers: {
          Authorization: `bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        data
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  } catch (error) {
    ctx.body = {
      code: error.response.status,
      msg: error.response.statusText
    };
  }
};
