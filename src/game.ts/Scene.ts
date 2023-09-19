import { Container, Graphics, Sprite } from "pixi.js";

export class Scene extends Container{
   // public carta1:Sprite;
    //public back:Graphics;
    constructor()
    {
        super();
        const contenedor=new Container()
        contenedor.position.x=100;
        contenedor.position.y=50;
        this.addChild(contenedor);

            const carta1=  Sprite.from("alfajor");
            carta1.scale.set(0.4);
            carta1.position.set(0,0);
            carta1.on("mousedown",this.onMouseDown,this);
            carta1.interactive=true;
            carta1.visible=true;
            this.addChild(carta1);

            const carta2=  Sprite.from("brigadier");
            carta2.scale.set(0.4);
            carta2.position.set(150,0);
            carta2.on("mousedown",this.onMouseDown,this);
            carta2.interactive=true;
            carta2.visible=true;
            this.addChild(carta2);

            const back:Graphics=new Graphics();
            back.lineStyle(5,0xB5B2B2);
            back.moveTo(0,0);
            back.beginFill(0xB5B2B2,5);
            back.lineTo(120,0);
            back.lineTo(120,120);
            back.lineTo(0,120);
            back.lineTo(0,0);
            back.endFill();
            back.on("mousedown",this.onMouseDown,this);
            back.interactive=true;
            back.visible=false;
            contenedor.addChild(back);
          
        }
    private onMouseDown():void
    { 
        console.log("carta clikeada");
      /* if (c==true)
       {
        carta1.visible=true;
        back.visible=false;
       }*/
    }
    }
