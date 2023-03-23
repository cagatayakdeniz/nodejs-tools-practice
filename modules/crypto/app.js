const crypto = require('crypto');

const secretKey = "cagatayyazilim";

const hash = crypto.createHash('sha512',secretKey).update("sifrem").digest("hex");

console.log('hash:',hash);