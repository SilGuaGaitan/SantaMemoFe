import { Container, Sprite } from "pixi.js";

export class Scene extends Container{
    constructor(){
        super();
            const carta1=  Sprite.from("alfajor");
            const carta2=  Sprite.from("brigadier");
            carta1.scale.set(0.5);
            carta2.scale.ser(0.5);
            carta1.position.set(100,100);
            carta2.position.set(300,100);
            this.addChild(carta1);
            this.addChild(carta2);
        }
    }
