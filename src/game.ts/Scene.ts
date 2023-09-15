import { Container, Graphics, Sprite } from "pixi.js";

export class Scene extends Container{
    private carta1:Sprite;
    constructor(){
        super();
        const contenedor=new Container()
        this.addChild(contenedor);

            this.carta1=  Sprite.from("alfajor");
            this.carta1.scale.set(0.4);
            this.carta1.visible=true;
            this.carta1.position.set(0,0);
            this.addChild(this.carta1);

          const back:Graphics=new Graphics();
            back.lineStyle(5,0xB5B2B2);
            back.moveTo(0,0);
            back.beginFill(0xB5B2B2,5);
            back.lineTo(100,0);
            back.lineTo(100,120);
            back.lineTo(0,120);
            back.lineTo(0,0);
            back.endFill();
            back.visible=true;
           contenedor.addChild(back);
           contenedor.position.set(100,100);
           contenedor.interactive=true;
           contenedor.on("onpointerdown",this.onPointerDown,this);
           
        }
    private onPointerDown():void
    {
        console.log("carta clikeada");
        /*if (this)
        {
            this.visible=!false;
        }*/
    }
    }
