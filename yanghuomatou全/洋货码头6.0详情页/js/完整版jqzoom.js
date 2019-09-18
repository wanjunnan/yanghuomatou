(function($){
	
	$.fn.jqzoom = function(options){
		var _this=this;
		//小图
		var smallImg = $(_this).find('.small-img')
		
		var smallWidth = smallImg.width()
		var smallHeight = smallImg.height()
		//存弹出选择范围宽高
		var popwidth =0, popheight = 0
		
		var bigWidth =0, bigHeight = 0
		
		$(_this).mouseenter(function(){
			
			//将放大的图片设为要放大的图片
			var smallSrc = smallImg.attr('src')
			
			var bigHtml=`<div class="zoom-big" style="width:${options.offwidth}px;height:${options.offheight}px">
				<img src="${smallSrc}"  />
				</div>`
			
			$(_this).append('<div class="zoom-pop"></div>')
			
			$(_this).append(bigHtml)
			
			var bigImg = $(_this).find('.zoom-big img')
			
			 bigWidth = bigImg.width()
			 bigHeight = bigImg.height()
			
			var popx = smallWidth/bigWidth*options.offwidth
			var popy = smallHeight/bigHeight*options.offhight
			popwidth = popx
			popheight = popy
			
			$(_this).find('.zoom-pop').css({
				width:popx,
				height:popy
			})
			
		})
		$(_this).mouseleave(function(){
			$(_this).find('.zoom-pop').remove()
			$(_this).find('.zoom-big').remove()
		})
	
	//鼠标移动时设置小图标移动位置
	$(_this).mousemove(function(e){
		//鼠标距离页面的位置
		var pagex = e.pageX;
		var pagey = e.pageY
		
		//当前图片距离页面位置
		var offsetx = $(_this).offset().left
		var offsety = $(_this).offset().top
		
		//计算弹出的left top
		var popx = pagex - offsetx - popwidth/2
		var popy = pagey - offsety - popheight/2
		
		popx = popx < 0 ? 0 : popx
		
		popy = popy < 0 ? 0 : popy
		
		popx = popx > (smallWidth - popwidth) ? (smallWidth - popwidth) : popx
		popy = popy > (smallHeight - popheight) ? (smallHeight - popheight) : popy
		
		$(".zoom-pop").css({
			left:popx,
			top:popy
		})
		console.log(bigHeight,smallHeight)
		$(_this).find('.zoom-big img').css({
			
			
			left:-popx*(bigWidth/smallWidth),
			
			top: -popy*(bigHeight/smallHeight)
		})
	})
	
	}
	
	
})(jQuery)
