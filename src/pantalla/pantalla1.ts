import { Container, Sprite, Text } from "pixi.js";
import { HEIGHT, WIDTH } from "..";

export class Pantalla1 extends Container
{
    constructor(){
        super();
        const bg= Sprite.from("santafe");
        bg.scale.set(1.5);
        this.addChild(bg);

        const texto= new Text("Santa MEMO Fe");
        texto.anchor.set(0.5);
        texto.position.set(WIDTH/2,HEIGHT/2);
        texto.scale.set(3);

        this.addChild(texto);

       // const btnmenu= new Button();
        //this.addChild(btnmenu);


    }
}