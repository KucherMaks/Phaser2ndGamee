var config = {
    // налаштування вигляду гри
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // фізика гри
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // передзавантаження хмар, землі, зірочок та бомб, налаштування виду гравця
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

var platforms;

function create ()
{
    // тло
    this.add.image(400, 300, 'sky');
    
    platforms = this.physics.add.staticGroup();

    // земля
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //платформи
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update ()
{
}