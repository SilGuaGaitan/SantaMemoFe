import { Container, Graphics} from "pixi.js";

export class Scene extends Container{
   // public carta1:Sprite;
   // public carta2:Sprite;
    //public back:Graphics;
    constructor()
    {
        super();
        const contenedor=new Container();
        contenedor.position.x=100;
        contenedor.position.y=50;
        this.addChild(contenedor);
        const ini= new Graphics();
        ini.lineStyle(2,0xFFFFF);
        ini.moveTo(0,0);
        ini.beginFill(0x00FF00);
        ini.lineTo(100,0);
        ini.lineTo(100,100);
        ini.lineTo(0,100);
        ini.lineTo(0,0);
        ini.endFill();
        ini.on("mousedown",this.onCrearMazo,this);
        ini.interactive=true;
        ini.visible=true;
        contenedor.addChild(ini)

    }    
    private onCrearMazo():void{
        let mazo=["bicho","alfajor","brigadier"];
        for (let i=mazo.length-1;i>0 ; i--)
           {
            let j=Math.floor(Math.random()*(i+1));
            let temp=mazo[i];
                mazo[i]=mazo[j];
                mazo[j]=temp;
           }
           
           console.log(mazo);
    }


    
}        
    /*private comparaCartas(carta1:string,carta2:string):void
    {
       if (carta1==carta2)
       {
        console.log("cartas iguales. Par");
        //suma un punto en el contador y vuelve a elegir otro par de cartas
       }
       else
       {
        console.log("cartas distintas. No es un  par");
        //no suma punto y resta una chance 
       }
    }*/
