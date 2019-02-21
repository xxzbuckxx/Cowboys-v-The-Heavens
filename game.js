var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.spritesheet('cowboy', 'assets/cowboy.png', {frameWidth: 128, frameHeight: 128});
    this.load.image('sand', 'assets/sand.png');
}

var sprPlayer;
var cursors;

function create () {
    this.add.tileSprite(400, 300, 800, 600, 'sand');
    
    sprPlayer = this.add.sprite(100, 300, 'cowboy');
    
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('cowboy', { start: 83, end: 97 }),
        frameRate: 20,
        repeat: -1
    });
    
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('cowboy', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    
}

function update () {
    sprPlayer.anims.play('up', true);
}