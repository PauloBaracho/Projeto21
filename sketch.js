//Declara as Variáveis das Plataformas
var p1,p2,p3,p4;
//Declara as Variáveis das Bordas
var left, right, cima;
//Declara a Variável da Bola
var bola;
//Declara a Variável da Música
var musica;

function preload(){
    //Carrega a Variável da Música
    musica = loadSound ("music.mp3");
}

function setup(){
    //Cria o Canvas e Define suas Proporções
    createCanvas (800,600);
    
    //Cria os Sprites das Plataformas
    p1 = createSprite(100,580,180,30);
    p2 = createSprite(300,580,180,30);
    p3 = createSprite(500,580,180,30);
    p4 = createSprite(700,580,180,30);

    //Dá cor aos Sprites das Plataformas
    p1.shapeColor = "blue";
    p2.shapeColor = "gold";
    p3.shapeColor = "red";
    p4.shapeColor = "green";

    //Cria os Sprites das Bordas
    left = createSprite (0,283,10,567);
    right = createSprite (800,283,10,567);
    cima = createSprite (400,0,800,10);

    //Deixa as Bordas Invisíveis
    left.visible = false;
    right.visible = false;
    cima.visible = false;

    //Cria o Sprite da Bola e Radomiza sua Localização no Eixo X
    bola = createSprite(Math.round(random(50,750)), 100,40,40);
    //Dá cor à bola
    bola.shapeColor = "white";
    //Dá uma Velocidade à Bola no Eixo X
    bola.velocityX = 3;
    //Dá uma Velocidade à Bola no Eixo Y
    bola.velocityY = 3;
}

function draw() {
    //Define o Background e sua Cor
    background(rgb(169,169,169));

    //Diz que a Bola deve Ricochetear ao Colidir com as Bordas do Canvas
    bola.bounceOff(left);
    bola.bounceOff(right);
    bola.bounceOff(cima);

    //Define a Condicional Responsável pela Colisão da Bola com a Plataforma Azul
    if(p1.isTouching(bola) && bola.bounceOff(p1)){
        //Altera a Cor da Bola ao Colidir com a Plataforma
        bola.shapeColor = "blue";
        //Toca a Música quando a Bola Colidir na Plataforma
        musica.play();
    }

    //Define a Condicional Responsável pela Colisão da Bola com a Plataforma Amarela
    if(p2.isTouching(bola)){
        //Altera a Cor da Bola ao Colidir com a Plataforma
        bola.shapeColor = "gold";
        //Altera a Velocidade da Bola no Eixo X para 0
        bola.velocityX = 0;
        //Altera a Velocidade da Bola no Eixo Y para 0
        bola.velocityY = 0;
        //Pausa a Música quando a Bola Colidir na Plataforma
        musica.stop();
    }

    //Define a Condicional Responsável pela Colisão da Bola com a Plataforma Vermelha
    if(p3.isTouching(bola) && bola.bounceOff(p3)){
        //Altera a Cor da Bola ao Colidir com a Plataforma
        bola.shapeColor = "red";
        //Toca a Música quando a Bola Colidir na Plataforma
        musica.play();
    }

    //Define a Condicional Responsável pela Colisão da Bola com a Plataforma Verde
    if(p4.isTouching(bola) && bola.bounceOff(p4)){
        //Altera a Cor da Bola ao Colidir com a Plataforma
        bola.shapeColor = "green";
        //Toca a Música quando a Bola Colidir na Plataforma
        musica.play();
    }
    //Desenha as Sprites
    drawSprites();
}