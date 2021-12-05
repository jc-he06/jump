export default function loadAssets() {
	loadSprite("player", "sprites/player.png");
	loadSprite("ghosty", "sprites/ghosty.png");
	loadSprite("spike", "sprites/spike.png");
	loadSprite("grass", "sprites/grass.png");
	loadSprite("prize", "sprites/jumpy.png");
	loadSprite("apple", "sprites/apple.png");
	loadSprite("portal", "sprites/portal.png");
	loadSprite("coin", "sprites/coin.png");
	loadSound("coin", "sounds/score.mp3");
	loadSound("powerup", "sounds/powerup.mp3");
	loadSound("blip", "sounds/blip.mp3");
	loadSound("hit", "sounds/hit.mp3");
	loadSound("portal", "sounds/portal.mp3");
}