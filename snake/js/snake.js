;(function () {
    //设置蛇的位置
    var position = 'absolute';
    //创建一个数组，记录蛇的位置，便于删除
    var elements = [];

    //蛇对象的构造方法
    function Snake() {
        this.width =  20;
        this.height = 20;
        this.direction = 'right';
        this.body = [
            {x: 5, y: 5, color: 'red'},
            {x: 4, y: 5, color: 'blue'},
            {x: 3, y: 5, color: 'blue'}
        ];
    }

    //蛇的位置
    Snake.prototype.render = function (map) {
        //删除蛇原来的位置，有移动效果
        remove();

        for (var i = 0, len = this.body.length; i < len; i++) {
            //蛇的每节身体
            var object = this.body[i];

            var div = document.createElement('div');

            elements.push(div);
            map.appendChild(div);
            div.style.position = position;

            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    }

    //控制蛇移动的方法
    Snake.prototype.move = function(){
        for (var i = this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        //判断蛇的移动方向
        var head = this.body[0];
        switch (this.direction) {
            case "right":
                head.x++;
                break;
            case 'left':
                head.x--;
                break;
            case 'top':
                head.y++;
                break;
            case 'bottom':
                head--;
                break;
        }
    }

    //删除方法
    function remove(){
        var len = elements.length;
        for (var i = len-1;i>=0;i--){
            //从map中删除掉这一节蛇的div
            elements[i].parentNode.removeChild(elements[i]);
        //    从数组中将这一节删除
            elements.splice(i,1);
        }
    }
    window.Snake = Snake;
})()
