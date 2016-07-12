;(function(window, tracking, document) {
  var CarlosGame = function() {
    this.videoCamera = new tracking.VideoCamera().render();
    this.carlos = document.getElementById("carlos");
    this.ball = document.getElementById("ball");
    this.screenWidth = screen.availWidth;
    this.screenHeight = screen.availHeight;
  };

  CarlosGame.prototype = {
    start: function() {
      this.videoCamera.track({
        type: 'color',
        color: 'cyan',
        onFound: this.moveCarlos.bind(this)
      });

      this.videoCamera.track({
        type: 'color',
        color: 'magenta',
        onFound: this.moveBall.bind(this)
      });
    },

    moveBall: function(track) {
      this.moveEl(this.ball, track);
    },

    moveCarlos: function(track) {
      this.moveEl(this.carlos, track);
    },

    moveEl: function(el, track) {
      var right = track.x * 4.3;
      var top = track.y * 3.1;
      var elStyle = el.style;
      var classList = el.classList;

      elStyle.top = top + "px";
      elStyle.right = right + "px";

      if (right > (this.screenWidth / 2)) {
        classList.add("flip");
      } else {
        classList.remove("flip");
      }

    }
  };

  window.CarlosGame = CarlosGame;
  window.onload = function() {
    new CarlosGame().start();
  };

})(window, tracking, document);