var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
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
    
    sprPlayer = this.physics.add.sprite(100, 300, 'cowboy');
    
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('cowboy', { start: 71, end: 79 }),
        frameRate: 20,
    });
    
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('cowboy', { start: 126, end: 130 }),
        frameRate: 10,
    });
    
    cursors = this.input.keyboard.createCursorKeys();
    
}

function update () {
    if(cursors.up.isDown){
        sprPlayer.y-= 2;
        sprPlayer.anims.play('up', true);
    } else if(cursors.down.isDown){
        sprPlayer.y+= 2;
        sprPlayer.anims.play('down', true);
    } else {
        sprPlayer.anims.stop(null, false);
    }
}