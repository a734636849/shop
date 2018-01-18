var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/loginEJS', function(req, res) {
    res.render("loginEJS", { title: '登录页面' })
})
router.get('/shoplist', function(req, res) {
  res.render("shoplist" , { title: '导航菜单'})
})
router.get('/list', function(req, res) {
	res.render('list', { title: '商品列表'})
})
router.post('/api/login4ajax', function(req, res, next){
    var username = req.body.username;
    var psw = req.body.psw;

    //var result = {
      if (username == "lilongsheng" && psw == "123456") {
        message:"登录成功"
      } else {
        message:"登录失败"
      }
    //}
    //res.json(result);
   
})
module.exports = router;