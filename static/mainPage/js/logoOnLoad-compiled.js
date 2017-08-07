"use strict";

$(function () {
	var _this = this;

	$("#logoLoading").ajaxStart(function () {
		$(_this).show();
		$('#logoContainer').hide();
	});
	$("#logoLoading").ajaxStop(function () {
		$(_this).hide();
		$('#logoContainer').show();
	});
});
//# sourceMappingURL=logoOnLoad-compiled.js.map
