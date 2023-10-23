import { Container,Graphics, Text } from "pixi.js";


export class Perder extends Container{
    constructor( puntaje:String){
        super();
        const bg= new Graphics();
         bg.beginFill(0x00CCFF,1);
         bg.drawRect(0,0,600,400);
         bg.endFill();
         bg.position.set(20,40);
         this.addChild(bg);
         const text=new Text("Perdiste \nPuntaje: "+ puntaje,{fontFamily: "Arial Black",fontSize:50, align: "center"});
         text.position.set(110,150);
         bg.addChild(text);

        const btnini= new Graphics();
        btnini.beginFill(0xffffff,5);
        btnini.drawRect(0,0,90,50);
        btnini.endFill();
        btnini.position.set(70,380);
        const textini = new Text("Volver",{ fontFamily: "Arial Black",fontSize:20, align: "center" });
        btnini.addChild(textini);
        this.addChild(btnini);

        const btnsalir= new Graphics();
        btnsalir.beginFill(0xffffff,5);
        btnsalir.drawRect(0,0,70,50);
        btnsalir.endFill();
        btnsalir.position.set(500,380);
        const textsalir = new Text("Salir",{ fontFamily: "Arial Black",fontSize:20, align:"center" });
        btnsalir.addChild(textsalir);
        this.addChild(btnsalir);


    }
    public update()
    {
        
    }
}        