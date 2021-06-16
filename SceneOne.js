var keys;

//ressources//
var eau = 5;
var soleil = 5;
var oxygene = 5;
var terreau = 5;
var population = 5;
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
var new_plante_banquiere_2;
var new_plante_banquiere_3;
var new_plante_exploratrice;
var new_plante_coffre;

//generation aléa des pnj et booleans pour check//
var plante_presente = false;
var plante_cree = false;
var arrivee_plante_random;
var numero_random;
var numero_random_2;

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
var rng_coffre_genere = false;

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

//hud aled//
var affichage_hud;
var fleche;
var hud_affiche = false;
var jauge_soleil_vide;
var jauge_soleil_1;
var jauge_soleil_2;
var jauge_soleil_3;
var jauge_soleil_4;
var jauge_soleil_5;
var jauge_soleil_6;
var jauge_soleil_7;
var jauge_soleil_8;
var jauge_soleil_9;
var jauge_soleil_10;
var jauge_eau_vide;
var jauge_eau_1;
var jauge_eau_2;
var jauge_eau_3;
var jauge_eau_4;
var jauge_eau_5;
var jauge_eau_6;
var jauge_eau_7;
var jauge_eau_8;
var jauge_eau_9;
var jauge_eau_10;
var jauge_terreau_vide;
var jauge_terreau_1;
var jauge_terreau_2;
var jauge_terreau_3;
var jauge_terreau_4;
var jauge_terreau_5;
var jauge_terreau_6;
var jauge_terreau_7;
var jauge_terreau_8;
var jauge_terreau_9;
var jauge_terreau_10;
var jauge_population_vide;
var jauge_population_1;
var jauge_population_2;
var jauge_population_3;
var jauge_population_4;
var jauge_population_5;
var jauge_population_6;
var jauge_population_7;
var jauge_population_8;
var jauge_population_9;
var jauge_population_10;
var jauge_objectif_vide;
var jauge_objectif_1;
var jauge_objectif_2;
var jauge_objectif_3;
var jauge_objectif_4;
var jauge_objectif_5;
var jauge_objectif_6;
var jauge_objectif_7;
var jauge_objectif_8;
var jauge_objectif_9;
var jauge_objectif_10;
var jauge_oxygene_vide;
var jauge_oxygene_1;
var jauge_oxygene_2;
var jauge_oxygene_3;
var jauge_oxygene_4;
var jauge_oxygene_5;
var jauge_oxygene_6;
var jauge_oxygene_7;
var jauge_oxygene_8;
var jauge_oxygene_9;
var jauge_oxygene_10;
var picto_hud_eau;
var picto_hud_soleil;
var picto_hud_terreau;
var picto_hud_population;
var picto_hud_oxygene;
var picto_hud_objectif;

//anti cheese//
var compteur_refus = 0;

//background//
var background_1;
var background_2;
var background_3;
var background_4;
var background_5;
var background_6;
var background_7;
var background_8;
var background_9;

//vitre//
var compteur_vitre = 0;
var vitre_1;
var vitre_2;
var vitre_3;
var vitre_4;
var vitre_5;

//disjoncteur//
var compteur_disjoncteur = 0;
var disjoncteur_1;
var disjoncteur_2;
var disjoncteur_3;
var disjoncteur_4;
var disjoncteur_5;

//gameover//
var gameOver = false;
var new_plante_astronaute_2;
var new_plante_meteo_2;
var new_plante_scientifique_2;
var new_plante_exploratrice_2;
var new_plante_coffre_2;
var new_plante_banquiere_4;
var ecran_noir;
var plante_exploratrice_presente = false;
var plante_meteo_presente = false;
var plante_coffre_presente = false;
var plante_scientifique_presente = false;
var plante_astronaute_presente = false;
var plante_banquiere_presente = false;
var plante_banquiere_2_presente = false;
var plante_banquiere_3_presente = false;

var fleche_utilisee = false;

var ecran_titre_2;
var blackscreen;

var deroulement_commence = false;
var deroulement_2 = false;

//musique//
var theme_musique;
var ambiance_musique;
var son_generique;
var son_defaite;
var son_victoire;

