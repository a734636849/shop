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
router.get('/newshop', function(req, res) {
	res.render('newshop', { title: '添加新商品'})
})

//登录
router.post('/api/login4ajax', function(req, res, next){
    var username = req.body.username;
    var psw = req.body.psw;
		var result = {
			code: 1,
			message: "登录成功"
		};
		UserModel.find({username: username, psw: psw}, (err, docs)=>{
			if(docs.length == 0) {
			result.code = -101;
			result.message = "您的账号或密码错误。请重新登录。"
		} else {
			// 登录成功的时候，生成session
			req.session.username = username;
			
		}
		res.json(result);
		})
   
})
//把商品存到数据库中
router.post('/addshopajax', function(req, res, next) {

var result = {
    code:1,
    message:"信息商品保存成功", 
}

var shopname = req.body.shopname;//商品名称
var shopclass = req.body.shopclass;//商品分类
var brands = req.body.brands;//商品品牌
var price = req.body.price;//本店售价
var markprice = req.body.markprice;//市场售价
var sales = req.body.sales;//虚拟销量
var grade = req.body.grade;//赠送等级积分
var buy = req.body.buy;//赠送购买积分
var promotion = req.body.promotion;//促销价

// 保存到数据库中
var SO = new MyShopObj();
SO.shopname = shopname;
SO.shopnumb = shopnumb;
SO.shopclass = shopclass;
SO.brands = brands;
SO.price = price;
SO.markprice = markprice;
SO.sales = sales;
SO.grade = grade;
SO.buy = buy;
SO.promotion = promotion;
SO.save(function(err){
    if(err){
      code = -111;
      result.message = "商品信息保存失败";
      res.send("注册失败");
    }
      res.json(result);
    
})
})


//增加商品信息
router.post("")
module.exports = router;