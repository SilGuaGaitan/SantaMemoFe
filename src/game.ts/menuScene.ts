
import { Sprite } from "pixi.js";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "./SceneManager";
import { Scene } from "./Scene";





export class MenuScene extends SceneBase {
    public update(): void {}
    constructor() {
        super();
        const btn = Sprite.from("botonok");
        btn.scale.set(0.1);
        btn.position.set(100,100);
        btn.on("mousedown",this.goToGame, this);
        btn.interactive=true;
        btn.x = 300;
        btn.y = 200;
        this.addChild(btn);

    }
    private goToGame() {
        console.log("button clicked");
        SceneManager.changeScene(new Scene);
    }
}