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

//demandes//
var demande_eau;
var demande_soleil;
var demande_oxygene;
var demande_terreau;

//plantes//
var plante_carnivore;
var plante_astronaute;
var plante_meteo;
var plante_scientifique;
var plante_banquiere;
var plante_exploratrice;
var plante_coffre;
var new_plante_astronaute;
var new_plante_meteo;
var new_plante_scientifique;
var new_plante_banquiere;
var new_plante_exploratrice;
var new_plante_coffre;

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

//rng coffre//
var numero_coffre;
var coffre_genere = false;

//proc banquier//
var proc_banquier = false;
var proc_200 = false;
var proc_400 = false;
var proc_600 = false;
var banquier_doit_partir = false;

//temporalite//
var jour = 0;
var texte_jour;
var compteur_rencontre = 0;

//objectif espace//
var objectif = 0;

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
        picto_soleil = this.add.sprite(120, 390, 'picto_soleil');
        picto_terreau = this.add.sprite(190, 390, 'picto_terreau');
        picto_oxygene = this.add.sprite(260, 390, 'picto_oxygene');
        picto_population = this.add.sprite(330, 390, 'picto_population');

        
        //pictos ressources demandees//
        demande_eau = this.add.sprite(650, 120, 'picto_eau').setVisible(false);
        demande_soleil = this.add.sprite(650, 180, 'picto_soleil').setVisible(false);
        demande_oxygene = this.add.sprite(650, 240, 'picto_oxygene').setVisible(false);
        demande_terreau = this.add.sprite(650, 300, 'picto_terreau').setVisible(false);
              
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
            if (plante_presente == true && numero_random == 0 && plante_cree == true && proc_banquier == false){
                eau = eau - 1;
                soleil = soleil - 1;
                oxygene = oxygene + 1;
                terreau = terreau +1;
                new_plante_exploratrice.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_exploratrice();       
            }
            if (plante_presente == true && numero_random == 1 && plante_cree == true && proc_banquier == false){
                oxygene = oxygene - 1;
                objectif = objectif + 1;
                new_plante_astronaute.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_astronaute();
            }
            if (plante_presente == true && numero_random == 2 && plante_cree == true && proc_banquier == false){
                if (numero_coffre == 0){
                    eau = eau + 1;
                }
                if (numero_coffre == 1){
                    eau = eau - 1;
                }
                if (numero_coffre == 2){
                    soleil = soleil + 1;
                }
                if (numero_coffre == 3){
                    soleil = soleil - 1;
                }
                if (numero_coffre == 4){
                    oxygene = oxygene + 1;
                }
                if (numero_coffre == 5){
                    oxygene = oxygene - 1;
                }
                if (numero_coffre == 6){
                    terreau = terreau + 1;
                }
                if (numero_coffre == 7){
                    terreau = terreau - 1;
                }
                if (numero_coffre == 8){
                    population = population + 1;
                }
                if (numero_coffre == 9){
                    population = population - 1;
                }
                new_plante_coffre.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_coffre();
            }
            if (plante_presente == true && numero_random == 3 && plante_cree == true && proc_banquier == false){
                eau = eau + 1;
                soleil = soleil + 1;
                oxygene = oxygene - 2;
                new_plante_meteo.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_meteo();
            }
            if (plante_presente == true && numero_random == 4 && plante_cree == true && proc_banquier == false){
                terreau = terreau - 1;
                objectif = objectif + 1;
                new_plante_scientifique.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_scientifique();
            }
            if(banquier_doit_partir == true){
                new_plante_banquiere.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_banquier();
            }

        }, this);
        
        bouton_non.on('pointerdown', function(){
            bouton_oui.setVisible(false);
            bouton_non.setVisible(false);
            if (plante_presente == true && numero_random == 0 && plante_cree == true && proc_banquier == false){
                new_plante_exploratrice.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_exploratrice();
            }
            if (plante_presente == true && numero_random == 1 && plante_cree == true && proc_banquier == false){
                new_plante_astronaute.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_astronaute();
            }
            if (plante_presente == true && numero_random == 2 && plante_cree == true && proc_banquier == false){
                new_plante_coffre.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_coffre();
            }
            if (plante_presente == true && numero_random == 3 && plante_cree == true && proc_banquier == false){
                new_plante_meteo.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_meteo();
            }
            if (plante_presente == true && numero_random == 4 && plante_cree == true && proc_banquier == false){
                new_plante_scientifique.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_scientifique();
            }
        }, this);
        
        
    }
    update(){
        
        //objectif atteint//
        if (objectif == 10){
            plante_presente = true;
            plante_cree = true;
            banquier_doit_partir = true;
            this.add.texte(400, 200, 'youpi direction espace', {fontSize: '48px', fill: '#FFF'});
        }
        
        if(plante_presente == true && plante_cree == true && numero_random == 2 && coffre_genere == false && proc_banquier == false){
            coffre_genere = true;
            numero_coffre = getRandomInt(9);
        }
        
        
        //generation aléatoire//
        if (plante_presente == false && keys.space.isDown){
            plante_presente = true;
            numero_random = getRandomInt(5);
            compteur_rencontre = compteur_rencontre + 1;
        }
        
        //arrivee plantes a l'ecran
        if (plante_presente == true && numero_random == 0 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_cree = true;
            new_plante_exploratrice = plante_exploratrice.create(1400, 200, 'plante_exploratrice');
            new_plante_exploratrice.setVelocityX(-300);
            setTimeout(function(){
                new_plante_exploratrice.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_eau.setVisible(true);
                demande_soleil.setVisible(true);
                demande_oxygene.setVisible(true);
                demande_terreau.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 1 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_cree = true;
            new_plante_astronaute = plante_astronaute.create(1400, 200, 'plante_astronaute');
            new_plante_astronaute.setVelocityX(-300);
            setTimeout(function(){
                new_plante_astronaute.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_oxygene.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 2 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_cree = true;
            new_plante_coffre = plante_coffre.create(1400, 200, 'plante_coffre');
            new_plante_coffre.setVelocityX(-300);
            setTimeout(function(){
                new_plante_coffre.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 3 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_cree = true;
            new_plante_meteo = plante_meteo.create(1400, 200, 'plante_meteo');
            new_plante_meteo.setVelocityX(-300);
            setTimeout(function(){
                new_plante_meteo.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_eau.setVisible(true);
                demande_soleil.setVisible(true);
                demande_oxygene.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 4 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_cree = true;
            new_plante_scientifique = plante_scientifique.create(1400, 200, 'plante_scientifique');
            new_plante_scientifique.setVelocityX(-300);
            setTimeout(function(){
                new_plante_scientifique.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_terreau.setVisible(true);
            }, 2000);
        }
        
        //reset journee//
        if(compteur_rencontre == 4 && banquier_doit_partir == false){
            proc_banquier = true;
            plante_presente = true;
            plante_cree = true;
            banquier_doit_partir = true;
            new_plante_banquiere = plante_banquiere.create(1400, 200, 'plante_banquiere');
            new_plante_banquiere.setVelocityX(-300);
            setTimeout(function(){
                new_plante_banquiere.setVelocityX(0);
                bouton_oui.setVisible(true);
            }, 2000);
        }
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function remove_exploratrice(){
    setTimeout(function(){
        new_plante_exploratrice.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_astronaute(){
    setTimeout(function(){
        new_plante_astronaute.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_coffre(){
    setTimeout(function(){
        new_plante_coffre.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_meteo(){
    setTimeout(function(){
        new_plante_meteo.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_scientifique(){
    setTimeout(function(){
        new_plante_scientifique.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_banquier(){
    setTimeout(function(){
        new_plante_banquiere.destroy();
        banquier_doit_partir = false;
        proc_banquier = false;
        plante_presente = false;
        plante_cree = false;
            
    }, 2000);
    compteur_rencontre = 0;  
    jour = jour + 1;
    if (eau + soleil >= 2 && eau + soleil < 4){
        oxygene = oxygene + 2;
    }
    if (eau + soleil >= 4 && eau + soleil < 6){
        oxygene = oxygene + 4;
    }
    if (eau + soleil >= 6){
        oxygene = oxygene + 6;
    }
}