import {Application, Assets } from 'pixi.js';
import { assets } from './assets';
//import { Menu } from './pantalla/pantalla2';
import { Scene } from './game.ts/Scene';
//import { Pantalla1 } from './pantalla/pantalla1';
//import { Carta } from './carta';


export const WIDTH= 640;
export const HEIGHT = 480;
const app = new Application(
	{
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xFFFFFF,
	width: WIDTH,
	height: HEIGHT,

});
window.addEventListener("resize", ()=>{
	console.log("resized");
	const ScaleX= window.innerWidth/app.screen.width;
	const ScaleY=window.innerHeight/app.screen.height;
	const Scale=Math.min(ScaleX, ScaleY);
	const gameWidth=Math.round(app.screen.width*Scale);
	const gameHeight=Math.round(app.screen.height*Scale);
	const marginHorizontal=Math.floor((window.innerWidth -gameWidth)/2)+"px";
	const marginVertical=Math.floor((window.innerHeight-gameHeight)/2)+"px";
	app.view.style!.width=gameWidth + "px";
	app.view.style!.height=gameHeight +"px";
	(app.view.style as any).marginLeft=marginHorizontal;
	(app.view.style as any).marginRight=marginHorizontal;
	(app.view.style as any).marginTopt=marginVertical;
	(app.view.style as any).marginBottom=marginVertical;
})
window.dispatchEvent(new Event("resize"));
Assets.addBundle("myAssets", assets);
Assets.loadBundle(["myAssets"]).then(()=>{
	const myScene =new Scene();
	app.stage.addChild(myScene);
 	 //Ticker.shared.add(function(deltaFrame){
	 //myScene.update(Ticker.shared.deltaMS,deltaFrame);
  
})

