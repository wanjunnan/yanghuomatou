(function($){
	
	//封装
	$.fn.jqueryzoom = function(options){
		
		//小图 页面本身存在的图片  smallImg   类名.small-img
		//区域块 小图上出现的透明的区域 areaBlock 类名.zoom-pop
		
		//大区域块  限制大图显示范围的块   bigBlock  类名 .zoom-big
		//大图  小图放大的图片 bigImg   类名.big-img
		
		var  smallImg = null, areaBlock = null, 
		bigBlock = null,    bigImg = null;
		
		$(this).mouseenter(function(){
			//鼠标移入大盒子的时候  追加大区域块以及大区域  大图
			var bigHtml = `<div class="zoom-big">
							<img class="big-img" src="img/2 (5).jpeg" />
						</div>`
			
			$(this).append('<div class="zoom-pop"></div>');
			
			$(this).append(bigHtml)
				
			// 获取四个需要的参数
			smallImg = $(this).find('.small-img')
			areaBlock = $(this).find('.zoom-pop')
			bigBlock = $(this).find('.zoom-big')
			bigImg = $(this).find('.big-img')
			
			//计算小区域块的宽高
			var blockWidth = smallImg.width()/bigImg.width()*options.offwidth
			
			var blockHeight = smallImg.height()/bigImg.height()*options.offheight
			
			areaBlock.css({
				width:blockWidth,
				height:blockHeight
			})
			//设置大区域块的宽高
			bigBlock.css({
				width:options.offwidth,
				height:options.offheight
			})
			
		})
		
		$(this).mouseleave(function(){
			 //移除放大盒子的时候   将区域块移除
			 areaBlock.remove();
			 bigBlock.remove()
			
		})
		//在放大盒子移动的时候  区域块跟随移动
		//区域块的位置为鼠标距离页面的坐标   盒子距离页面的坐标
		$(this).mousemove(function(event){
			
			//鼠标距离页面的坐标
			var pagex = event.pageX
			var pagey = event.pageY
			
			//盒子看距离页面的坐标
			var offsetx = $(this).offset().left
			var offsety = $(this).offset().top
			//区域块的宽高
			var blockWidth = areaBlock.width()
			var blockHeight = areaBlock.height()

			//小图的宽高
			var smallImgWidth = smallImg.width()
			var smallImgHeight = smallImg.height()

			//区域的位置
			var areax = pagex - offsetx - blockWidth/2
			var areay = pagey - offsety - blockHeight/2
              

			
			//显示区域块的运动范围
			areax = areax < 0 ? 0 : areax
			areay = areay < 0 ? 0 : areay
			
			areax = areax > (smallImgWidth - blockWidth) ? (smallImgWidth - blockWidth) : areax
			areay = areay > (smallImgHeight - blockHeight) ? (smallImgHeight - blockHeight) :areay
			
			areaBlock.css({
				left:areax,
				top:areay
			})
			//计算大图的位置
			var bigLeft = areax * bigImg.width() / smallImgWidth
			var bigTop = areay * bigImg.height() / smallImgHeight
			
			bigImg.css({
				left:-bigLeft,
				top:-bigTop
			})
			
		})
	}
	
})(jQuery)
