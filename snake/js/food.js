;(function() {
	var position = "absolute";

	function Food(options) {
		options = options || {};

		this.x = options.x || 1;
		this.y = options.y || 1;

		this.width = options.width || 20;
		this.height = options.height || 20;

		this.color = options.color || 'green';
	}

	Food.prototype.render = function(map) {
		
		
		var div = document.createElement("div");
		map.append(div);

		div.style.position = position;
		div.style.left = this.x + 'px';
		div.style.top = this.y + 'px';
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.color;
	}
	
	var map = document.getElementById("map");
	var food = new Food();
	food.render(map);
	
})()




