module.exports = {
    // release config.
    // you can use domain name, ip address or localhost.
    server: 'chat.penlh.com',
    port: 443,

    // qiniu CDN config.
    // this is not necessary. if you not modify this config. image will save to local disk.
    accessKey: 'qiniu_access_key',
    secretKey: 'qiniu_secret_key',
    bucket: 'bucket_name',
    bucketUrl: 'bucket_outside_url',

    // max message lenght. for both backend and frontend
    maxMessageLength: 1024,
};
