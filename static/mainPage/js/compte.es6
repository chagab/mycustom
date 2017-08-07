$(document).ready(function() {
	$(".btn-pref .btn").click(() => {
		$(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
		$(this).removeClass("btn-default").addClass("btn-primary");
	});
});
