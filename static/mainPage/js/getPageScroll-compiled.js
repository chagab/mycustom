"use strict";

function getPageScroll() {
	var yScroll = void 0;
	if (self.pageYOffset) {
		yScroll = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		yScroll = document.documentElement.scrollTop;
	} else if (document.body) {
		yScroll = document.body.scrollTop;
	}
	return yScroll;
}
//# sourceMappingURL=getPageScroll-compiled.js.map
