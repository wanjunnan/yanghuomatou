//自我封装jqzoom

(function($){
	
	$.fn.jqzoom = function(options){
		
		//添加移入图片上的区域选择盒子
		$(this).mouseenter(function(){
			
			$(this).append('<div class="smalldiv" style="position:absolute;background:#FFF;width:100px;height:100px;left:54px;opacity:0.5;"></div>')
			
		})
		//删除移入图片上的区域选择盒子
		$(this).mouseleave(function(){
			$(this).find('.smalldiv').remove()
		})
		$(this).mousemove(function(event){
			//当鼠标的位置距离页面的坐标
			var pageX = event.pageX;
			var pageY = event.pageY;
			
			var img = $(this).find('img');
			
			var positionX = img.offset().left;
			var positionY = img.offset().top;
//			console.log(pageX-positionX,pageY-positionY)
			var smalldiv = $(this).find('.smalldiv')
			var width = smalldiv.width()
			var height = smalldiv.height()
			
			var x = pageX-positionX - width/2
			
			var y = pageY-positionY - height/2
			
			x = x < 0 ? 0 : x
			y = y < 0 ? 0 : y
			
			x = x >(img.width() - width) ? (img.width() - width) :x
			
			y = y >(img.height() - height) ? (img.height() - height) :y
			
			smalldiv.css({
				left:x,
				top:y
			})
			
		})
//打印图片的div
//console.log(this)


	}

})(jQuery)
