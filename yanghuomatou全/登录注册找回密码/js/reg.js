$.extend($.validator,{
		messages: {
		required: "该字段不能为空.", //字段必须写
		remote: "Please fix this field.", //远程 发送请求判断
		email: "请输入正确的邮箱.", //邮箱字段
		url: "请输入正确的地址.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "请输入相同的字段.", //等于 密码相同
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "请输入6-18位字符." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},
	})
	$(".validateform").validate({
//		验证规则
		rules:{
		password:{
			required:true,
			rangelength:[6,18]
		},
		repassword:{
			equalTo:$('[name-=repassword]')
		},
		mobile:{
			tel:true,
			required:true
		},
		move:{
			min:true,
			rese:true
		}
		}
	})
	//validator.addMethod(验证名字,验证方法,验证错误信息)  自定义验证
	$.validator.addMethod('tel',function(value,element){
		var reg = /^1[356789]\d{9}$/
		
		return reg.test(value)
		
	},'请输入正确的手机号')
	
	
	var downTime = $.cookie('downTime')
	console.log(downTime)
	if (downTime) {
		 countDown(downTime)
	}
	
//获取验证码
   $(".get-code").click(function(){
   	  
      var _this=this;
      
      //if语句 如果后面紧跟着的只有一句语句的时候，可以不用大括号
      if($(this).hasClass('disabled'))
      return;
      countDown(10)  	   
   })
   function countDown(count){
    $(".get-code").addClass('disabled')
   	   
   	 $(".get-code").html(count+'s后获取')
   	 //开启倒计时
   	   var timer = setInterval(function(){
   	   	count--
         $(".get-code").html(count+'s后获取')  
      //设置cookie
	       $.cookie('downTime',count)
	       console.log($.cookie('downTime'))
	       //结束倒计时
        if (count<=0) {
        	clearInterval(timer)
        	 $(".get-code").removeClass('disabled').html('重新获取')
        	$.removeCookie('downTime')
        }
   	   },1000)
   }
