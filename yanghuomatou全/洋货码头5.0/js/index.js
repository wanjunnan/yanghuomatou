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
		
//		this.children[1].style.right = '35px';
		
		
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


//点击控件 购物车以及 客服滑出

//var slideBars = document.querySelectorAll('.aside-slide-bar');
//var asideSlide = document.querySelector('.aside-slide') 
//console.log(window.slideBars, slideBars)
//for(var i = 0;i< slideBars.length; i++) {
//	
//	slideBars[i].onclick = function() {
//		//currentStyle获取css样式属性值得 IE opera
//		//getComputedStyle(要获取属性的元素, false)
////		console.log(asideSlide.currentStyle.right)
//		var right = ''
//		if(asideSlide.currentStyle) {
//			right = asideSlide.currentStyle.right
//		}else {
//			
//			right = getComputedStyle(asideSlide, false)['right']
//
//		}
//		
//		
//		right = parseInt(right)
//		var speed = 0
//		
//		//classList  获取元素的类名           数据类型为对象
//		//className  也是获取元素的类名   数据类型为字符串
//		//.classList.add  往元素上添加一个类类型
//		//this.classList.remove('on')  往元素上移除一个类
//		
//		
//		className = this.className
//		
//		// 当滑块要往会走是 当前点的按钮上有on这个类型
//		// 并且right > -264  表示已经出来或者在出来的状态
//		//className.indexOf('on') 查找类名字符串中是否有on这个类名
//		//如果没有返回的是-1   有返回的是下标
//		if(right > -264 && className.indexOf('on') >= 0 ) {
//			//回去  35   -264
//			speed = -12
//			this.classList.remove('on')
//			
//		} else {
//			//出来  -264  35
//			speed = 12
//			this.classList.add('on')
//			
//
//			//显示的是购物车还是客服
//			
//			//判断是否有购物车按钮专有的类名， 
//			//如果有 表示显示购物车   没有显示客服
//			var cart = document.querySelector('.aside-slide-car')
//			var server = document.querySelector('.aside-slide-server')
//			console.log(className)
//			if(className.indexOf('asidebar-bar-cart') >= 0) {
//				
//
//				//将当前元素的下一个元素节点的on去掉
//				this.nextElementSibling.classList.remove('on')
//				cart.style.display = 'block'
//				server.style.display = 'none'
//			}else {
//				//显示客服
//				cart.style.display = 'none';
//				server.style.display = 'block'
//				//将当前元素的上一个元素节点的on去掉
//					
//				this.previousElementSibling.classList.remove('on')
//				
//			}
//		}
//		
//		
//		//运动
//		var timer = window.setInterval(function() {	
//			right += speed
//			
//			if((right > 35  && speed >0) || (right<-264 && speed <0)) {
//				clearInterval(timer)
////				asideSlide.style.right = 35 + 'px'
//			}else {
//				asideSlide.style.right = right + 'px'
//			}
//		}, 10)	
//	}
//	
//}


//滑出按钮
var slidebar = document.querySelectorAll('.aside-slide-bar');

//滑出盒子
var slideBox = document.querySelector(".aside-slide");

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

		if(slideBox.currentStyle) {
			// slideBox.currentStyle 获取样式属性
			right = slideBox.currentStyle.right
			
		}else {
			
			//right = getComputedStyle(slideBox, false).right
			right = getComputedStyle(slideBox, false)['right']

		}
		
		right = parseInt(right)
		
		var timer = setInterval(function(){			
			right += speed
	
			if(right >35 || right < -264) {
				clearInterval(timer)
			}else {
				slideBox.style.right = right + 'px'
			}
			
		}, 10)

	}
}
