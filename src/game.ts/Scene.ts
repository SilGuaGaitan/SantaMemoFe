import { Container, Graphics, Sprite } from "pixi.js";

export class Scene extends Container{
    public carta1:Sprite;
    public carta2:Sprite;
    public back:Graphics;
    constructor()
    {
        super();
        const contenedor=new Container()
        contenedor.position.x=100;
        contenedor.position.y=50;
        this.addChild(contenedor);

            this.carta1=  Sprite.from("alfajor");
            this.carta1.scale.set(0.4);
            this.carta1.position.set(0,0);
            this.carta1.on("mousedown",this.onMouseDown,this);
            this.carta1.interactive=true;
            this.carta1.visible=false;
            this.addChild(this.carta1);

            this.carta2=  Sprite.from("brigadier");
            this.carta2.scale.set(0.4);
            this.carta2.position.set(150,0);
            this.carta2.on("mousedown",this.onMouseDown,this);
            this.carta2.interactive=true;
            this.carta2.visible=false;
            this.addChild(this.carta2);

            this.back =new Graphics();
            this.back.lineStyle(5,0xB5B2B2);
            this.back.moveTo(0,0);
            this.back.beginFill(0xB5B2B2,5);
            this.back.lineTo(120,0);
            this.back.lineTo(120,120);
            this.back.lineTo(0,120);
            this.back.lineTo(0,0);
            this.back.endFill();
            this.back.on("mousedown",this.onMouseDown,this);
            this.back.interactive=true;
            this.back.visible=true;
            contenedor.addChild(this.back);

          
        }
    private onMouseDown():void
    { 
        console.log("carta clikeada");
        if(this.carta1.visible==true)
        {
            this.carta1.visible=false;
            this.back.visible=true;
            console.log("tapa carta");
        }
        else
        {
            this.carta1.visible= true;
            this.back.visible=false;
            console.log("muestra carta");
        }

    }
   /* private comparaCartas(carta1:string,carta2:string):void
    {
       if (carta1==carta2)
       {
        console.log("cartas iguales. Par");
       }
       else
       {
        console.log("cartas distintas. No es un  par");
       }
    }*/
    }
