import { Container, Graphics,Sprite } from "pixi.js";

export class Carta extends Container{
    private carta1: Sprite;
    private back:Graphics;
    constructor(def:Sprite){
        super();
      
        const contenedor=new Container()
        contenedor.position.x=100;
        contenedor.position.y=50;
        this.addChild(contenedor);
       
            this.carta1=  Sprite.from(def);
            this.carta1.scale.set(0.3);
            this.carta1.position.set(0,0);
            this.carta1.on("mousedown",this.onMostrarCarta,this);
            this.carta1.interactive=true;
            this.carta1.visible=false;
            contenedor.addChild(this.carta1);

           
            this.back =new Graphics();
            this.back.beginFill(0xFFFFFF * Math.random());
            this.back.drawRect(0,0,50,50);
            this.back.endFill();
            this.back.on("mousedown",this.onMostrarCarta,this);
            this.back.interactive=true;
            this.back.visible=true;

            this.addChild(this.back);

          
        }
    public onMostrarCarta():void
    { let nombre:any;
        console.log("carta clikeada");
        if(this.back.visible==true)
        { 
            this.carta1.visible=true;
            nombre= this.carta1.name;
            console.log("muestra carta "+" la carta es: "+ nombre);
            this.back.visible=false;
        }
        else
        {
            this.back.visible=true;
            this.carta1.visible=false;
            console.log("tapa carta");
        }

    }
           
    }
