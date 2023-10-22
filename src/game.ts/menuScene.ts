
import { Graphics, Sprite, TextStyle, Text } from "pixi.js";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "./SceneManager";
import { Scene } from "./Scene";

export class MenuScene extends SceneBase {
   
    public update(): void {}
    constructor() {
        super();
        const WIDTH=1280;
        const HEIGHT=720;
        const bg= Sprite.from("santafe");
        bg.scale.set(2.5);
        this.addChild(bg);
        const tstyle= new TextStyle({
            align: "center",
            dropShadowAlpha: 0,
            dropShadowBlur: 8,
            fill: [
                "#3e7984",
                "#f70808"
            ],
            fillGradientType: 1,
            fontFamily: "Arial Black",
            fontSize: 80,
            fontWeight: "bold",
            lineJoin: "round",
            stroke: "#f7f3f3",
            strokeThickness: 12
        });

        const texto= new Text("Santa MEMO Fe",tstyle);
        texto.anchor.set(0.5);
        texto.position.set(WIDTH/2, HEIGHT/2);
        texto.scale.set(1);
    
        this.addChild(texto);

        const btnini= new Graphics();
        btnini.beginFill(0xffffff,5);
        btnini.drawRect(0,0,110,50);
        btnini.endFill();
        btnini.position.set(1100,600);
        const textini = new Text("Comenzar",{ fontFamily: "Arial Black",fontSize:20, align: "center" });
        btnini.addChild(textini);
        btnini.on("mousedown",this.goToGame, this);
        btnini.interactive=true;
        this.addChild(btnini);

        const btnsalir= new Graphics();
        btnsalir.beginFill(0xffffff,5);
        btnsalir.drawRect(0,0,70,50);
        btnsalir.endFill();
        btnsalir.position.set(70,600);
        const textsalir = new Text("Salir",{ fontFamily: "Arial Black",fontSize:20, align:"center" });
        btnsalir.addChild(textsalir);
        btnsalir.on("mousedown",this.goToGame, this);
        btnsalir.interactive=true;
        this.addChild(btnsalir);



    }
    private goToGame() {
        console.log("button clicked");
        SceneManager.changeScene(new Scene);
    }
}