"use strict";

$(document).ready(function () {
	var _this = this;

	$(".btn-pref .btn").click(function () {
		$(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
		$(_this).removeClass("btn-default").addClass("btn-primary");
	});
});
//# sourceMappingURL=compte-compiled.js.map
