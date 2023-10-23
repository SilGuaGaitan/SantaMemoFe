import { Container, Sprite } from "pixi.js";

export class Card extends Container{
    public card:Sprite;
    public sprite:string;
    public back:Sprite;
    constructor(sprite:string){
        super();
        this.sprite=sprite;
        this.card=Sprite.from(sprite);
        this.card.anchor.set(0.5);
        this.card.height=130;
        this.card.width=130;
        this.card.visible=false;
        this.card.name= String(sprite);
        this.addChild(this.card);
        this.back= Sprite.from("back");
        this.back.anchor.set(0.5);
        this.back.width=130;
        this.back.height=130;
        this.back.visible=true;
        this.addChild(this.back);

        this.on("mouseover",(()=>this.scale.set(this.scale.x*1.03)));
        this.on("mouseout",(()=>this.scale.set(this.scale.x/1.03)));
    }
    mostrarCarta() {
        if (this.card.visible == true) {
            this.card.visible = false;
            this.back.visible = true;
        }
        else {
            this.card.visible = true;
            this.back.visible = false;
        }
    }
}