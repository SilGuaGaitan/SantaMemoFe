import { Container } from "pixi.js";

export class Carta extends Container{
    constructor(){
        super();
            const card = new Container();
            this.addChild(card);
        
    }
}