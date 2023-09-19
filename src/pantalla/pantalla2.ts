import { Container,Graphics,Text } from "pixi.js";
import { WIDTH } from "..";

export class Menu extends Container{
    constructor(){
        super();
        const bg= new Graphics();
        bg.lineStyle(5,0x00F000);
        bg.moveTo(0,0);
        bg.beginFill(0x00F000,5);
        bg.lineTo(300,0);
        bg.lineTo(300,300);
        bg.lineTo(0,300);
        bg.lineTo(0,0);
        bg.endFill();
        this.addChild(bg);
        const mn=new Text("MENU");
        mn.position.set(WIDTH /2,100);
        this.addChild(mn);
        const niveles = new Text("Niveles");
        niveles.position.set(180,150);
        this.addChild(niveles);
        const fc=new Text("Facil");
        fc.position.set(250,200);
        this.addChild(fc);
        const it=new Text("Intermedio");
        it.position.set(250,250);
        this.addChild(it);
        const df=new Text("Dificil");
        df.position.set(250,300);
        this.addChild(df);
        const sd=new Text("Sonido");
        sd.position.set(180,350);
        this.addChild(sd);


    }
}        