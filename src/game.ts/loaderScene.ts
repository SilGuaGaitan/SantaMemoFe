
import { Container, Graphics, Assets } from "pixi.js";
import { manifest } from "../assets";
import { SceneBase } from "./SceneBase";
import { SceneManager } from "./SceneManager";
import { MenuScene } from "./menuScene";

export class loaderScene extends Container implements SceneBase {
    private loaderBar: Container;
    private loaderBarBoder: Graphics;
    private loaderBarFill: Graphics;

    constructor() {
        super();

        const loaderBarWidth = SceneManager.WIDTH * 0.8;

        this.loaderBarFill = new Graphics();
        this.loaderBarFill.beginFill(0xF33302, 1)
        this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 100);
        this.loaderBarFill.endFill();
        this.loaderBarFill.scale.x = 0;

        this.loaderBarBoder = new Graphics();
        this.loaderBarBoder.lineStyle(5, 0xFFFFFF, 1);
        this.loaderBarBoder.drawRect(0, 0, loaderBarWidth, 100);

        this.loaderBar = new Container();
        this.loaderBar.addChild(this.loaderBarFill);
        this.loaderBar.addChild(this.loaderBarBoder);
        this.loaderBar.position.x = (SceneManager.WIDTH - this.loaderBar.width) / 2;
        this.loaderBar.position.y = (SceneManager.HEIGHT - this.loaderBar.height) / 2;
        this.addChild(this.loaderBar);

       /* this.texty = new Text("CARGANDO", { fontSize: 30, fill: 0xFFFFFF });
        this.texty.anchor.set(0.5);
        this.texty.position.set(SceneManager.WIDTH / 2, SceneManager.HEIGHT / 2);
        this.addChild(this.texty)*/

        this.initializeLoader().then(() => {
            this.gameLoaded();
        })
    }



    private async initializeLoader(): Promise<void> {
        await Assets.init({ manifest: manifest });
        const bundleIds = manifest.bundles.map(bundle => bundle.name);
        await Assets.loadBundle(bundleIds, this.downloadProgress.bind(this));
    }

    private downloadProgress(progressRatio: number): void {
        this.loaderBarFill.scale.x = progressRatio;
    }

    private gameLoaded(): void {
        SceneManager.changeScene(new MenuScene);
    }

    public update(_framesPassed: number): void 
    {
    
    }
}

