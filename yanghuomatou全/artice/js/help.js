(function($){
	
    
	$(".dom-title").click(function(){
		var parent = $(this).parent()
		if(parent.hasClass('on')){
			parent.removeClass('on');
			//slideUp() 将显示的元素向上收起
//			$(this).next().slideUp(1000)
		}else{
			
			parent.addClass('on')//将父级增加on
	        
	        parent.siblings().removeClass('on');
	        //siblings()查找父级的兄弟姐妹
	        //此处为什么只用slideUp() 而不用slideToggle()，是因为slideToggle()一点，全部展开，不能达到理想的效果
	        parent.siblings().find('.dom-lists').slideUp()
	    //slideDown()  将隐藏的元素向下滑出
//	    $(this).next().slideDown(2000)//加入时间让其显示的更加详细
				
		}
		//slideToggle()显示隐藏的切换以及将隐藏的显示后收起
		//对多个元素不起作用
		$(this).next().slideToggle(1000)
	})
	})