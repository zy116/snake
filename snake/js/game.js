;(function () {
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }

    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);

        /*
        //调用move函数实现蛇身体移动
        this.snake.move();
        //调用render函数显示蛇的当前位置
        this.snake.render(this.map);
        */
    }

    window.Game = Game;
})()

var map = document.getElementById('map');
var game = new Game(map);
game.start();