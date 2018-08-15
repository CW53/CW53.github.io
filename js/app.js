let allItems = [];

const startGame = document.querySelectorAll('.play');

// Enemies
class Enemy {
  constructor (x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
  }
}
  Enemy.prototype.render = function (dt) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// update () {
  //for (let enemy of allEnemies) {
    //if (this.y === enemy.y && (enemy.x + enemy.step > this.x && enemy.x < this.x + this.step)) {
    //  console.log('Collide');
//  }
//}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // if enemy is not passed boundary, move forward; increment x by speed * dt. else reset pos to start
    if (this.x < this.boundary) {
      this.x = randomPosition (-150, -200);
      this.speed = randomSpeed(75, 200);
    }
    else {
      this.x = this.resetPos;
    }
  }
};


// Hero


function Hero (x, y) {
    this.sprite = 'images/char-horn-girl.png';
    this.x = x;
    this.y = y;
  };



// - Direction to travel


Hero.prototype.handleInput = function(arrow) {
      this.xValue = 101;
      this.yValue = 83;

      if (arrow == 'up') {
        this.y -= this.yValue;
      }
      if (arrow == 'down') {
        this.y += this.yValue;
      }
      if (arrow == 'left') {
        this.x -= this.xValue;
      }
      if (arrow == 'right') {
        this.x += this.xValue;
      }
    }

//Setting limits
if (this.x < 0) {
  this.x = 0;
}
if (this.x > 400) {
  this.x = 400;
}
if (this.y > 400) {
  this.y = 400;
}
if (this.y <= 30) {
  this.y = -10;
setTimeout(() => {
  this.y = 400;
}
};

Hero.prototype.update = function () {
  crash();
};
Hero.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Creation

let player = new Hero(200, 400);
let bug1 = new Enemy(-101, 0, 200);
let bug2 = new Enemy(-101, 83, 300);
let bug3 = new Enemy((-101*2.5), 83, 300);

// Add enemies
allEnemies.push(bug1, bug2, bug3);

// Random speed for Enemies
function randomSpeed (min, max) {
  return Math.random() * (max - min) + min;
};

// random randomPosition
function randomPoisition (min, max) {
  return Math.random() * (max - min) + min;
};

// Restart

function restartGame();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
Hero.handleInput(allowedKeys[e.keyCode]);
});
