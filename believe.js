;(function(){

  function noop(){}

  var Believe = function(){
    this.bindings = []
    this.running = false
    this.loop = null
  }
  window.Believe = Believe

  Believe.prototype.bind = function bind($el, pos){
    this.bindings.push([$el, pos])
  }
  
  Believe.prototype.start = function start(loop){
    if (this.running) return
    this.running = true
    this.loop = loop || noop
    this.animate()
  }

  Believe.prototype.animate = function animate(loop){
    /*setInterval(function(){}, 16)*/
    this.loop.call(null)
    this.render()
    requestAnimationFrame(this.animate.bind(this))
  }

  Believe.prototype.render = function render(){
    this.bindings.forEach(function(binding){
      var pos = binding[1]
      binding[0].css({
        'transform': 'translate('+ pos.x +'px, '+ pos.y +'px)'
      })
    })
  }

})();
