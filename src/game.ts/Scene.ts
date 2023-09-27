import { Container, Graphics, Sprite} from "pixi.js";
//import { Carta } from "../Carta";

export class Scene extends Container{
//    public carta1:Carta;
  //  public carta2:Carta;
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
        let mazo=["bicho","alfajor","brigadier","costa","basilica","colon","union","faro"];
        let copy=structuredClone(mazo);

        for (let i=mazo.length-1;i>0 ; i--)
           {
            let j=Math.floor(Math.random()*(i+1));
            let temp=mazo[i];
                mazo[i]=mazo[j];
                mazo[j]=temp;
            }
            let copy2=mazo.concat(copy);
         
        for (let z=copy2.length -1;z>0;z-- )
        {  const COLUMNA=4;
           const FILA=4;
           for(let i=0;i<COLUMNA;i++)
           {
            for(let j=0;j<FILA;j++)
            {
             let tempo:Sprite = Sprite.from(copy2[z]);
              tempo.position.x+= 50 ;
              tempo.position.y+= 50 ;
              this.addChild(tempo);
               
            }
           }
            

            
        }
        console.log(copy2);   
        }   
  /*  public onMostrarCarta():void{ 
        console.log("carta clikeada",);
        if(this.carta1.visible==true)
            {
                
                this.carta1.visible=false;
                this.back.visible=true;
                console.log("tapa carta");
            }
            else
            {
                this.carta1.visible= true;
                this.back.visible=false;
                console.log("muestra carta");
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
}