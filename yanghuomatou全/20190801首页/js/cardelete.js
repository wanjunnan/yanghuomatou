//购物车删除事件
		var listParent = document.querySelector('.add')		
		//将input框中的内容作为元素添加到ul的最后
//		var btnSubmit = document.querySelector('.submit')
		
		var aList = document.querySelectorAll('.delete')
		
//		btnSubmit.onclick = function(){
	     //获取input框
	     var OInput = document.querySelector('a')
//	     
//	     //获取input框的value值
//	     if (!OInput.value) {
//	     	alert('请输入内容');	     	
//	     	return;
//	     }
	     //创建li标签    createElement
	     var oA= document.createElement('add')
	     
	     oA.innerHTML = OInput.value + '<a href="#" class="padding-30-r  fr delete">删除</a>'
		
		//appendChild  第一个元素oLi添加到另一个元素listParent中
		listParent.appendChild(oA)
		
		OInput.value = ''				
			//点击删除时  删除当前父节点的li
			//获取所有的a标签
			for (var i=0 ;i<aList.length;i++) {				
				aList[i].onclick= function() {					
					//删除当前的a标签父级的li 删除当前的li标签
				var oA = this.parentNode				
				listParent.removeChild(oA)
				}
			}
