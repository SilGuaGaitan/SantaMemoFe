import { Container, Sprite, Graphics } from "pixi.js";

export class Carta extends Container{
    public carta1:Sprite;
    public back:Graphics;
    constructor(){
        super();
      
        const contenedor=new Container()
        contenedor.position.x=100;
        contenedor.position.y=50;
        this.addChild(contenedor);

            this.carta1=  Sprite.from("alfajor");
            this.carta1.scale.set(0.4);
            this.carta1.position.set(0,0);
            this.carta1.on("mousedown",this.onMostrarCarta,this);
            this.carta1.interactive=true;
            this.carta1.visible=false;
            contenedor.addChild(this.carta1);

           
            this.back =new Graphics();
            this.back.lineStyle(5,0xB5B2B2);
            this.back.moveTo(0,0);
            this.back.beginFill(0xB5B2B2,5);
            this.back.lineTo(120,0);
            this.back.lineTo(120,120);
            this.back.lineTo(0,120);
            this.back.lineTo(0,0);
            this.back.endFill();
            this.back.on("mousedown",this.onMostrarCarta,this);
            this.back.interactive=true;
            this.back.visible=true;
            contenedor.addChild(this.back);

          
        }
    public onMostrarCarta():void
    { let temp:string;
        console.log("carta clikeada");
        if(this.carta1.visible==true)
        {  
            this.carta1.visible=false;
            this.back.visible=true;
            console.log("tapa carta");
        }
        else
        {
            temp= this.carta1.name ;
            console.log("La carta es:  " + temp);

            this.carta1.visible= true;
            this.back.visible=false;
            console.log("muestra carta");
        }

    }
           
    }
