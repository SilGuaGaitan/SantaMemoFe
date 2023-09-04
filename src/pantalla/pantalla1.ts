import { Container, Sprite, Text } from "pixi.js";

export class Pantalla1 extends Container
{
    constructor(){
        super();
        const bg= Sprite.from("santafe");
        this.addChild(bg);

        const texto= new Text("Santa MEMO Fe");
        this.addChild(texto);

       // const btnmenu= new Button();
        //this.addChild(btnmenu);


    }
}