const game = document.getElementById('game');
const c = game.getContext('2d');

game.width = innerWidth;
game.height = innerHeight;

let grd = c.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, 'red');
grd.addColorStop(1, 'orange');

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: game.height - 56,
    };

    this.grounded = true;

    this.gravity = 0.5;

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 30;
    this.height = 30;
  }

  draw() {

  c.beginPath();
  c.arc(this.position.x, this.position.y, 25, 0, 2 * Math.PI);
  c.fillStyle = grd;
  c.fill();

  }

  update() {
    this.draw();

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= game.height - 25) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
      this.grounded = true;
    }

  }
}

const player = new Player();

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, game.width, game.height);

  player.update();

  if (keys.right.pressed == true && player.position.x <= game.width - 35) {
    player.velocity.x = 5;
  } else if (keys.left.pressed == true && player.position.x >= 35) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
};

animate();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;
    case 68:
      console.log('right')
      keys.right.pressed = true;
      break;
    case 87:
      if(player.grounded == true){
        player.velocity.y -=20;
        player.grounded = false;
      }
      break;
    case 32:
      if(player.grounded == true){
        player.velocity.y -=20;
        player.grounded = false;
      }
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 68:
      keys.right.pressed = false;
      break;
  }
});
