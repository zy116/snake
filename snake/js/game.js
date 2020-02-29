;(function () {
    var that;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    //如果用prototype添加函数，那么此函数就不是私密函数
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);

       document.getElementById('start').onclick =function () {
           run();
           bindKey();
       }

        /*
        //调用move函数实现蛇身体移动
        this.snake.move();
        //调用render函数显示蛇的当前位置
        this.snake.render(this.map);
        */
    }

    function run() {
        var runId = setInterval(function () {
            this.snake.move(that.map,that.food);
            this.snake.render(that.map);

            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headY < 0 || headX < 0 || headX >= maxX || headY >= maxY) {
                alert('Game Over')
                clearInterval(runId);
            }
        }.bind(that), 150);
    }

    function bindKey(){
        document.addEventListener('keydown',function (e) {
            switch (e.code) {
                case 'ArrowUp':
                    this.snake.direction = 'up';
                    break;
                case 'ArrowDown':
                    this.snake.direction = 'down';
                    break;
                case 'ArrowLeft':
                    this.snake.direction = 'left';
                    break;
                case 'ArrowRight':
                    this.snake.direction = 'right';
                    break;
            }
        }.bind(that))
    }
    window.Game = Game;
})()