class SceneOne extends Phaser.Scene{
    constructor(){
        super("sceneOne");
        this.pad = null;
    }
    init(data){
    }
    preload(){
        //assets plantes//
        this.load.image('plante_carnivore', '_assets/_perso/reine.png');
        this.load.image('plante_astronaute', '_assets/_perso/astronaute.png');
        this.load.image('plante_meteo', '_assets/_perso/meteorologiste.png');
        this.load.image('plante_scientifique', '_assets/_perso/scientifique.png');
        this.load.image('plante_banquiere', '_assets/_perso/banquiere.png');
        this.load.image('plante_exploratrice', '_assets/_perso/exploratrice.png');
        this.load.image('plante_coffre', '_assets/_perso/sac.png');
        
        //assets picto//
        this.load.image('picto_eau', '_assets/_ui/eau.png');
        this.load.image('picto_soleil', '_assets/_ui/soleil.png');
        this.load.image('picto_terreau', '_assets/_ui/terreau.png');
        this.load.image('picto_oxygene', '_assets/_ui/O2.png');
        this.load.image('picto_population', '_assets/_ui/population.png');
        
        //assets boutons//
        this.load.image('bouton_oui', '_assets/_ui/pouceVert.png');
        this.load.image('bouton_non', '_assets/_ui/pouceRouge.png');
        
        //hud//
        this.load.image('hud', '_assets/_ui/zoneJauge.png');
        this.load.image('jauge_vide', '_assets/_ui/jauge_vide.png');
        this.load.image('jauge_1', '_assets/_ui/jauge_1.png');
        this.load.image('jauge_2', '_assets/_ui/jauge_2.png');
        this.load.image('jauge_3', '_assets/_ui/jauge_3.png');
        this.load.image('jauge_4', '_assets/_ui/jauge_4.png');
        this.load.image('jauge_5', '_assets/_ui/jauge_5.png');
        this.load.image('jauge_6', '_assets/_ui/jauge_6.png');
        this.load.image('jauge_7', '_assets/_ui/jauge_7.png');
        this.load.image('jauge_8', '_assets/_ui/jauge_8.png');
        this.load.image('jauge_9', '_assets/_ui/jauge_9.png');
        this.load.image('jauge_10', '_assets/_ui/jauge_10.png');
        this.load.spritesheet('fleche', '_assets/_ui/menuJauge_spritesheet.png', {frameWidth: 46, frameHeight: 46});
        
        //background//
        this.load.image('bg_jour_1', '_assets/_decor/fond_espace/jour1.png');
        this.load.image('bg_jour_2', '_assets/_decor/fond_espace/jour2.png');
        this.load.image('bg_jour_3', '_assets/_decor/fond_espace/jour3.png');
        this.load.image('bg_jour_4', '_assets/_decor/fond_espace/jour4.png');
        this.load.image('bg_jour_5', '_assets/_decor/fond_espace/jour5.png');
        this.load.image('bg_jour_6', '_assets/_decor/fond_espace/jour6.png');
        this.load.image('bg_jour_7', '_assets/_decor/fond_espace/jour7.png');
        this.load.image('bg_jour_8', '_assets/_decor/fond_espace/jour8.png');
        this.load.image('bg_jour_9', '_assets/_decor/fond_espace/jour9.png');
        
        //vitre//
        this.load.image('vitre_1', '_assets/_decor/etat_verre/vaisseau_casse4.png');
        this.load.image('vitre_2', '_assets/_decor/etat_verre/vaisseau_casse3.png');
        this.load.image('vitre_3', '_assets/_decor/etat_verre/vaisseau_casse2.png');
        this.load.image('vitre_4', '_assets/_decor/etat_verre/vaisseau_casse1.png');
        this.load.image('vitre_5', '_assets/_decor/etat_verre/vaisseau_casse0.png');
        
        //disjoncteur//
        this.load.image('disjoncteur_1', '_assets/_decor/etat_disjoncteur/niveau0.png');
        this.load.image('disjoncteur_2', '_assets/_decor/etat_disjoncteur/niveau1.png');
        this.load.image('disjoncteur_3', '_assets/_decor/etat_disjoncteur/niveau2.png');
        this.load.image('disjoncteur_4', '_assets/_decor/etat_disjoncteur/niveau3.png');
        this.load.image('disjoncteur_5', '_assets/_decor/etat_disjoncteur/niveau4.png');
        
        //ecran gameover//
        this.load.image('ecran_noir', '_assets/_ecranTitre/ecranDefaite.png');
        
        this.load.image('ecran_fin', '_assets/_ecranTitre/generique.png');
        
        this.load.image('blackscreen', '_assets/_ui/ecran_noir.jpg');
        
        //musiques//
        this.load.audio('ambiance_fond', '_sounds/ambianceFond.mp3');
        this.load.audio('ambiance_musique', '_sounds/musiqueFond.mp3');
        this.load.audio('son_generique', '_sounds/musiqueGenerique.mp3');
        this.load.audio('son_defaite', '_sounds/son_defaite.mp3');
        this.load.audio('son_victoire', '_sounds/son_victoire.mp3');
    }
    create(){
        
        //muisque//
        theme_musique = this.sound.add('ambiance_fond');
        ambiance_musique = this.sound.add('ambiance_musique');
        son_generique = this.sound.add('son_generique');
        son_defaite = this.sound.add('son_defaite');
        son_victoire = this.sound.add('son_victoire');
        theme_musique.loop = true;
        ambiance_musique.loop = true;
        
        theme_musique.play();
        ambiance_musique.play();
        
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
        
        //background//
        background_1 = this.add.image(640, 216, 'bg_jour_1').setVisible(false);
        background_2 = this.add.image(640, 216, 'bg_jour_2').setVisible(false);
        background_3 = this.add.image(640, 216, 'bg_jour_3').setVisible(false);
        background_4 = this.add.image(640, 216, 'bg_jour_4').setVisible(false);
        background_5 = this.add.image(640, 216, 'bg_jour_5').setVisible(false);
        background_6 = this.add.image(640, 216, 'bg_jour_6').setVisible(false);
        background_7 = this.add.image(640, 216, 'bg_jour_7').setVisible(false);
        background_8 = this.add.image(640, 216, 'bg_jour_8').setVisible(false);
        background_9 = this.add.image(640, 216, 'bg_jour_9').setVisible(false);
        
        //vitre//
        vitre_1 = this.add.image(640, 216, 'vitre_1').setVisible(false);
        vitre_2 = this.add.image(640, 216, 'vitre_2').setVisible(false);
        vitre_3 = this.add.image(640, 216, 'vitre_3').setVisible(false);
        vitre_4 = this.add.image(640, 216, 'vitre_4').setVisible(false);
        vitre_5 = this.add.image(640, 216, 'vitre_5').setVisible(false);
        
        //disjoncteur//
        disjoncteur_1 = this.add.image(550, 325, 'disjoncteur_1').setVisible(false);
        disjoncteur_2 = this.add.image(550, 325, 'disjoncteur_2').setVisible(false);
        disjoncteur_3 = this.add.image(550, 325, 'disjoncteur_3').setVisible(false);
        disjoncteur_4 = this.add.image(550, 325, 'disjoncteur_4').setVisible(false);
        disjoncteur_5 = this.add.image(550, 325, 'disjoncteur_5').setVisible(false);
        
        
        
        //ressources hud//
        picto_eau = this.add.sprite(50, 390, 'picto_eau').setVisible(false); 
        picto_soleil = this.add.sprite(120, 390, 'picto_soleil').setVisible(false);
        picto_terreau = this.add.sprite(190, 390, 'picto_terreau').setVisible(false);
        picto_oxygene = this.add.sprite(260, 390, 'picto_oxygene').setVisible(false);
        picto_population = this.add.sprite(330, 390, 'picto_population').setVisible(false);

        
        //pictos ressources demandees//
        demande_eau = this.add.sprite(650, 120, 'picto_eau').setVisible(false);
        demande_soleil = this.add.sprite(650, 180, 'picto_soleil').setVisible(false);
        demande_oxygene = this.add.sprite(650, 240, 'picto_oxygene').setVisible(false);
        demande_terreau = this.add.sprite(650, 300, 'picto_terreau').setVisible(false);
              
        //plantes//
        plante_carnivore = this.add.sprite(180, 220, 'plante_carnivore');
        
        plante_astronaute = this.physics.add.group();
        plante_meteo = this.physics.add.group();
        plante_scientifique = this.physics.add.group();
        plante_banquiere = this.physics.add.group();
        plante_exploratrice = this.physics.add.group();
        plante_coffre = this.physics.add.group();
        
        //boutons//
        bouton_oui = this.add.sprite(350, 150, 'bouton_oui').setVisible(false);
        bouton_non = this.add.sprite(350, 250, 'bouton_non').setVisible(false);
        bouton_oui.setInteractive();
        bouton_non.setInteractive();
        
        //hud//
        affichage_hud = this.add.image(640, 400, 'hud').setVisible(false);
        fleche = this.add.sprite(50, 350, 'fleche').setInteractive();
        
        this.anims.create({
            key:'fleche',
            frames: this.anims.generateFrameNumbers('fleche', {start: 0, end: 0}),
            repeat: -1
        });
        this.anims.create({
            key:'fleche_hover',
            frames: this.anims.generateFrameNumbers('fleche', {start: 1, end: 1}),
            repeat: -1
        });
        this.anims.create({
            key:'fleche_click',
            frames: this.anims.generateFrameNumbers('fleche', {start: 2, end: 2}),
            repeat: -1
        });
        
        fleche.on('pointerover', function(){
            fleche.anims.play('fleche_hover', true);
        });
        
        fleche.on('pointerout', function(){
            fleche.anims.play('fleche', true);
        });
        
        fleche.on('pointerdown', function(){
            fleche.anims.play('fleche_click', true);
            if(hud_affiche == false){
                hud_affiche = true;
            }
            else {
                hud_affiche = false;
            }
        }, this);
        //jauges BEAUCOUP DE JAUGES//
        //jauges eau//
        jauge_eau_vide = this.add.image(140, 400, 'jauge_vide').setVisible(false);
        jauge_eau_1 = this.add.image(140, 400, 'jauge_1').setVisible(false);
        jauge_eau_2 = this.add.image(140, 400, 'jauge_2').setVisible(false);
        jauge_eau_3 = this.add.image(140, 400, 'jauge_3').setVisible(false);
        jauge_eau_4 = this.add.image(140, 400, 'jauge_4').setVisible(false);
        jauge_eau_5 = this.add.image(140, 400, 'jauge_5').setVisible(false);
        jauge_eau_6 = this.add.image(140, 400, 'jauge_6').setVisible(false);
        jauge_eau_7 = this.add.image(140, 400, 'jauge_7').setVisible(false);
        jauge_eau_8 = this.add.image(140, 400, 'jauge_8').setVisible(false);
        jauge_eau_9 = this.add.image(140, 400, 'jauge_9').setVisible(false);
        jauge_eau_10 = this.add.image(140, 400, 'jauge_10').setVisible(false);
        //jauges soleil//
        jauge_soleil_vide = this.add.image(353, 400, 'jauge_vide').setVisible(false);
        jauge_soleil_1 = this.add.image(353, 400, 'jauge_1').setVisible(false);
        jauge_soleil_2 = this.add.image(353, 400, 'jauge_2').setVisible(false);
        jauge_soleil_3 = this.add.image(353, 400, 'jauge_3').setVisible(false);
        jauge_soleil_4 = this.add.image(353, 400, 'jauge_4').setVisible(false);
        jauge_soleil_5 = this.add.image(353, 400, 'jauge_5').setVisible(false);
        jauge_soleil_6 = this.add.image(353, 400, 'jauge_6').setVisible(false);
        jauge_soleil_7 = this.add.image(353, 400, 'jauge_7').setVisible(false);
        jauge_soleil_8 = this.add.image(353, 400, 'jauge_8').setVisible(false);
        jauge_soleil_9 = this.add.image(353, 400, 'jauge_9').setVisible(false);
        jauge_soleil_10 = this.add.image(353, 400, 'jauge_10').setVisible(false);
        //jauges oxygene//
        jauge_oxygene_vide = this.add.image(566, 400, 'jauge_vide').setVisible(false);
        jauge_oxygene_1 = this.add.image(566, 400, 'jauge_1').setVisible(false);
        jauge_oxygene_2 = this.add.image(566, 400, 'jauge_2').setVisible(false);
        jauge_oxygene_3 = this.add.image(566, 400, 'jauge_3').setVisible(false);
        jauge_oxygene_4 = this.add.image(566, 400, 'jauge_4').setVisible(false);
        jauge_oxygene_5 = this.add.image(566, 400, 'jauge_5').setVisible(false);
        jauge_oxygene_6 = this.add.image(566, 400, 'jauge_6').setVisible(false);
        jauge_oxygene_7 = this.add.image(566, 400, 'jauge_7').setVisible(false);
        jauge_oxygene_8 = this.add.image(566, 400, 'jauge_8').setVisible(false);
        jauge_oxygene_9 = this.add.image(566, 400, 'jauge_9').setVisible(false);
        jauge_oxygene_10 = this.add.image(566, 400, 'jauge_10').setVisible(false);
        //jauges terreau//
        jauge_terreau_vide = this.add.image(779, 400, 'jauge_vide').setVisible(false);
        jauge_terreau_1 = this.add.image(779, 400, 'jauge_1').setVisible(false);
        jauge_terreau_2 = this.add.image(779, 400, 'jauge_2').setVisible(false);
        jauge_terreau_3 = this.add.image(779, 400, 'jauge_3').setVisible(false);
        jauge_terreau_4 = this.add.image(779, 400, 'jauge_4').setVisible(false);
        jauge_terreau_5 = this.add.image(779, 400, 'jauge_5').setVisible(false);
        jauge_terreau_6 = this.add.image(779, 400, 'jauge_6').setVisible(false);
        jauge_terreau_7 = this.add.image(779, 400, 'jauge_7').setVisible(false);
        jauge_terreau_8 = this.add.image(779, 400, 'jauge_8').setVisible(false);
        jauge_terreau_9 = this.add.image(779, 400, 'jauge_9').setVisible(false);
        jauge_terreau_10 = this.add.image(779, 400, 'jauge_10').setVisible(false);
        //jauges population//
        jauge_population_vide = this.add.image(992, 400, 'jauge_vide').setVisible(false);
        jauge_population_1 = this.add.image(992, 400, 'jauge_1').setVisible(false);
        jauge_population_2 = this.add.image(992, 400, 'jauge_2').setVisible(false);
        jauge_population_3 = this.add.image(992, 400, 'jauge_3').setVisible(false);
        jauge_population_4 = this.add.image(992, 400, 'jauge_4').setVisible(false);
        jauge_population_5 = this.add.image(992, 400, 'jauge_5').setVisible(false);
        jauge_population_6 = this.add.image(992, 400, 'jauge_6').setVisible(false);
        jauge_population_7 = this.add.image(992, 400, 'jauge_7').setVisible(false);
        jauge_population_8 = this.add.image(992, 400, 'jauge_8').setVisible(false);
        jauge_population_9 = this.add.image(992, 400, 'jauge_9').setVisible(false);
        jauge_population_10 = this.add.image(992, 400, 'jauge_10').setVisible(false);
        //jauges objectif//
        jauge_objectif_vide = this.add.image(1205, 400, 'jauge_vide').setVisible(false);
        jauge_objectif_1 = this.add.image(1205, 400, 'jauge_1').setVisible(false);
        jauge_objectif_2 = this.add.image(1205, 400, 'jauge_2').setVisible(false);
        jauge_objectif_3 = this.add.image(1205, 400, 'jauge_3').setVisible(false);
        jauge_objectif_4 = this.add.image(1205, 400, 'jauge_4').setVisible(false);
        jauge_objectif_5 = this.add.image(1205, 400, 'jauge_5').setVisible(false);
        jauge_objectif_6 = this.add.image(1205, 400, 'jauge_6').setVisible(false);
        jauge_objectif_7 = this.add.image(1205, 400, 'jauge_7').setVisible(false);
        jauge_objectif_8 = this.add.image(1205, 400, 'jauge_8').setVisible(false);
        jauge_objectif_9 = this.add.image(1205, 400, 'jauge_9').setVisible(false);
        jauge_objectif_10 = this.add.image(1205, 400, 'jauge_10').setVisible(false);
        
        //pictos hud//
        picto_hud_eau = this.add.image(40, 400, 'picto_eau').setVisible(false);
        picto_hud_soleil = this.add.image(250, 400, 'picto_soleil').setVisible(false);
        picto_hud_oxygene = this.add.image(460, 400, 'picto_oxygene').setVisible(false);
        picto_hud_terreau = this.add.image(675, 400, 'picto_terreau').setVisible(false);
        picto_hud_population = this.add.image(885, 400, 'picto_population').setVisible(false);
        picto_hud_objectif = this.add.image(1095, 400, 'picto_eau').setVisible(false);
        
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
                compteur_vitre = compteur_vitre + 1;
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
                rng_coffre_genere = false;
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
                compteur_disjoncteur = compteur_disjoncteur + 1;
                new_plante_scientifique.setVelocityX(300);
                demande_eau.setVisible(false);
                demande_soleil.setVisible(false);
                demande_terreau.setVisible(false);
                demande_oxygene.setVisible(false);
                remove_scientifique();
            }
            if(banquier_doit_partir == true){
                new_plante_banquiere.setVelocityX(300);
                if(compteur_refus >= 3){
                    new_plante_banquiere_2.setVelocityX(300);
                    new_plante_banquiere_3.setVelocityX(300);
                }
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
            compteur_refus = compteur_refus + 1;
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
        
        //ecran game_over//
        ecran_noir = this.add.image(640, 216, 'ecran_noir').setVisible(false);
        ecran_titre_2 = this.physics.add.sprite(640, 1400, 'generique').setVisible(false);
        blackscreen = this.add.image(640, 216, 'blackscreen').setVisible(false);
        
    }
    update(){
        
        //rng coffre//
        if (rng_coffre_genere == false){
            rng_coffre_genere = true;
            numero_coffre = getRandomInt(9);
        }
        
        //gameOver//
        if (gameOver == false){
            if (eau <= 0 || oxygene <= 0 || population <= 0 || soleil <= 0 || terreau <= 0){
                theme_musique.stop();
                ambiance_musique.stop();
                son_defaite.play();
                gameOver = true;
                plante_presente = true;
                plante_cree = true;
                new_plante_exploratrice_2 = plante_exploratrice.create(1400, 300, 'plante_exploratrice');
                new_plante_exploratrice_2.setVelocityX(-400);
                new_plante_astronaute_2 = plante_astronaute.create(1500, 300, 'plante_astronaute');
                new_plante_astronaute_2.setVelocityX(-400);
                new_plante_meteo_2 = plante_meteo.create(1600, 300, 'plante_meteo');
                new_plante_meteo_2.setVelocityX(-400);
                new_plante_coffre_2 = plante_coffre.create(1700, 300, 'plante_coffre');
                new_plante_coffre_2.setVelocityX(-400);
                new_plante_scientifique_2 = plante_scientifique.create(1800, 300, 'plante_scientifique');
                new_plante_scientifique_2.setVelocityX(-400);
                new_plante_banquiere_4 = plante_banquiere.create(1900, 300, 'plante_banquiere');
                new_plante_banquiere_4.setVelocityX(-400);
                if (plante_exploratrice_presente == true){
                    new_plante_exploratrice.destroy();
                }
                if (plante_astronaute_presente == true){
                    remove_astronaute();
                }
                if (plante_coffre_presente == true){
                    remove_coffre();
                }
                if (plante_meteo_presente == true){
                    remove_meteo();
                }
                if (plante_scientifique_presente == true){
                    remove_scientifique();
                }
                if (plante_banquiere_presente == true){
                    remove_banquiere();
                }
                /*if (plante_banquiere_2_presente == true){
                    new_plante_banquiere_2.destroy();
                }
                if (plante_banquiere_3_presente == true){
                    new_plante_banquiere_3.destroy();
                }*/
                setTimeout(function(){
                    ecran_noir.setVisible(true);
                    theme_musique.stop();
                    ambiance_musique.stop();
                }, 6000);
                setTimeout(function(){ 
                    eau = 5;
                    soleil = 5;
                    oxygene = 5;
                    terreau = 5;
                    population = 5;
                    plante_presente = false;
                    plante_cree = false;
                    numero_coffre;
                    coffre_genere = false;
                    proc_banquier = false;
                    proc_200 = false;
                    proc_400 = false;
                    proc_600 = false;
                    banquier_doit_partir = false;
                    plante_exploratrice_presente = false;
                    plante_meteo_presente = false;
                    plante_coffre_presente = false;
                    plante_scientifique_presente = false;
                    plante_astronaute_presente = false;
                    plante_banquiere_presente = false;
                    plante_banquiere_2_presente = false;
                    plante_banquiere_3_presente = false;
                    jour = 0;
                    compteur_rencontre = 0;
                    objectif = 0;
                    compteur_refus = 0;
                    compteur_vitre = 0;
                    compteur_disjoncteur = 0
                    gameOver = false;
                    ecran_noir.setVisible(false);
                    theme_musique.play();
                    ambiance_musique.play();
                }, 9000);
            }
        }
        
        //affichage background selon jour//
        if(jour == 0){
            background_9.setVisible(false);
            background_1.setVisible(true);
        }
        if(jour == 1){
            background_1.setVisible(false);
            background_2.setVisible(true);
        }
        if(jour == 2){
            background_2.setVisible(false);
            background_3.setVisible(true);
        }
        if(jour == 3){
            background_3.setVisible(false);
            background_4.setVisible(true);
        }
        if(jour == 4){
            background_4.setVisible(false);
            background_5.setVisible(true);
        }
        if(jour == 5){
            background_5.setVisible(false);
            background_6.setVisible(true);
        }
        if(jour == 6){
            background_6.setVisible(false);
            background_7.setVisible(true);
        }
        if(jour == 7){
            background_7.setVisible(false);
            background_8.setVisible(true);
        }
        if(jour == 8){
            background_8.setVisible(false);
            background_9.setVisible(true);
        }
        
        //affichage vitre//
        if(compteur_vitre == 0){
            vitre_1.setVisible(true);
            vitre_2.setVisible(false);
            vitre_3.setVisible(false);
            vitre_4.setVisible(false);
            vitre_5.setVisible(false);
        }
        if(compteur_vitre == 1){
            vitre_1.setVisible(false);
            vitre_3.setVisible(false);
            vitre_4.setVisible(false);
            vitre_5.setVisible(false);
            vitre_2.setVisible(true);
        }
        if(compteur_vitre == 2){
            vitre_1.setVisible(false);
            vitre_2.setVisible(false);
            vitre_4.setVisible(false);
            vitre_5.setVisible(false);
            vitre_3.setVisible(true);
        }
        if(compteur_vitre == 3){
            vitre_3.setVisible(false);
            vitre_1.setVisible(false);
            vitre_2.setVisible(false);
            vitre_5.setVisible(false);
            vitre_4.setVisible(true);
        }
        if(compteur_vitre == 4){
            vitre_4.setVisible(false);
            vitre_3.setVisible(false);
            vitre_2.setVisible(false);
            vitre_1.setVisible(false);
            vitre_5.setVisible(true);
        }
        
        //affichage disjoncteur//
        if(compteur_disjoncteur == 0){
            disjoncteur_5.setVisible(true);
            disjoncteur_1.setVisible(false);
            disjoncteur_2.setVisible(false);
            disjoncteur_3.setVisible(false);
            disjoncteur_4.setVisible(false);
        }
        if(compteur_disjoncteur == 1){
            disjoncteur_5.setVisible(false);
            disjoncteur_3.setVisible(false);
            disjoncteur_2.setVisible(false);
            disjoncteur_1.setVisible(false);
            disjoncteur_4.setVisible(true);
        }
        if(compteur_disjoncteur == 2){
            disjoncteur_4.setVisible(false);
            disjoncteur_1.setVisible(false);
            disjoncteur_2.setVisible(false);
            disjoncteur_5.setVisible(false);
            disjoncteur_3.setVisible(true);
        }
        if(compteur_disjoncteur == 3){
            disjoncteur_3.setVisible(false);
            disjoncteur_1.setVisible(false);
            disjoncteur_4.setVisible(false);
            disjoncteur_5.setVisible(false);
            disjoncteur_2.setVisible(true);
        }
        if(compteur_disjoncteur == 4){
            disjoncteur_2.setVisible(false);
            disjoncteur_3.setVisible(false);
            disjoncteur_4.setVisible(false);
            disjoncteur_5.setVisible(false);
            disjoncteur_1.setVisible(true);
        }
        
        //hud//
        if(hud_affiche == false){
            picto_hud_eau.setVisible(false);
            picto_hud_soleil.setVisible(false);
            picto_hud_oxygene.setVisible(false);
            picto_hud_terreau.setVisible(false);
            picto_hud_population.setVisible(false);
            picto_hud_objectif.setVisible(false);
            
            affichage_hud.setVisible(false);
            //eau//
            jauge_eau_vide.setVisible(false);
            jauge_eau_1.setVisible(false);
            jauge_eau_2.setVisible(false);
            jauge_eau_3.setVisible(false);
            jauge_eau_4.setVisible(false);
            jauge_eau_5.setVisible(false);
            jauge_eau_6.setVisible(false);
            jauge_eau_7.setVisible(false);
            jauge_eau_8.setVisible(false);
            jauge_eau_9.setVisible(false);
            jauge_eau_10.setVisible(false);
            //soleil//
            jauge_soleil_vide.setVisible(false);
            jauge_soleil_1.setVisible(false);
            jauge_soleil_2.setVisible(false);
            jauge_soleil_3.setVisible(false);
            jauge_soleil_4.setVisible(false);
            jauge_soleil_5.setVisible(false);
            jauge_soleil_6.setVisible(false);
            jauge_soleil_7.setVisible(false);
            jauge_soleil_8.setVisible(false);
            jauge_soleil_9.setVisible(false);
            jauge_soleil_10.setVisible(false);
            //oxygene//
            jauge_oxygene_vide.setVisible(false);
            jauge_oxygene_1.setVisible(false);
            jauge_oxygene_2.setVisible(false);
            jauge_oxygene_3.setVisible(false);
            jauge_oxygene_4.setVisible(false);
            jauge_oxygene_5.setVisible(false);
            jauge_oxygene_6.setVisible(false);
            jauge_oxygene_7.setVisible(false);
            jauge_oxygene_8.setVisible(false);
            jauge_oxygene_9.setVisible(false);
            jauge_oxygene_10.setVisible(false);
            //terreau//
            jauge_terreau_vide.setVisible(false);
            jauge_terreau_1.setVisible(false);
            jauge_terreau_2.setVisible(false);
            jauge_terreau_3.setVisible(false);
            jauge_terreau_4.setVisible(false);
            jauge_terreau_5.setVisible(false);
            jauge_terreau_6.setVisible(false);
            jauge_terreau_7.setVisible(false);
            jauge_terreau_8.setVisible(false);
            jauge_terreau_9.setVisible(false);
            jauge_terreau_10.setVisible(false);
            //population//
            jauge_population_vide.setVisible(false);
            jauge_population_1.setVisible(false);
            jauge_population_2.setVisible(false);
            jauge_population_3.setVisible(false);
            jauge_population_4.setVisible(false);
            jauge_population_5.setVisible(false);
            jauge_population_6.setVisible(false);
            jauge_population_7.setVisible(false);
            jauge_population_8.setVisible(false);
            jauge_population_9.setVisible(false);
            jauge_population_10.setVisible(false);
            //objectif//
            jauge_objectif_vide.setVisible(false);
            jauge_objectif_1.setVisible(false);
            jauge_objectif_2.setVisible(false);
            jauge_objectif_3.setVisible(false);
            jauge_objectif_4.setVisible(false);
            jauge_objectif_5.setVisible(false);
            jauge_objectif_6.setVisible(false);
            jauge_objectif_7.setVisible(false);
            jauge_objectif_8.setVisible(false);
            jauge_objectif_9.setVisible(false);
            jauge_objectif_10.setVisible(false);
        }
        else if (hud_affiche == true){
            picto_hud_eau.setVisible(true);
            picto_hud_soleil.setVisible(true);
            picto_hud_oxygene.setVisible(true);
            picto_hud_terreau.setVisible(true);
            picto_hud_population.setVisible(true);
            picto_hud_objectif.setVisible(true);
            
            affichage_hud.setVisible(true);
            //jauges eau//
            if(eau == 10){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(true);
            }
            if(eau == 9){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(true);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 8){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(true);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 7){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(true);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 6){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(true);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 5){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(true);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 4){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(true);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 3){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(true);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 2){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(true);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 1){
                jauge_eau_vide.setVisible(false);
                jauge_eau_1.setVisible(true);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            if(eau == 0){
                jauge_eau_vide.setVisible(true);
                jauge_eau_1.setVisible(false);
                jauge_eau_2.setVisible(false);
                jauge_eau_3.setVisible(false);
                jauge_eau_4.setVisible(false);
                jauge_eau_5.setVisible(false);
                jauge_eau_6.setVisible(false);
                jauge_eau_7.setVisible(false);
                jauge_eau_8.setVisible(false);
                jauge_eau_9.setVisible(false);
                jauge_eau_10.setVisible(false);
            }
            //jauges soleil//
            if(soleil == 10){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(true);
            }
            if(soleil == 9){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(true);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 8){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(true);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 7){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(true);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 6){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(true);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 5){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(true);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 4){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(true);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 3){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(true);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 2){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(true);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 1){
                jauge_soleil_vide.setVisible(false);
                jauge_soleil_1.setVisible(true);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            if(soleil == 0){
                jauge_soleil_vide.setVisible(true);
                jauge_soleil_1.setVisible(false);
                jauge_soleil_2.setVisible(false);
                jauge_soleil_3.setVisible(false);
                jauge_soleil_4.setVisible(false);
                jauge_soleil_5.setVisible(false);
                jauge_soleil_6.setVisible(false);
                jauge_soleil_7.setVisible(false);
                jauge_soleil_8.setVisible(false);
                jauge_soleil_9.setVisible(false);
                jauge_soleil_10.setVisible(false);
            }
            //jauges terreau//
            if(terreau == 10){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(true);
            }
            if(terreau == 9){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(true);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 8){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(true);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 7){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(true);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 6){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(true);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 5){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(true);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 4){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(true);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 3){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(true);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 2){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(true);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 1){
                jauge_terreau_vide.setVisible(false);
                jauge_terreau_1.setVisible(true);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            if(terreau == 0){
                jauge_terreau_vide.setVisible(true);
                jauge_terreau_1.setVisible(false);
                jauge_terreau_2.setVisible(false);
                jauge_terreau_3.setVisible(false);
                jauge_terreau_4.setVisible(false);
                jauge_terreau_5.setVisible(false);
                jauge_terreau_6.setVisible(false);
                jauge_terreau_7.setVisible(false);
                jauge_terreau_8.setVisible(false);
                jauge_terreau_9.setVisible(false);
                jauge_terreau_10.setVisible(false);
            }
            //jauges oxygene//
            if(oxygene >= 10){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(true);
            }
            if(oxygene == 9){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(true);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 8){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(true);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 7){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(true);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 6){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(true);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 5){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(true);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 4){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(true);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 3){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(true);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 2){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(true);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 1){
                jauge_oxygene_vide.setVisible(false);
                jauge_oxygene_1.setVisible(true);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            if(oxygene == 0){
                jauge_oxygene_vide.setVisible(true);
                jauge_oxygene_1.setVisible(false);
                jauge_oxygene_2.setVisible(false);
                jauge_oxygene_3.setVisible(false);
                jauge_oxygene_4.setVisible(false);
                jauge_oxygene_5.setVisible(false);
                jauge_oxygene_6.setVisible(false);
                jauge_oxygene_7.setVisible(false);
                jauge_oxygene_8.setVisible(false);
                jauge_oxygene_9.setVisible(false);
                jauge_oxygene_10.setVisible(false);
            }
            //jauges population//
            if(population == 10){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(true);
            }
            if(population == 9){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(true);
                jauge_population_10.setVisible(false);
            }
            if(population == 8){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(true);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 7){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(true);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 6){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(true);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 5){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(true);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 4){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(true);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 3){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(true);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 2){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(true);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 1){
                jauge_population_vide.setVisible(false);
                jauge_population_1.setVisible(true);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            if(population == 0){
                jauge_population_vide.setVisible(true);
                jauge_population_1.setVisible(false);
                jauge_population_2.setVisible(false);
                jauge_population_3.setVisible(false);
                jauge_population_4.setVisible(false);
                jauge_population_5.setVisible(false);
                jauge_population_6.setVisible(false);
                jauge_population_7.setVisible(false);
                jauge_population_8.setVisible(false);
                jauge_population_9.setVisible(false);
                jauge_population_10.setVisible(false);
            }
            //jauges objectif//
            if(objectif == 10){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(true);
            }
            if(objectif == 9){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(true);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 8){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(true);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 7){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(true);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 6){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(true);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 5){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(true);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 4){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(true);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 3){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(true);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 2){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(true);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 1){
                jauge_objectif_vide.setVisible(false);
                jauge_objectif_1.setVisible(true);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
            if(objectif == 0){
                jauge_objectif_vide.setVisible(true);
                jauge_objectif_1.setVisible(false);
                jauge_objectif_2.setVisible(false);
                jauge_objectif_3.setVisible(false);
                jauge_objectif_4.setVisible(false);
                jauge_objectif_5.setVisible(false);
                jauge_objectif_6.setVisible(false);
                jauge_objectif_7.setVisible(false);
                jauge_objectif_8.setVisible(false);
                jauge_objectif_9.setVisible(false);
                jauge_objectif_10.setVisible(false);
            }
        }
        //objectif atteint//
        if (objectif == 10 && deroulement_commence == false){
            deroulement_commence = true;
            deroulement_2 = true;
            plante_presente = true;
            plante_cree = true;
            banquier_doit_partir = true;
            theme_musique.stop();
            ambiance_musique.stop();
            son_victoire.play();
            setTimeout(function(){
                son_generique.play();
                ecran_titre_2.setVisible(true);
                if (deroulement_2 == true){
                    ecran_titre_2.setVelocityY(-100);
                }
                setTimeout(function(){
                    deroulement_2 = false;
                    ecran_titre_2.destroy();
                    blackscreen.setVisible(true);
                }, 24000);
            }, 19000);
        }
        
        
        if(plante_presente == true && plante_cree == true && numero_random == 2 && coffre_genere == false && proc_banquier == false){
            coffre_genere = true;
        }
        
        
        //generation aléatoire//
        if (plante_presente == false){
            plante_presente = true;
            compteur_rencontre = compteur_rencontre + 1;
            numero_random = getRandomInt(5);            
        }
        
        //arrivee plantes a l'ecran
        if (plante_presente == true && numero_random == 0 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_exploratrice_presente = true;
            plante_cree = true;
            new_plante_exploratrice = plante_exploratrice.create(1400, 300, 'plante_exploratrice');
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
            plante_astronaute_presente = true;
            plante_cree = true;
            new_plante_astronaute = plante_astronaute.create(1400, 300, 'plante_astronaute');
            new_plante_astronaute.setVelocityX(-300);
            setTimeout(function(){
                new_plante_astronaute.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_oxygene.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 2 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_coffre_presente = true;
            plante_cree = true;
            new_plante_coffre = plante_coffre.create(1400, 300, 'plante_coffre');
            new_plante_coffre.setVelocityX(-300);
            setTimeout(function(){
                new_plante_coffre.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
            }, 2000);
        }
        
        if (plante_presente == true && numero_random == 3 && plante_cree == false && proc_banquier == false && compteur_rencontre < 4){
            plante_meteo_presente = true;
            plante_cree = true;
            new_plante_meteo = plante_meteo.create(1400, 300, 'plante_meteo');
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
            plante_scientifique_presente = true;
            plante_cree = true;
            new_plante_scientifique = plante_scientifique.create(1400, 300, 'plante_scientifique');
            new_plante_scientifique.setVelocityX(-300);
            setTimeout(function(){
                new_plante_scientifique.setVelocityX(0);
                bouton_oui.setVisible(true);
                bouton_non.setVisible(true);
                demande_terreau.setVisible(true);
            }, 2000);
        }
        
        //reset journee, arrivee banquier//
        if(compteur_rencontre == 4 && banquier_doit_partir == false){
            plante_banquiere_presente = true;
            if(compteur_refus < 3){
                proc_banquier = true;
                plante_presente = true;
                plante_cree = true;
                banquier_doit_partir = true;
                new_plante_banquiere = plante_banquiere.create(1400, 300, 'plante_banquiere');
                new_plante_banquiere.setVelocityX(-300);
                setTimeout(function(){
                    new_plante_banquiere.setVelocityX(0);
                    bouton_oui.setVisible(true);
                }, 2000);
            }
            if(compteur_refus >= 3){
                plante_banquiere_2_presente = true;
                plante_banquiere_3_presente = true;
                proc_banquier = true;
                plante_presente = true;
                plante_cree = true;
                banquier_doit_partir = true;
                new_plante_banquiere = plante_banquiere.create(1400, 280, 'plante_banquiere');
                setTimeout(function(){
                    new_plante_banquiere_2 = plante_banquiere.create(1400, 280, 'plante_banquiere');
                    new_plante_banquiere_2.setVelocityX(-300);
                }, 200);
                setTimeout(function(){
                    new_plante_banquiere_3 = plante_banquiere.create(1400, 280, 'plante_banquiere');
                    new_plante_banquiere_3.setVelocityX(-300);
                }, 400);
                //new_plante_banquiere = plante_banquiere.create(1400, 200, 'plante_banquiere');
                new_plante_banquiere.setVelocityX(-300);
                setTimeout(function(){
                    new_plante_banquiere.setVelocityX(0);
                    bouton_oui.setVisible(true);
                }, 2400);
                setTimeout(function(){
                    new_plante_banquiere_2.setVelocityX(0);
                    bouton_oui.setVisible(true);
                }, 2000);
                setTimeout(function(){
                    new_plante_banquiere_3.setVelocityX(0);
                    bouton_oui.setVisible(true);
                }, 1600);
            }
        }
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function remove_exploratrice(){
    setTimeout(function(){
        plante_exploratrice_presente = false;
        new_plante_exploratrice.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_astronaute(){
    setTimeout(function(){
        plante_astronaute_presente = false;
        new_plante_astronaute.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_coffre(){
    setTimeout(function(){
        plante_coffre_presente = false;
        new_plante_coffre.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_meteo(){
    setTimeout(function(){
        plante_meteo_presente = false;
        new_plante_meteo.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_scientifique(){
    setTimeout(function(){
        plante_scientifique_presente = false;
        new_plante_scientifique.destroy();
        plante_presente = false;
        plante_cree = false;
    }, 2000);
}
function remove_banquier(){  
    if(compteur_refus < 3){
        setTimeout(function(){
            plante_banquiere_presente = false;
            new_plante_banquiere.destroy();
            banquier_doit_partir = false;
            proc_banquier = false;
            plante_presente = false;
            plante_cree = false;

        }, 2000);
        compteur_rencontre = 0;  
        jour = jour + 1;
        if (population > 2 && population <= 8){
            oxygene = oxygene + 1;
        }
        if (population > 8){
            oxygene = oxygene + 2;
        }
    }
    if(compteur_refus >= 3){
        setTimeout(function(){
            plante_banquiere_presente = false;
            plante_banquiere_2_presente = false;
            plante_banquiere_3_presente = false;
            new_plante_banquiere.destroy();
            new_plante_banquiere_2.destroy();
            new_plante_banquiere_3.destroy();
            banquier_doit_partir = false;
            proc_banquier = false;
            plante_presente = false;
            plante_cree = false;
            proc_astronaute = false;
            proc_meteo = false;
            proc_scientifique = false;
            proc_exploratrice = false;
            proc_coffre = false;
        }, 2000);
        compteur_rencontre = 0;
        jour = jour + 1;
        var round_oxygene = Math.floor(oxygene/2);
        oxygene = oxygene - round_oxygene;
        var round_eau_soleil = Math.round((eau + soleil)/6);
        if(round_eau_soleil >= 2){
            population = population + round_eau_soleil;
        }
        if(round_eau_soleil < 2){
            population = population - round_eau_soleil;
        }
        compteur_refus = 0;
    }
    
}