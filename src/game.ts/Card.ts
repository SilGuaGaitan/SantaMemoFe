import { Container, Sprite } from "pixi.js";

export class Card extends Container{
    public card:Sprite;
    public sprite:string;
    constructor(sprite:string){
        super();
        this.sprite=sprite;
        this.card=Sprite.from(sprite);
        this.card.anchor.set(0.5);
        this.card.name= String(sprite);
        this.addChild(this.card);
        const back= Sprite.from("back.jpg");
        back.anchor.set(0.5);
        back.width=130;
        back.height=130;
        back.visible=true;
        this.card.addChild(back);
    }
}