const authenticate = (req, res, next) => {
  if (isLogin && req.method === 'GET' && req.path.startsWith('/post/')) {
    next();
  } else {
    res.status(403).send('Bạn chưa đăng nhập tài khoản admin.');
  }
};

module.exports = { authenticate, isLogin };