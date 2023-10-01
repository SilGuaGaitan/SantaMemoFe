import { Container, Graphics,Text} from "pixi.js";

export class Scene extends Container{
    constructor()
    {
        super();
       
        const mazo:Array<Graphics>=[];
        for (let i=0;i<20;i++){
            const aux=new Graphics();
            aux.beginFill(0x0000FF);
            aux.drawRect(0,0,100,100);
            aux.endFill();
            mazo.push(aux);
            const auxText= new Text(i,{fontSize:50});
            aux.addChild(auxText);
        
        }
        this.addChild(...mazo);
        let count=0;
        for(let i=0;i<4;i++){
            for (let j=0;j<5;j++){
             mazo[count].x= 50 + i+(mazo[count].width +10);
             mazo[count].y= 50 + j+(mazo[count].height +10);
             count ++;
             console.log("contador: ",count);
            }
         
        }
    }
    
}