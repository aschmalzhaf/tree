		$(function() {
			$('#sortable1, #sortable2').sortable({
				placeholder: "ui-state-highlight",
				connectWith: ".tree"
			});
			$( "#sortable1, #sortable2" ).disableSelection();

			
		});