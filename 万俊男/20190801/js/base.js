//底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]


var asideLists =  document.querySelectorAll(".asidebar-bar")
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间
for(var i = 0; i< asideLists.length; i++) {
	
	asideLists[i].onmouseenter = function() {
		
		//this  指向当前函数的执行的对象  li ,没有指向window
		
		//获取子节点
		console.log(this.children[1])
		var bar = this.children[1]
		//需要right的值从45 变到 35
		//定时器  让一个时间延迟执行  时间可以自定义
		//setInterval(延迟执行的动作， 延迟的时间)
		var right = 45
		var timer = setInterval(function(){

			right = right-1;
			if(right<=35) {
				//clearInterval(定时器名字)
				clearInterval(timer)
			}else {
				bar.style.right = right+'px'
			}

			
		}, 10)
		
//		this.children[1].style.right = '35px';
		
		
	}
}
