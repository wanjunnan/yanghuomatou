//向标签中添加评论
	var send = $(".send")
	var value = $("[name=content]").val()
	console.log(value)
	send.click(function(){
		var value = $("[name=content]").val()
//		console.log(value)
		if (value) {
			if (confirm('是否提交评论')) {
				var html =`<div class="conversation-four margin-10-t">
         	<img class="fl" src="img/2 (2).jpg"  />
         	<div class="font-12 fl padding-20-b">好评 | 2019-08-12 22:26:25</div>
         	<div>${value}</div>
         	</div>`
				//向标签中后面添加标签
//	方法一			$(".list-text").append(html)
				//向标签中添加到父级标签的后面
//  方法二			$(html).appendTo($(".list-text"))
                //向标签中添加元素  添加到前面
// 向前面添加元素法一    $(".list-text").prepend(html)
               
//向前面添加元素法二      
               $(html).prependTo($(".addcontent"))
               $("[name=content]").val('')
			}
		}
	})