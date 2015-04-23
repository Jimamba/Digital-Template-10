window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('grass','assets/Grass.png');
        game.load.spritesheet('player','assets/DogeSprite.png',70,77);
        game.load.spritesheet('playertwo','assets/WeegeeCatcherSheet.png',40,60);
        game.load.audio('boop','assets/grab.php.mp3');
        game.load.audio('music','assets/ac_theme_8bit.mp3');
        game.load.image('wall','assets/wall.png');
        game.load.image('walltwo','assets/walltwo.png');
        game.load.image('watermelon','assets/watermelon.png');
        game.load.image('p1','assets/p1.png');
        game.load.image('p2','assets/p2.png');
        game.load.image('start','assets/start.png');
    }
    
    function onewin(player,watermelon)
    {
    effect.play('',0,1,false);
    player.kill();
    playertwo.kill();
    watermelon.kill();
    p1 = game.add.sprite(0,0,'p1');
    music.stop();
    }
    
    function twowin(playertwo,watermelon)
    {
    effect.play('',0,1,false);
    playertwo.kill();
    player.kill();
    watermelon.kill();
    p2 = game.add.sprite(0,0,'p2');
    music.stop();
    }
    
    var music;
    var effect;
    var player;
    var playertwo;
    var cursors;
    var up;
    var down;
    var left;
    var right;
    var walls;
    var watermelon;
    var p1;
    var p2;
    var start;
    var h;
    
    
    
    function create() {
    music = game.add.audio('music');
    music.play();
   	
    effect = game.add.audio('boop',1,true);
    game.add.sprite(0,0, 'grass');
    
        // Create a sprite at the center of the screen using the 'logo' image.
        player = game.add.sprite(760, game.world.height, 'player' );
        playertwo = game.add.sprite(0,game.world.height,'playertwo');
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        player.anchor.setTo( 0.5, 0.5 );
        playertwo.anchor.setTo(0.5,0.5);
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable(player, Phaser.Physics.ARCADE );
        game.physics.enable(playertwo, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        player.body.collideWorldBounds = true;
        playertwo.body.collideWorldBounds = true;
        
        player.animations.add('left',[9,8,7,6,5,4,3,2,1,0], 10, true);
        player.animations.add('right',[10,11,12,13,14,15,16,17,18,19], 10, true);
        
        playertwo.animations.add('down',[0,1,2,3,4,5],10,true);
        playertwo.animations.add('up', [6,7,8,9,10],10,true);
        playertwo.animations.add('left',[11,12,13,14,15],10,true);
        playertwo.animations.add('right',[16,17,18,19,20],10,true);
        
        cursors = game.input.keyboard.createCursorKeys();
        up = game.input.keyboard.addKey(Phaser.Keyboard.W);
        down = game.input.keyboard.addKey(Phaser.Keyboard.S);
        left = game.input.keyboard.addKey(Phaser.Keyboard.A);
        right = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text(150, 15, "Get the watermelon", style );
        text.anchor.setTo( 0.5, 0.0 );
        
        walls = game.add.group();
     	walls.enableBody = true;
     	
     	var wall = walls.create(0,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(100,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(200,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(500,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(600,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(700,game.world.height - 100,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(280,game.world.height - 200,'walltwo');
     	wall.body.immovable = true;
     	var wall = walls.create(500,game.world.height - 200,'walltwo');
     	wall.body.immovable = true;
     	var wall = walls.create(200,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(500,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(100,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(600,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(0,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(700,game.world.height - 200,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(300,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(400,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(200,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(500,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(100,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(600,game.world.height - 300,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(0,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(100,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(200,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(500,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(600,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(700,game.world.height - 400,'wall');
     	wall.body.immovable = true;
     	var wall = walls.create(280,game.world.height - 500,'walltwo');
     	wall.body.immovable = true
     	var wall = walls.create(500,game.world.height - 500,'walltwo');
     	wall.body.immovable = true;
     	
     	watermelon = game.add.sprite(400,0,'watermelon');
     	game.physics.enable( watermelon, Phaser.Physics.ARCADE );
     	h = game.input.keyboard.addKey(Phaser.Keyboard.H);
     	start = game.add.sprite(0,0,'start');
    }
    
    function update() 
    {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        game.physics.arcade.collide(player,walls);
        game.physics.arcade.collide(playertwo,walls);
        game.physics.arcade.collide(player,playertwo);
        game.physics.arcade.collide(playertwo,player);
        player.animations.stop();
        playertwo.animations.stop();
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        playertwo.body.velocity.y = 0;
        playertwo.body.velocity.x = 0;
        
        if (cursors.left.isDown)
        {
        player.body.velocity.x = -150;
        player.animations.play('left');
        }
        else if(cursors.right.isDown)
        {
        player.body.velocity.x = 150;
        player.animations.play('right');
        }
        else if(cursors.up.isDown)
        {
        player.body.velocity.y = -150;
        }
        else if(cursors.down.isDown)
        {
        player.body.velocity.y = 150;
        }
        else
        {
        player.animations.stop();
        }
        if (up.isDown)
        {
        playertwo.body.velocity.y = -150;
        playertwo.animations.play('up');
        }
        else if (down.isDown)
        {
        playertwo.body.velocity.y = 150;
        playertwo.animations.play('down');
        } 
        else if (right.isDown)
        {
        playertwo.body.velocity.x = 150;
        playertwo.animations.play('right');
        }
        else if (left.isDown)
        {
        playertwo.body.velocity.x = -150;
        playertwo.animations.play('left');
        }
        else
        {
        playertwo.animations.stop();
        }
        
        if(h.isDown)
        {
        start.kill();
        }
        
       game.physics.arcade.overlap(player,watermelon , onewin, null, this);
       game.physics.arcade.overlap(playertwo,watermelon, twowin, null, this);
    //end of update  
    }
};
