import { Container,Graphics, Text } from "pixi.js";
import { SceneManager } from "./SceneManager";
import { Boton } from "./Boton";
import { MenuScene } from "./menuScene";


export class Perder extends Container{
    constructor( puntaje:String){
        super();
        const bg= new Graphics();
         bg.beginFill(0x00CCFF,1);
         bg.drawRect(0,0,SceneManager.WIDTH,SceneManager.HEIGHT);
         bg.endFill();
         bg.position.set(0,0);
         this.addChild(bg);
         const text=new Text("Perdiste \nPuntaje: "+ puntaje,{fontFamily: "Arial Black",fontSize:50, align: "center"});
         text.position.set(SceneManager.WIDTH/2,SceneManager.HEIGHT/2);
         bg.addChild(text);

         const btnsalir = new Boton("Salir");
         btnsalir.position.set(1200, 100);
         btnsalir.scale.set(0.8);
         btnsalir.on("pointerup", (() => { SceneManager.changeScene(new MenuScene) }));
         this.addChild(btnsalir);

    }
    public update()
    {
        
    }
}        