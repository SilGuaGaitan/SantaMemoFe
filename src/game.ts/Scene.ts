import { Container,Graphics,Text} from "pixi.js";


export class Scene extends Container{
    constructor()
    {
       super();
       let mazo:Array<Graphics> =[];
    
       for( let i=0; i< 20; i++){
          const aux=new Graphics();
            aux.beginFill(0xFFFFFF * Math.random());
            aux.drawRect(0,0,50,50);
            aux.endFill();
            mazo.push(aux);
            const auxText= new Text(i,{fontSize:20});
            aux.addChild(auxText);  
            
       }
       const copia= Array.from(mazo);
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
                    mazo[count].y = 10 + i * (mazo[count].width + 10);
                    mazo[count].x = 10 + j * (mazo[count].height + 10);
                    count++;
                }
             
            }
            }
         
        }
    }
   
