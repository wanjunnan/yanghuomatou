//ajax (Asynchronous Javascript And XML)

//定义网络请求实例
var request = new XMLHttpRequest();

//打开请求request.open('请求类型','请求地址'，'是否异步')

//异步：浏览器执行js代码从上到下依次执行，当遇到ajax请求时，会开出新的路线，不会影响后面的时间
request.open('get','http://192.168.97.231:3000/getBanner',true)

//发送请求到后台
//后台会规定是否需要数据request.send(后台需要的数据)
request.send();//后台不需要数据则为null


//请求发送的状态4个
//0 (初始化XMLHttpRequest)、1(打开)、2、3(发送成功，接受成功，我们看不到)4、(请求成功，后台返回前段数据成功)

//请求监听状态码
request.onreadystatechange = function(){
	
	//执行过程中的状态码
	console.log(request.readyState)
	if (request.readyState ==4) {
		console.log(request.responseText)
	}
}
