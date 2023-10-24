import { Container, Text} from "pixi.js";
import { Card } from "./Card";
import { MenuScene } from "./menuScene";
import { SceneManager } from "./SceneManager";
import { Boton } from "./Boton";
import { Ganar } from "./pantalla2";
import { sound } from "@pixi/sound";


export class Scene extends Container{
    queTurnoEs: string = "1";
    carta1: any;
    carta2: any;
    private intentos: Text;
    private puntaje: Text;
    private intentosContador: number = 50;
    private puntajeContador: number = 0;
    constructor()
    {
       super();

       const btnsalir = new Boton("Salir");
       btnsalir.position.set(1200, 100);
       btnsalir.scale.set(0.8);
       btnsalir.on("pointerup", (() => { SceneManager.changeScene(new MenuScene) }));
       this.addChild(btnsalir);

       this.puntaje = new Text("Puntaje:\n0", { align: "center", fontSize: 28 });
       this.puntaje.anchor.set(0.5);
       this.puntaje.position.set(1200, 200);
       this.addChild(this.puntaje);

       this.intentos = new Text("Intentos:\n"+String(this.intentosContador), { align: "center", fontSize: 28 });
       this.intentos.anchor.set(0.5);
       this.intentos.position.set(1200, 400);
       this.addChild(this.intentos);
       let mazo = [];
    
       for( let i=0; i< 20; i++){
            const aux = new Card(String(i));
            aux.on("pointerup", (() => {
                this.turno(aux);
            }));
            aux.interactive = true;
            aux.cursor = "pointer";
            mazo.push(aux);
        }   

        let copia =[];
    
       for( let i=0; i< 20; i++){
        const aux = new Card(String(i));
        aux.on("pointerup", (() => {
            this.turno(aux);
        }));
        aux.interactive = true;
        aux.cursor = "pointer";
        copia.push(aux);
        }
        mazo = mazo.concat(copia);
        mazo.sort(()=>Math.random()-0.5);
        this.addChild(...mazo);

        const totalElemen = mazo.length;
        const filas=8;
        const columnas=5;
     
        let count=0;
        for(let i=0; i < columnas; i++){
            for (let j=0; j < filas; j++){
                if (count< totalElemen){
                    mazo[count].y = 80 + i * (mazo[count].width + 10);
                    mazo[count].x = 80 + j * (mazo[count].height + 10);
                    count++;
                    console.log(count);
                }
             
            }
            }
         
        }
        public update()
        {

        }
        public fiesta()
        {
            sound.play("fiesta");
        }
        public error()
        {
            sound.play("boing");
        }
        public turno(carta: Card) {

            if (this.queTurnoEs == "1") {
                carta.mostrarCarta();
                this.carta1 = carta;
                this.queTurnoEs = "2";
                this.carta1.interactive = false;
    
            } else if (this.queTurnoEs == "2") {
                this.queTurnoEs = "0"; 
                carta.mostrarCarta();
                this.carta2 = carta;
                this.carta2.interactive=false;
    
                setTimeout(() => {
                   
                    if (this.carta1.quecarta == this.carta2.quecarta) {
                        this.removeChild(this.carta1);
                        this.removeChild(this.carta2);
                        this.fiesta();
                       
                        this.puntajeContador += 1;
                        this.puntaje.text = "Puntaje:\n" + String(this.puntajeContador);
                        if(this.puntajeContador > 19){
                            SceneManager.changeScene(new Ganar("GANASTE!!! 🥳\nPuntaje: "+String(this.puntajeContador)));
                        }
                    } 
                    else
                    {
                        this.carta1?.mostrarCarta();
                        this.carta2?.mostrarCarta();
                        this.error();
                        this.intentosContador -= 1;
                        this.intentos.text = "Intentos:\n" + String(this.intentosContador);
                        this.carta1.interactive = true; 
                        this.carta2.interactive = true;

                        if(this.intentosContador < 1){
                           
                            SceneManager.changeScene(new Ganar("Perdiste 😢\nPuntaje: "+String(this.puntajeContador)));
                        }
                    }
                    this.queTurnoEs = "1";
                }, 1000)
            }
       
    }
}   
