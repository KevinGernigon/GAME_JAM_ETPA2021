var keys;

var bouton_jouer;
var bouton_quitter;
var bouton_credits;

var background_titre;

var ecran_credits;
var deroulement = false;

var musique_generique

class EcranTitre extends Phaser.Scene{
    constructor(){
        super("ecranTitre");
        this.pad = null;
    }
    init(data){
    }
    preload(){   
        this.load.image('ecran_titre', '_assets/_ecranTitre/ecranTitre.png');
        this.load.spritesheet('spritesheet_manette', '_assets/_ecranTitre/spritehseet_manette.png',{frameWidth: 110 , frameHeight:106});
        this.load.spritesheet('spritesheet_quitter', '_assets/_ecranTitre/spritehseet_quitter.png',{frameWidth:100 , frameHeight:100});
        this.load.spritesheet('spritesheet_credits', '_assets/_ecranTitre/credits_spritesheet.png',{frameWidth:101 , frameHeight:101});
        this.load.image('generique', '_assets/_ecranTitre/generique.png');
        this.load.audio('son_generique', '_sounds/musiqueGenerique.mp3');
    }
    create(){
        
        musique_generique = this.sound.add('son_generique');
        
        background_titre = this.add.image(640, 216, 'ecran_titre');
        
        //controles//
        keys = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            up : Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shift: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            escape : Phaser.Input.Keyboard.KeyCodes.ESC
        });
        //manette//
        this.anims.create({
            key:'manette',
            frames: this.anims.generateFrameNumbers('spritesheet_manette', {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key:'manette_hover',
            frames: this.anims.generateFrameNumbers('spritesheet_manette', {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key:'manette_click',
            frames: this.anims.generateFrameNumbers('spritesheet_manette', {start: 2, end: 2}),
            repeat: -1
        });
        
        //quitter//
        this.anims.create({
            key:'quitter',
            frames: this.anims.generateFrameNumbers('spritesheet_quitter', {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key:'quitter_hover',
            frames: this.anims.generateFrameNumbers('spritesheet_quitter', {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key:'quitter_click',
            frames: this.anims.generateFrameNumbers('spritesheet_quitter', {start: 2, end: 2}),
            repeat: -1
        });
        
        //credits//
        this.anims.create({
            key:'credits',
            frames: this.anims.generateFrameNumbers('spritesheet_credits', {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key:'credits_hover',
            frames: this.anims.generateFrameNumbers('spritesheet_credits', {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key:'credits_click',
            frames: this.anims.generateFrameNumbers('spritesheet_credits', {start: 2, end: 2}),
            repeat: -1
        });
        
        bouton_jouer = this.add.sprite(470, 250, 'spritesheet_manette').setInteractive();
        bouton_credits = this.add.sprite(640, 250, 'spritesheet_credits').setInteractive();
        bouton_quitter = this.add.sprite(810, 250, 'spritesheet_quitter').setInteractive();
        
        //jouer//
        bouton_jouer.on('pointerover', function(){
            bouton_jouer.anims.play('manette_hover', true);
        });
        
        bouton_jouer.on('pointerout', function(){
            bouton_jouer.anims.play('manette', true);
        });
        
        bouton_jouer.on('pointerdown', function(){
            bouton_jouer.anims.play('manette_click', true);
            this.scene.start('sceneOne');
        }, this);
        
        //credits//
        bouton_credits.on('pointerover', function(){
            bouton_credits.anims.play('credits_hover', true);
        });
        
        bouton_credits.on('pointerout', function(){
            bouton_credits.anims.play('credits', true);
        });
        
        bouton_credits.on('pointerdown', function(){
            musique_generique.play();
            bouton_credits.anims.play('credits_click', true);
            ecran_credits.setVisible(true);
            deroulement = true;
            //this.scene.start('sceneOne');
        }, this);
        
        //quitter//
        bouton_quitter.on('pointerover', function(){
            bouton_quitter.anims.play('quitter_hover', true);
        });
        
        bouton_quitter.on('pointerout', function(){
            bouton_quitter.anims.play('quitter', true);
        });
        
        bouton_quitter.on('pointerdown', function(){
            bouton_quitter.anims.play('quitter_click', true);
            return;
        }, this);
        /*button_play.on('pointerdown', function(){
            if (surCredits == false && surOptions == false){
                this.scene.start("sceneOne");
            }
        }, this);

        button_options.on('pointerdown', function(){
            ecran_controles.setVisible(true);
            surOptions = true;
        });

        button_credits.on('pointerdown', function(){
            ecran_credits.setVisible(true);
            surCredits = true;
        })*/
        ecran_credits = this.physics.add.sprite(640, 1400, 'generique').setVisible(false);
    }
    update(){
        if (deroulement == true){
            ecran_credits.setVelocityY(-100);
            setTimeout(function(){
                ecran_credits.destroy();
                deroulement = false;
            }, 24000);
        }
    }
}
