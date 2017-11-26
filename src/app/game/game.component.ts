import { OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'game',
    template: `
    
    <content>
        <canvas #canvas></canvas>    
    </content>
    `,
    styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit, AfterViewInit{

    public loading: boolean;
    public context: CanvasRenderingContext2D;
    public background = new Image();
    public backgroundSrc: string;

    private _width: 1024;
    private _height: 768;

    @ViewChild('canvas')canvas: ElementRef;

    constructor() {

    }

    ngOnInit() {
        this.backgroundSrc = './assets/images/game/title.png';
        this.background.src = this.backgroundSrc;
        this.context = this.canvas.nativeElement.getContext('2d');
        this.context.drawImage(this.background,0,0);
        console.log('draw image');
    }

    ngAfterViewInit() {
        this.render();
    }

    private clear() {
        this.context.clearRect(0,0,this._width, this._height);
    }

    private render() {
        this.clear();

        //this.context.drawImage(this.background,this._width,this._height,0,0,0,0,this._width,this._height);
    }

}