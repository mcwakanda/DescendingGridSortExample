
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock
var checkDirection = function(sortDOM){
	
}
// eventHandlers// @lock

	dataGrid1.onHeaderClick = function dataGrid1_onHeaderClick (event)// @startlock
	{// @endlock
		var childrenArray = $(event.dom).parent().children();
		var clickedIndex = null;
		var currentSortOrder = "";
		
		//get the index of the clicked column
		childrenArray.each(function(index, value){
			if(value == event.dom[0]){
				clickedIndex = index;
			}		
		});
		//get the current column sort order
		if($(event.sortIndicator[0]).hasClass("waf-sort-desc")){
			$$('dataGrid1').setSortIndicator(clickedIndex, "asc")
			sources.order.orderBy(event.title[0].innerText + " asc");
		} else {
			$$('dataGrid1').setSortIndicator(clickedIndex, "desc")
			sources.order.orderBy(event.title[0].innerText + " desc");
		}

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("dataGrid1", "onHeaderClick", dataGrid1.onHeaderClick, "WAF");
// @endregion
};// @endlock
