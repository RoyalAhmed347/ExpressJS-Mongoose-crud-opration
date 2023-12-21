const fs = require("fs");

const LogReqRes = (url) => {
  return (req, res, next) => {
    fs.appendFile(
      url,
      `${Date.now()} : ${req.ip} : ${req.method} : ${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
};

module.exports = { LogReqRes };
