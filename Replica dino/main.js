var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

let score;
let highscore;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = [];

	
	class Player {
	constructor (x, y, w, h, c) {

	this.x = x;
	this.y = y;
	this.w = w;
	this.h= h;
	this.c = c;
	this.dy = 0;
	this.jumpForce = 15;
	this.originalHeigth = h
	//this.grounded = false;
	//this.jumpTimer = 0;
	
	}
	
	Draw () {
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.closePath();
	}
	}
	function Start () {
		canvas.width = window.innerWidth;
		canvas.heigth = window.innerHeigth;
		ctx.font = "20px sans-serif";
	
		gameSpeed = 3;
		gravity = 1;
	
		score = 0;
		highscore = 0;
	
		player = new Player(25, 150, 50, 50, '#CC6666'); 
		requestAnimationFrame(Update);
	}

	function Update() {
        requestAnimationFrame(Update);
        ctx.clearRect(0, 0, canvas.width, canvas.heigth);


			//player.Animate();
		player.Draw();  
       //player.x++;
	}

	Start();


