// 拿到数据库中的数据, 循环显示在商品列表里
// 循环    字符串

function showlist(listdata) {
  $.ajax({
    url:"/shoplistajax",
    type:"get",
    data:{
      listdata: listdata,//数据库中的数据
    },
    success:function(res){
        console.log(res.data)
     
    }
  })


}


    