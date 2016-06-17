;$(function(){
	var num = 1;//一次加载5个
	var pageIndex = 0;//当前页是第几页
	var pageNum = 0;//页数
	var isFirst = false;//判断是不是第一次加载
		loadData(pageIndex,num);
		pageIndex++;
	function loadData(pageIndex,num){
		$.getJSON("mock/getlivelist.json",function(data){
			console.log(data)
			var len = data.length;
			pageNum = Math.ceil(len/num);

			if(isFirst == false){
				for(var i = 0; i < pageNum;i++){
					$("#buddle").append("<span class='page'>"+(i+1)+"</span>")
				}
				isFirst = true;
			}
			$(".page").on("click",function(){
				var index = $(this).index();
//				alert(index)
				///alert(pageIndex)
				loadData(index,num);

			})

			var total = (((pageIndex*num+5)>len)?len:(pageIndex*num+5));
			$(".list").html("");
			// for (var i = pageIndex*num;i < total;i++) {
			// 	$(".list").append( "<img src='"+data[i].src+"'/>");
      //
			// }

		});
	}


//	var arr = [1,3,2,6,5];
//	arr.sort(function(a,b){
//		return a-b;
//	})
//	alert(arr);

	// $("#sort").click(function(){
	// 	$.getJSON("data/test.json",function(data){
	// 		var len = data.length;
	// 		data.sort(function(a,b){
	// 			return a.price - b.price;
	// 		});
	// 		$(".content").html("")
	// 		for (var i = 0;i < len;i++) {
	// 			$(".content").append("<img src='"+data[i].src+"'/>");
	// 		}
	// 	});
	// })

});
