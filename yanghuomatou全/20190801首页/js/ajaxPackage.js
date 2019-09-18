/*
 * ajaxPackage  封装ajax请求 希望请求多次调用
 * @options options object
 * dataType  json string
 * success function 回调函数  在参数中传入一个方法 在数据处理完成后调用并将数据传入调用的方法
 * */
function ajaxPackage(options){
console.log(options)
//1.创建请求
var request = new XMLHttpRequest

 //2.打开请求request.open(请求类型，请求地址，同步还是异步)
  request.open(options.type||'get',options.url,options.async||true)
  
  //3.发送请求 request.send(data)
   request.send(options.data ||null)

  //4.监听请求状态
  request.onreadystatechange = function(){
  	if (request.readyState == 4 && request.status == 200) {
  	
  	   var data = request.responseText
  	   console.log(data)
  	   
  	   if (options.dataType == 'json') {
  	   	
  	   	data = JSON.parse(data)
  	   	
  	   }
  	   //调用传入的方法  传回data数据
  		options.success(data)	
  	}
  }
}
