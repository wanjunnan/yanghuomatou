window.onload =function(){

		////存放轮播图
////首页的逻辑代码
/*
 * 1. 计算移动盒子的宽度
 * 2. 使移动盒子移动  每次移动距离为图片的宽度
 * 3. 定时执行2步的运动
 * 4. 判断运动到最后一张是返回显示第一张
 * */
//移动盒子
if (interval) {
	clearInterval(interval)
}

var index = 1;
var dotIndex = 0
var interval = null
var speed = -10
var bannerCarosoul = document.querySelector('.banner-cursoal')

var slideBox = document.querySelector('.carosoal-slide');

var imgList  = document.querySelectorAll('.carosoal-slide img')

var aBtn = document.querySelectorAll('.carosoul-btn')


var imgWidth = imgList[0].offsetWidth
//图片长度
var imgLength = imgList.length
 //1. 计算移动盒子的宽度
slideBox.style.width = imgWidth * imgLength + 'px'
//3. 定时执行2步的运动
autoAniamte()
function autoAniamte() {
	interval = setInterval(function(){
		animate(-10, 'left')
	}, 2000)	
}
//2. 使移动盒子移动  每次移动距离为图片的宽度
function animate(speed, position) {
	
//	changeDot(position)
	
	var timer = setInterval(function(){
		var left = slideBox.offsetLeft + speed
		slideBox.style.left = left + 'px'
		
		var curIndex = 0;   //表示即将要运动到图片的下标
		if(position =='left') {
			curIndex = index+1

		}else {
			curIndex = index-1
		}		
		//当当前盒子的left值小于等于目标值时 停止动画
		//(left <= -(curIndex)*imgWidth && speed <0)  往左移
		//(left >= -curIndex*imgWidth && speed > 0)   往右移
		if((left <= -(curIndex)*imgWidth && speed <0) || (left >= -curIndex*imgWidth && speed > 0)) {
			clearInterval(timer)
			index = curIndex
			
			//4. 判断运动到最后一张是返回显示第一张
			if(index >= imgLength -1) {
				index = 1;
				slideBox.style.left = -imgWidth + 'px'
			}else if(index<=0) {
				index = imgLength-2
				slideBox.style.left = -index*imgWidth + 'px'
			}
			
		}
		
	}, 10)		
}
//5. 移入轮播盒子 停止动画 移除开始
bannerCarosoul.onmouseenter = function() {
	clearInterval(interval)
}

bannerCarosoul.onmouseleave = function() {
	autoAniamte()
}

//6.给左右按钮加点击事件
for(var i =0; i< aBtn.length;i++) {
	aBtn[i].onclick = function() {
		
		//获取类名
		var className = this.className
		if(className.indexOf('prev') >=0) {
			//点击左按钮  往右走
			animate(10, 'right')

		}else {
			//点击右按钮  往左走
			animate(-10, 'left')
		}		
	}	
}
//当浏览器最小化 或者切换不同标签是执行的动作  visibilitychange
//document.addEventListener  监听事件
document.addEventListener('webkitvisibilitychange', function(){
	//浏览器是否隐藏  隐藏hidden  显示visible
	var isHidden = document.hidden || document.webkitVisibilityState == 'hidden'
	if(isHidden) {
		clearInterval(interval)
	}else {
		autoAniamte()
	}
})
}





