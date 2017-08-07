$(function() {
	$("#logoLoading").ajaxStart(() => {
		$(this).show();
		$('#logoContainer').hide();
	});
	$("#logoLoading").ajaxStop(() => {
		$(this).hide();
		$('#logoContainer').show();
	});
});
