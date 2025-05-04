const crypto = require('crypto');

const encrypt = (text, key) => {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'uft8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const decrypt = (encryptedText, key) => {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedText, 'hex', 'uft8');
  decrypted += decipher.final('uft8');
  return decipher;
};

module.exports = { encrypt, decrypt };
