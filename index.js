function hostname(req) {
  if (req.hostname) {
    return req.hostname;
  }
  return req.get('Host');
}

module.exports = function () {
  return function parseExpressHttpsRedirect(req, res, next) {
    if (!req.secure) {
      res.redirect('https://' + hostname(req) + req.originalUrl);
    } else {
      next();
    }
  };
}
