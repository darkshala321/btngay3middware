const express = require('express');
const app = express();
const port = 8000;


const checkIsLogin = (req, res, next) => {
    const query = req.query;

    if (query.isLogin) {

        next();
    } else {

        res.status(401).send('Bạn không có quyền thực hiện hành động này.');
    }
};

app.get('/post',(req, res) => {
    res.send('Bạn đã thấy các bài viết ở đây');
})

app.post('/post', checkIsLogin, (req, res) => {
    res.send('Bài viết đã được tạo.');
});

app.put('/post', checkIsLogin, (req, res) => {
    res.send('Bài viết đã được cập nhật.');
});

app.delete('/post', checkIsLogin, (req, res) => {
    res.send('Bài viết đã bị xóa.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});