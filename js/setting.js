
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio").clone();
	setTimeout(function(){ gridResize(); }, 700);
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li').click(function(e) {
		$(".filter li").removeClass("active");	
			// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
			var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
			
			if (filterClass == 'all') {
				var $filteredData = $data.find('.product');
			} else {
				var $filteredData = $data.find('.product[data-type=' + filterClass + ']');
			}
			$(".portfolio").quicksand($filteredData, {
				duration: 600,
				adjustHeight: 'auto'
			}, function(){gridResize();});
			
			$(this).addClass("active"); 	
				
			return false;
		});
	}
});