module.exports = {
    // release config.
    // you can use domain name, ip address or localhost.
    server: 'chat.pipk.top',
    port: 443,

    // qiniu CDN config.
    // this is not necessary. if you not modify this config. image will save to local disk.
    accessKey: 'LU4OW7NxghlYyqsBM0FOqQqObvs4Ov_SW1eLGuU5',
    secretKey: '6b0EUR02GlpnLJigqtF-xvkiqPp7AHyPRwyqw_Fo',
    bucket: 'chatroom',
    bucketUrl: 'oy0nofg7z.bkt.clouddn.com',

    // max message lenght. for both backend and frontend
    maxMessageLength: 1024,

    //github OAuth
    githubClientID: process.env.NODE_ENV =='dev'? "b794478ea18f28f30509":"beb866b2260c1881c515",
    githubClientSecret: process.env.NODE_ENV =='dev'? "e845cb85dae60b38dcab468d9d434b6e068ad083":"1a0a83d40a110f3db587e134d585fe04bdf07736",
    // github token with this i can use graphql to get my infomation
    // githubToken: "728bfbb7bbf182639d82519e8add763c503ebd76",
    githubToken: "28f6a58cae6f9164e27f2f25b7887b28ffae8379",

    chromium: process.env.NODE_ENV =='dev'? "C:/Users/33318/AppData/Local/Chromium/Application/chrome.exe":"beb866b2260c1881c515",
    canary: "C:/Users/33318/AppData/Local/Google/Chrome SxS/Application/chrome.exe",
    phone:"18825142583",
    calendar: {
        "owner": "pengliheng",
        "repo": "pengliheng.github.io",
        "todo_repo": "todo",
        "github_client_id": "b8257841dd7ca5eef2aa",
        "github_client_secret": "4da33dd6fcb0a01d395945ad18613ecf9c12079e",
        "firebase": {
          "config": {
            "apiKey": "AIzaSyDTCaJ23z7O393k_5w79z40XBNVURiAxb8",
            "authDomain": "blog-9281a.firebaseapp.com",
            "databaseURL": "https://blog-9281a.firebaseio.com",
            "projectId": "blog-9281a",
            "storageBucket": "blog-9281a.appspot.com",
            "messagingSenderId": "989620354189"
          },
          "account": {
            "email": "troy450409405@gmail.com",
            "password": "123123"
          }
        }
      }
};
