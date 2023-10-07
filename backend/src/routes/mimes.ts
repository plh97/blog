interface MimeType {
  css: String,
  less: String,
  gif: String,
  html: String,
  ico: String,
  jpeg: String,
  jpg: String,
  js: String,
  json: String,
  pdf: String,
  png: String,
  svg: String,
  swf: String,
  tiff: String,
  txt: String,
  wav: String,
  wma: String,
  wmv: String,
  xml: String,
}

const mimes:MimeType = {
  css: 'text/css',
  less: 'text/css',
  gif: 'image/gif',
  html: 'text/html',
  ico: 'image/x-icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  js: 'text/javascript',
  json: 'application/json',
  pdf: 'application/pdf',
  png: 'image/png',
  svg: 'image/svg+xml',
  swf: 'application/x-shockwave-flash',
  tiff: 'image/tiff',
  txt: 'text/plain',
  wav: 'audio/x-wav',
  wma: 'audio/x-ms-wma',
  wmv: 'video/x-ms-wmv',
  xml: 'text/xml',
};

class Mime {
  static getType(type:String) {
    for (const mime in mimes) {
      if (mimes[mime] == type) {
        return mime;
      }
    }
  }
}

export default Mime
