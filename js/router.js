define(function(){
	return {
		map: {
			'': 'splash',
			'!/splash': 'splash'
		},
		init: function(hash){
			var map = this.map,
				self = this,
				win = $(window);

			win.on('hashchange', function(){
				var hash = location.hash,
					mapKey = hash.substr(1, hash.length),
					page = map[mapKey];

				self.go(page ? page : 'notFound');
			});

			location.hash == '' && hash && this.setHash(hash);
		},
		setHash: function(hash){
			location.hash = '!/' + hash;
		},
		go: function(page){
			this.routes[page]();
		},
		routes: {
			splash: function(){
				alert(122121212)
			},
			notFound: function(){
				alert('not found!')
			}
		}
	}
});