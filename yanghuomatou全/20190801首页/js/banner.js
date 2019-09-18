//ajax (Asynchronous Javascript And XML)

var requestUrl = 'http://192.168.97.250:3002/';
//定义网络请求实例
var request = new XMLHttpRequest();

//打开请求request.open('请求类型','请求地址'，'是否异步')

//异步：浏览器执行js代码从上到下依次执行，当遇到ajax请求时，会开出新的路线，不会影响后面的时间
request.open('get',requestUrl + 'getBanner',true)

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
	
		
		var result = JSON.parse(request.responseText)
			console.log(result)
		//后台返回一个字段，判断返回的数据是否正确，如果为true则正确
		//后台根据字段名以及字段形式
		if (result.success == true) {
			//banner的个数   数组
			var lists = result.list
			
			//将banner往slide里面添加
		var slide = document.querySelector('.carosoal-slide')
		var html  = `<img src="${requestUrl + lists[lists.length-1].img}" />`
//		var html=''
		for (var i=0;i<lists.length;i++) {
			html += `<img src="${requestUrl + lists[i].img}" />`
		}
		html += `<img src="${requestUrl + lists[0].img}" />`
		slide.innerHTML = html
		
//		carosoul()
		}
	}
}


request.open('get',requestUrl + 'lists?id=1',true)

request.send();

request.onreadystatechange = function(){
	if (request.readyState == 4) {
		console.log(request.responseText)
	}
}
