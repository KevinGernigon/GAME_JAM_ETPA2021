//ressources//
var eau = 0;
var soleil = 0;
var oxygene = 0;
var terreau = 0;
var population = 0;
var texte_eau;
var texte_soleil;
var texte_terreau;
var texte_oxygene;
var texte_population;

//plantes//
var plante_carnivore;
var plante_astronaute;
var plante_meteo;
var plante_scientifique;
var plante_banquiere;
var plante_exploratrice;
var plante_coffre;

//generation aléa et booleans pour check//
var plante_presente = false;
var plante_cree = false;
var arrivee_plante_random;
var numero_random;

//boutons//
var bouton_oui;
var bouton_non;

//pictos//
var picto_eau;
var picto_soleil;
var picto_oxygene;
var picto_terreau;
var picto_population;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }
    preload(){
        //assets plantes//
        this.load.image('plante_carnivore', '_assets/placeholder_plante_carnivore.png');
        this.load.image('plante_astronaute', '_assets/placeholder_plante_astronaute.png');
        this.load.image('plante_meteo', '_assets/placeholder_plante_meteorologiste.png');
        this.load.image('plante_scientifique', '_assets/placeholder_plante_scientifique.png');
        this.load.image('plante_banquiere', '_assets/placeholder_plante_banquiere.png');
        this.load.image('plante_exploratrice', '_assets/placeholder_plante_exploratrice.png');
        this.load.image('plante_coffre', '_assets/placeholder_plante_coffre.png');
        
        //assets picto//
        this.load.image('picto_eau', '_assets/picto_eau.png');
        this.load.image('picto_soleil', '_assets/picto_soleil.png');
        this.load.image('picto_terreau', '_assets/picto_terrau.png');
        this.load.image('picto_oxygene', '_assets/picto_oxygene.png');
        this.load.image('picto_population', '_assets/picto_population.png');
        
        //assets boutons//
        this.load.image('bouton_oui', '_assets/bouton_oui.png');
        this.load.image('bouton_non', '_assets/bouton_non.png');
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
        
        //ressources hud//
        picto_eau = this.add.sprite(50, 390, 'picto_eau');
        texte_eau = this.add.text(70, 382, eau, {fontSize: '20px', fill: '#FFF'});
        
        picto_soleil = this.add.sprite(120, 390, 'picto_soleil');
        texte_soleil = this.add.text(140, 382, soleil, {fontSize: '20px', fill: '#FFF'});
        
        picto_terreau = this.add.sprite(190, 390, 'picto_terreau');
        texte_terreau = this.add.text(210, 382, terreau, {fontSize: '20px', fill: '#FFF'});
        
        picto_oxygene = this.add.sprite(260, 390, 'picto_oxygene');
        texte_oxygene = this.add.text(280, 382, oxygene, {fontSize: '20px', fill: '#FFF'});
        
        picto_population = this.add.sprite(330, 390, 'picto_population');
        texte_population =this.add.text(350, 382, population, {fontSize: '20px', fill: '#FFF'});
        
        //assets//
        plante_carnivore = this.add.sprite(100, 200, 'plante_carnivore');
        
        plante_astronaute = this.physics.add.group();
        plante_meteo = this.physics.add.group();
        plante_scientifique = this.physics.add.group();
        plante_banquiere = this.physics.add.group();
        plante_exploratrice = this.physics.add.group();
        plante_coffre = this.physics.add.group();
        
        //boutons//
        bouton_oui = this.add.sprite(200, 150, 'bouton_oui').setVisible(false);
        bouton_non = this.add.sprite(200, 250, 'bouton_non').setVisible(false);
        bouton_oui.setInteractive();
        bouton_non.setInteractive();
        
        bouton_oui.on('pointerdown', function(){
            bouton_oui.setVisible(false);
            bouton_non.setVisible(false);
            if (plante_presente == true && numero_random == 0 && plante_cree == true){
                terreau = terreau + 50;
                oxygene = oxygene - 50;
            }
            if (plante_presente == true && numero_random == 1 && plante_cree == true){
                oxygene = oxygene -100;
            }
            if (plante_presente == true && numero_random == 2 && plante_cree == true){
                terreau = terreau + 50;
                oxygene = oxygene - 50;
            }
            if (plante_presente == true && numero_random == 3 && plante_cree == true){
                terreau = terreau + 50;
                oxygene = oxygene - 50;
            }
            if (plante_presente == true && numero_random == 4 && plante_cree == true){
                terreau = terreau + 50;
                oxygene = oxygene - 50;
            }
            if (plante_presente == true && numero_random == 5 && plante_cree == true){
                terreau = terreau + 50;
                oxygene = oxygene - 50;
            }
        }, this);
        
        bouton_non.on('pointerdown', function(){
            bouton_oui.setVisible(false);
            bouton_non.setVisible(false);
        }, this);
        
        
    }
    update(){
        
        //refresh texte ressources//
        texte_eau.setText(eau);
        texte_soleil.setText(soleil);
        texte_terreau.setText(terreau);
        texte_oxygene.setText(oxygene);
        texte_population.setText(population);
        
        //generation aléatoire//
        if (plante_presente == false && keys.space.isDown){
            plante_presente = true;
            numero_random = getRandomInt(6);
        }
        
        if (plante_presente == true && numero_random == 0 && plante_cree == false){
            plante_cree = true;
            plante_exploratrice.create(1400, 200, 'plante_exploratrice');
            plante_exploratrice.setVelocityX(-300);
            setTimeout(function(){
                plante_exploratrice.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 1 && plante_cree == false){
            plante_cree = true;
            plante_astronaute.create(1400, 200, 'plante_astronaute');
            plante_astronaute.setVelocityX(-300);
            setTimeout(function(){
                plante_astronaute.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 2 && plante_cree == false){
            plante_cree = true;
            plante_banquiere.create(1400, 200, 'plante_banquiere');
            plante_banquiere.setVelocityX(-300);
            setTimeout(function(){
                plante_banquiere.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 3 && plante_cree == false){
            plante_cree = true;
            plante_coffre.create(1400, 200, 'plante_coffre');
            plante_coffre.setVelocityX(-300);
            setTimeout(function(){
                plante_coffre.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 4 && plante_cree == false){
            plante_cree = true;
            plante_meteo.create(1400, 200, 'plante_meteo');
            plante_meteo.setVelocityX(-300);
            setTimeout(function(){
                plante_meteo.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 5 && plante_cree == false){
            plante_cree = true;
            plante_scientifique.create(1400, 200, 'plante_scientifique');
            plante_scientifique.setVelocityX(-300);
            setTimeout(function(){
                plante_scientifique.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}