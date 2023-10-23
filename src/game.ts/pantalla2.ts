import { Container,Graphics, Text } from "pixi.js";
import { Boton } from "./Boton";
import { SceneManager } from "./SceneManager";
import { MenuScene } from "./menuScene";


export class Ganar extends Container{
    constructor( puntaje:String){
        super();
        const bg= new Graphics();
         bg.beginFill(0x00CCFF,1);
         bg.drawRect(0,0,600,400);
         bg.endFill();
         bg.position.set(20,40);
         this.addChild(bg);
         const text=new Text("GANASTE!!! \nPuntaje: "+ puntaje,{fontFamily: "Arial Black",fontSize:50, align: "center"});
         text.position.set(110,150);
         bg.addChild(text);

        const btnini= new Boton("Volver");
        
        this.addChild(btnini);

        const btnsalir = new Boton("Salir");
        btnsalir.position.set(1200, 40);
        btnsalir.scale.set(0.8);
        btnsalir.on("pointerup", (() => { SceneManager.changeScene(new MenuScene) }));
        this.addChild(btnsalir);

    }
    public update()
    {

    }
    
}        