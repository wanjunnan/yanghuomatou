(function($,w){
	
	//$既看成对象 也看成方法
	//options  对象
	//centent  提示的内容
	//interval  提示的时间
	//type    提示类型
	$.perfettooltip = function(options){
		//判断定时器是否存在，存在是否清除
		if (w.timer) {
			clearTimeout(w.timer)
		}
		$('.alter').remove()
		
		var html = $(`<div class="alter alter-${options.type}">${options.content}</div>`)
		
		$('.zhengzhe').append(html)
		//添加定时器，用interval时间将提示语清除
		w.timer = setTimeout(function(){
			
			html.remove()
			if(options.success){
				options.success()
			}
			
		},options.interval || 3000)
	}
})(jQuery,window)
