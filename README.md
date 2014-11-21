# believe

Believe your js

> Css3 Animation Engine

## Usage

```js
var believe = new Believe() // new instance
var pos1 = { x: 30, y: 60 }
var pos2 = { x: 30, y: 60 }
var $box1 = $('.box1')
var $box2 = $('.box2')

believe.bind($box1, pos2) // bind dom with pos data
believe.bind($box1, pos2)
believe.start(loop) // start with loop

function loop(){
  pos1.x += k
  pos2.y -= k
}
```
