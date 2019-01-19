//移除生活模块图片的点击事件
$(function() { 
	var s = $("#life-module").val();
	console.log(s);
	if(s == 'off'){
		console.log("移除图片点击事件")
		//要执行的代码。
		$('#movie').die().live('click',function (event){
			event.preventDefault();
			//事件处理逻辑，例如
			self.location.href="../movies";
		});
		$('#game').unbind('click');
		$('#book').unbind('click');
		$('#video').unbind('click');
		$('#container').unbind('click');
	}
	
});