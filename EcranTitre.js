var keys;

class EcranTitre extends Phaser.Scene{
    constructor(){
        super("ecranTitre");
        this.pad = null;
    }
    init(data){
    }
    preload(){   

    }
    create(){
        
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
        
        /*var button_play = this.add.sprite(608, 300, 'play_button').setInteractive();
        var button_credits = this.add.sprite(458, 460, 'credits_button').setInteractive();
        var button_options = this.add.sprite(758, 460, 'options_button').setInteractive();*/
        
        
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
        
    }
    update(){

    }
}
