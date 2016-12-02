module.exports = function () {
  return function parseExpressHttpsRedirect(req, res, next) {
    if (!req.secure) {
      res.redirect('https://' + req.headers.host + req.originalUrl);
    } else {
      next();
    }
  };
}
