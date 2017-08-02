//分页插件
$(".holder").jPages({
	containerID: "itemContainer",
	//		first: '首页',
	//		last: '尾页',
	previous: '上一页',
	next: '下一页',
	perPage: 15,
	startPage: 1,
	startRange: 2,
	midRange: 3,
	endRange: 2,
	animation: 'wobble',
	keyBrowse: true,
	callback: function(pages, items) {
		//			$("#page-panel").html("当前页面:" + pages.current);
		//$("#page-pane2").html("共" + pages.count + "页");
		//			$("#page-pane3").html("总数量:" + items.count);
		//			$("#page-pane4").html("每页数量:" + items.count / pages.count);

	}
});
