define(function(){
	return {
		getDeviceType: function(){
			var ua = navigator.userAgent,
				res = ua.match(/(iPhone|iPod|iPad|Android|IEMobile|BlackBerry)/i);

			return res ? res[0] : 'PC';
		},
		isPC: function(){
			return this.getDeviceType() == 'PC' ? true : false;
		}
	}
});