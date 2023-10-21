import { Container,Sprite, Texture} from "pixi.js";


export class Scene extends Container{
    constructor()
    {
       super();
       let mazo = [];
    
       for( let i=0; i< 20; i++){
        const aux=  new Sprite(Texture.from(String(i)));
        console.log(aux);
        aux.height=50;
        aux.width=50;
        aux.anchor.set(0.5);
        aux.position.set(0,0);
     //   aux.on("mousedown",this.onMostrarCarta,this);
        aux.interactive=true;
        aux.visible=true;
        mazo.push(aux);
        this.addChild(aux);
        }
        let copia =[];
    
       for( let i=0; i< 20; i++){
        const aux=  new Sprite(Texture.from(String(i)));
        console.log(aux);
        aux.height=50;
        aux.width=50;
        aux.anchor.set(0.5);
        aux.position.set(0,0);
       // aux.on("mousedown",this.onMostrarCarta,this);
        aux.interactive=true;
        aux.visible=true;
        copia.push(aux);
        this.addChild(aux);
           
        }
       
       copia.sort(()=>Math.random()-0.5);
       mazo = mazo.concat(copia);
       this.addChild(...mazo);

       const totalElemen = mazo.length;

        console.log(totalElemen);
        const filas=Math.floor(Math.sqrt(totalElemen));
        const columnas= Math.ceil(totalElemen / filas);
        console.log(filas,columnas);

        let count=0;
        for(let i=0; i < columnas; i++){
            for (let j=0; j < filas; j++){
                if (count< totalElemen){
                    mazo[count].y = 100 + i * (mazo[count].width + 10);
                    mazo[count].x = 100 + j * (mazo[count].height + 10);
                    count++;
                    console.log(count);
                }
             
            }
            }
         
        }
        public update()
        {

        }
      /*  public onMostrarCarta():void
        { let nombre:any;
         console.log("carta clikeada");
         if(this.back.visible==true)
         { 
             this.carta1.visible=true;
             nombre= this.carta1.name;
             console.log("muestra carta "+" la carta es: "+ nombre);
             this.back.visible=false;
         }
         else
         {
             this.back.visible=true;
             this.carta1.visible=false;
             console.log("tapa carta");
         }
 
     }*/
    }
   
