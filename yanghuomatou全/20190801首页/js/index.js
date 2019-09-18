
//底部、侧边、头部等公共部分的逻辑
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName
//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[] 加符号前缀. #
var asideLists =  document.querySelectorAll(".asidebar-bar-slide")
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间
for(var i = 0; i< asideLists.length; i++) {
	
	asideLists[i].onmouseenter = function() {
		
		//this  指向当前函数的执行的对象  li ,没有指向window
		
		//获取子节点
		console.log(this.children[1])
		var bar = this.children[1]
		if( !bar ) {
			return;
		}
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
		
	}
}

//返回顶部

var returnTopElem = document.querySelector('.return-top')
returnTopElem.onclick = function() {
	//在函数中定义的变量  只在函数中生效  这种被称为局部变量	
	//scrollTop  滚动条距离顶部的距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	
	//setInterval(function(){}, 1000)
	//每隔1000毫秒执行函数体一次， 不间断一直执行，除非手动关闭
	
	var timer = setInterval(function() {
		scrollTop = scrollTop -50
		
		document.body.scrollTop = scrollTop
		document.documentElement.scrollTop = scrollTop
		if(scrollTop <=0) {
			clearInterval(timer)
		}
	},1)
	
	//针对chrome
//	document.body.scrollTop = 0
	
	//针对ie、firefox
//	document.documentElement.scrollTop = 0
}

//滑出按钮
var slidebar = document.querySelectorAll('.aside-slide-bar');

//滑出盒子
var slideBox1 = document.querySelector(".aside-slide");

//客服
var slideServer = document.querySelector('.aside-slide-server')

//购物车
var slideCart = document.querySelector('.aside-slide-car')

for(var i =0 ;i<slidebar.length; i++) {
	//给按钮添加点击事件
	slidebar[i].onclick = function() {
		
		//判断按钮上是否有on  
		//通过className判读 className获取元素所有类名 字符串
		var className = this.className
		//速度
		var speed = 0
		//indexOf 获取字符串在另一个字符串中的下标 没有为-1
		if( className.indexOf('on') >=0 ) {
			speed = -12
			this.classList.remove('on')
			
		} else {
			speed = 12;
			
			//classList 获取元素类名 对象类型
			this.classList.add('on');
//			console.log(classList)
			
			//判读点击的是哪一个按钮
			//通过类名判断
			//显示的内容是哪一个
			if(className.indexOf('asidebar-bar-cart') >=0) {
				
				//获取下一个兄弟元素
				this.nextElementSibling.classList.remove('on');
				
				slideCart.style.display = 'block'
				slideServer.style.display = 'none'
			}else {
				
				//获取上一个兄弟元素
				this.previousElementSibling.classList.remove('on');
				slideServer.style.display = 'block'
				slideCart.style.display = 'none'
			}

		}
		
		var right = 0;

		if(slideBox1.currentStyle) {
			// slideBox.currentStyle 获取样式属性
			right = slideBox1.currentStyle.right
			
		}else {
			
			//right = getComputedStyle(slideBox, false).right
			right = getComputedStyle(slideBox1, false)['right']

		}
		
		right = parseInt(right)
		
		var timer = setInterval(function(){			
			right += speed
	
			if(right >35 || right < -264) {
				clearInterval(timer)
			}else {
				slideBox1.style.right = right + 'px'
			}
			
		}, 10)

	}
}
